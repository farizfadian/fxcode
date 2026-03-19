import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'f-loader',
  standalone: true,
  template: `
    <div class="f-loader text-center" [class.overlay]="overlay">
      <div class="spinner-border" [class.spinner-border-sm]="size === 'sm'" [style.color]="color" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      @if (text) { <div class="mt-2 text-muted small">{{ text }}</div> }
    </div>
  `,
  styles: [`
    .overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(255,255,255,0.8); display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 9999; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FLoaderComponent {
  @Input() size: 'sm' | 'md' = 'md';
  @Input() color: string = 'var(--primary, #1a73e8)';
  @Input() text?: string;
  @Input() overlay = false;
}
