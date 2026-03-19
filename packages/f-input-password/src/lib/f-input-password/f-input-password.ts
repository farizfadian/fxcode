import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseTextInput, InputType } from '@fxcode/f-core';

@Component({
  selector: 'f-input-password',
  standalone: true,
  templateUrl: './f-input-password.html',
  styleUrl: './f-input-password.scss',
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => FInputPasswordComponent), multi: true }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FInputPasswordComponent extends BaseTextInput {
  override type: InputType = 'password';
  override autocomplete = 'current-password' as const;

  showPassword = false;

  togglePassword(): void {
    this.showPassword = !this.showPassword;
    this.type = this.showPassword ? 'text' : 'password';
  }
}
