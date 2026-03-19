import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseTextInput, InputType, PatternRef } from '@fxcode/f-core';

@Component({
  selector: 'f-input-number',
  standalone: true,
  templateUrl: './f-input-number.html',
  styleUrl: './f-input-number.scss',
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => FInputNumberComponent), multi: true }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FInputNumberComponent extends BaseTextInput {
  override type: InputType = 'number';
  override maxLength = 20;
  override pattern = PatternRef.Number;
  override allowClear = false;
}
