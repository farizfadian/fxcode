import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseInput, InputType } from '@fxcode/f-core';

@Component({
  selector: 'f-input-switch',
  standalone: true,
  templateUrl: './f-input-switch.html',
  styleUrl: './f-input-switch.scss',
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => FInputSwitchComponent), multi: true }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FInputSwitchComponent extends BaseInput<boolean> {
  override type: InputType = 'switch';

  onSwitchChange(target: EventTarget | null): void {
    const input = target as HTMLInputElement;
    if (input) {
      this.handleInputChange(input.checked);
    }
  }
}
