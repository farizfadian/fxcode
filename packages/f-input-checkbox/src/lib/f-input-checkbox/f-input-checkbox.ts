import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseInput, InputType } from '@fxcode/f-core';

@Component({
  selector: 'f-input-checkbox',
  standalone: true,
  templateUrl: './f-input-checkbox.html',
  styleUrl: './f-input-checkbox.scss',
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => FInputCheckboxComponent), multi: true }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FInputCheckboxComponent extends BaseInput<boolean> {
  override type: InputType = 'checkbox';

  onCheckboxChange(target: EventTarget | null): void {
    const checkbox = target as HTMLInputElement;
    if (checkbox) {
      this.handleInputChange(checkbox.checked);
    }
  }
}
