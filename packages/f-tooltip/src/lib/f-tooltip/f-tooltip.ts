import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'f-tooltip',
  standalone: true,
  template: `<span [attr.title]="text" [attr.data-toggle]="text ? 'tooltip' : null" [attr.data-placement]="placement"><ng-content></ng-content></span>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FTooltipComponent {
  @Input() text?: string;
  @Input() placement: 'top' | 'bottom' | 'left' | 'right' = 'top';
}
