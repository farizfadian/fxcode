import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseTextInput, InputType } from '@fxcode/f-core';

@Component({
  selector: 'f-input-text',
  standalone: true,
  templateUrl: './f-input-text.html',
  styleUrl: './f-input-text.scss',
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => FInputTextComponent), multi: true }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FInputTextComponent extends BaseTextInput {
  override type: InputType = 'text';
}
