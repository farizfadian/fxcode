import {
  AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnDestroy, ViewChild,
} from '@angular/core';
import { fromEvent, Subject, takeUntil } from 'rxjs';

/**
 * Simple responsive table wrapper. Just wraps content in div.table-responsive.
 */
@Component({
  selector: 'f-table-responsive',
  standalone: true,
  template: `<div class="table-responsive"><ng-content></ng-content></div>`,
  styles: [`:host { display: block; width: 100%; }`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FTableResponsiveComponent {}

/**
 * Default styled table. Wraps content in <table> with Bootstrap classes.
 */
@Component({
  selector: 'f-table-default',
  standalone: true,
  template: `<table class="table table-hover table-striped table-sm w-100"><ng-content></ng-content></table>`,
  styles: [`:host { display: block; width: 100%; }`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FTableDefaultComponent {}

/**
 * Scrollable table with sticky checkbox (left) and action buttons (right).
 * Shows scroll shadows when content is scrolled horizontally.
 * This is the PRIMARY table component for BizCore — per CLAUDE.md spec.
 */
@Component({
  selector: 'f-table-scrollable',
  standalone: true,
  templateUrl: './f-table-scrollable.html',
  styleUrl: './f-table-scrollable.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FTableScrollableComponent implements AfterViewInit, OnDestroy {
  @ViewChild('tableScrollable') tableScrollable!: ElementRef<HTMLElement>;
  @Input() maxHeight: string = '400px';

  private destroy$ = new Subject<void>();
  private scrollTimeout?: number;

  ngAfterViewInit(): void {
    const container = this.tableScrollable.nativeElement;
    fromEvent(container, 'scroll')
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.handleScroll(container));
  }

  ngOnDestroy(): void {
    if (this.scrollTimeout) window.clearTimeout(this.scrollTimeout);
    this.destroy$.next();
    this.destroy$.complete();
  }

  private handleScroll(container: HTMLElement): void {
    if (this.scrollTimeout) window.clearTimeout(this.scrollTimeout);
    this.updateShadows(container);
    this.scrollTimeout = window.setTimeout(() => this.clearShadows(), 150);
  }

  private updateShadows(el: HTMLElement): void {
    const scrolledRight = el.scrollLeft > 0;
    const scrolledLeft = el.scrollLeft < el.scrollWidth - el.clientWidth - 1;
    this.toggleShadow('sticky-left', scrolledRight, 'shadow-left');
    this.toggleShadow('sticky-right', scrolledLeft, 'shadow-right');
  }

  private clearShadows(): void {
    this.toggleShadow('sticky-left', false, 'shadow-left');
    this.toggleShadow('sticky-right', false, 'shadow-right');
  }

  private toggleShadow(selector: string, add: boolean, cls: string): void {
    this.tableScrollable.nativeElement.querySelectorAll(`.${selector}`).forEach(el => {
      add ? el.classList.add(cls) : el.classList.remove(cls);
    });
  }
}
