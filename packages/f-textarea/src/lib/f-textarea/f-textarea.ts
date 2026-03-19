import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseTextInput, InputType } from '@fxcode/f-core';

@Component({
  selector: 'f-textarea',
  standalone: true,
  templateUrl: './f-textarea.html',
  styleUrl: './f-textarea.scss',
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => FTextareaComponent), multi: true }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FTextareaComponent extends BaseTextInput {
  override type: InputType = 'textarea';
  override maxLength = 2000;
  override allowClear = false;

  @Input() rows = 3;
}
