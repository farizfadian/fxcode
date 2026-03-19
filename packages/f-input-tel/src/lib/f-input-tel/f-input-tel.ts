import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseTextInput, InputType, PatternRef } from '@fxcode/f-core';

@Component({
  selector: 'f-input-tel',
  standalone: true,
  templateUrl: './f-input-tel.html',
  styleUrl: './f-input-tel.scss',
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => FInputTelComponent), multi: true }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FInputTelComponent extends BaseTextInput {
  override type: InputType = 'tel';
  override maxLength = 30;
  override pattern = PatternRef.Phone;
}
