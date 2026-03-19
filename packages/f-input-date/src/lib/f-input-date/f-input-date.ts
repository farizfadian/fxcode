import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseTextInput, InputType } from '@fxcode/f-core';

@Component({
  selector: 'f-input-date',
  standalone: true,
  templateUrl: './f-input-date.html',
  styleUrl: './f-input-date.scss',
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => FInputDateComponent), multi: true }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FInputDateComponent extends BaseTextInput {
  override type: InputType = 'date';
  override maxLength = 20;
  override allowClear = false;
}
