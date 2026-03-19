import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'f-alert',
  standalone: true,
  template: `
    @if (visible) {
      <div class="alert" [class]="'alert-' + type" [class.alert-dismissible]="dismissible" role="alert">
        <ng-content></ng-content>
        @if (dismissible) {
          <button type="button" class="close" (click)="dismiss()"><span>&times;</span></button>
        }
      </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FAlertComponent {
  @Input() type: string = 'info';
  @Input() dismissible = false;
  @Output() dismissed = new EventEmitter<void>();
  visible = true;
  dismiss(): void { this.visible = false; this.dismissed.emit(); }
}
