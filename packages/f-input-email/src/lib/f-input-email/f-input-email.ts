import { ChangeDetectionStrategy, Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseTextInput, InputType, PatternRef } from '@fxcode/f-core';

const EMAIL_DOMAINS = [
  'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
  'yahoo.co.id', 'gmail.co.id', 'live.com', 'icloud.com',
  'protonmail.com', 'mail.com',
];

@Component({
  selector: 'f-input-email',
  standalone: true,
  templateUrl: './f-input-email.html',
  styleUrl: './f-input-email.scss',
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => FInputEmailComponent), multi: true }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FInputEmailComponent extends BaseTextInput implements OnInit {
  override type: InputType = 'email';
  override maxLength = 70;
  override autocomplete = 'on' as const;
  override autocapitalize = 'off' as const;
  override autocorrect = 'off' as const;
  override spellcheck = false;

  @Input() domains: string[] = EMAIL_DOMAINS;

  override ngOnInit(): void {
    if (!this.pattern) {
      this.pattern = PatternRef.Email;
    }
    super.ngOnInit();
  }

  get emailSuggestions(): string[] {
    if (!this.value || typeof this.value !== 'string') return [];
    const val = this.value;
    const atIndex = val.indexOf('@');
    if (atIndex < 1) return [];
    const localPart = val.substring(0, atIndex);
    const domainPart = val.substring(atIndex + 1);
    return this.domains
      .filter(d => !domainPart || d.startsWith(domainPart))
      .map(d => `${localPart}@${d}`);
  }
}
