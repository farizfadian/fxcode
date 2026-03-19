import { Directive, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

/**
 * Base class that auto-cleans Subscriptions and Subjects on destroy.
 * Extend this in any component/directive to get automatic cleanup.
 *
 * Improved from original:
 * - Uses takeUntil pattern instead of iterating all properties
 * - Cleaner, more performant, standard Angular approach
 */
@Directive()
export abstract class AutoDestroyable implements OnDestroy {
  /** Emit in ngOnDestroy — use with `takeUntil(this.destroy$)` */
  protected readonly destroy$ = new Subject<void>();

  /** Track subscriptions for manual cleanup */
  protected readonly subscriptions: Subscription[] = [];

  ngOnDestroy(): void {
    // Signal takeUntil subscribers
    this.destroy$.next();
    this.destroy$.complete();

    // Unsubscribe all tracked subscriptions
    for (const sub of this.subscriptions) {
      if (sub && !sub.closed) {
        sub.unsubscribe();
      }
    }
    this.subscriptions.length = 0;
  }

  /** Helper to track a subscription for auto-cleanup */
  protected addSub(sub: Subscription): Subscription {
    this.subscriptions.push(sub);
    return sub;
  }
}
