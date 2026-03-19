import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseTextInput, InputType } from '@fxcode/f-core';

@Component({
  selector: 'f-input-money',
  standalone: true,
  templateUrl: './f-input-money.html',
  styleUrl: './f-input-money.scss',
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => FInputMoneyComponent), multi: true }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FInputMoneyComponent extends BaseTextInput {
  override type: InputType = 'text';
  override allowClear = false;

  @Input() currency = 'IDR';
  @Input() decimalPlaces = 0;
  @Input() thousandSeparator = '.';
  @Input() decimalSeparator = ',';

  /** Formatted display value */
  get displayValue(): string {
    if (this.value == null || this.value === '') return '';
    const num = this.parseNumber(String(this.value));
    if (isNaN(num)) return String(this.value);
    return this.formatNumber(num);
  }

  override filterInput(inputElement: HTMLInputElement): void {
    // Strip non-numeric chars except decimal separator
    const raw = inputElement.value.replace(/[^\d,.\-]/g, '');
    const num = this.parseNumber(raw);

    if (!isNaN(num)) {
      // Store raw number as value
      this.value = String(num) as any;
      // Show formatted in input
      inputElement.value = this.formatNumber(num);
      this.handleInputChange(String(num) as any);
    } else if (raw === '' || raw === '-') {
      this.value = null;
      inputElement.value = '';
      this.handleInputChange(null as any);
    }
  }

  override onBlur(inputElement: HTMLInputElement): void {
    // Re-format on blur
    if (this.value != null && this.value !== '') {
      const num = this.parseNumber(String(this.value));
      if (!isNaN(num)) {
        inputElement.value = this.formatNumber(num);
      }
    }
    this.handleInputChange(this.value);
  }

  private parseNumber(raw: string): number {
    // Normalize: replace thousand separator, replace decimal separator with dot
    let normalized = raw;
    if (this.thousandSeparator === '.') {
      // IDR style: 1.000.000,50
      normalized = normalized.replace(/\./g, '');
      normalized = normalized.replace(',', '.');
    } else {
      // US style: 1,000,000.50
      normalized = normalized.replace(/,/g, '');
    }
    return parseFloat(normalized);
  }

  private formatNumber(num: number): string {
    const fixed = num.toFixed(this.decimalPlaces);
    const [intPart, decPart] = fixed.split('.');

    // Add thousand separators
    const formatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandSeparator);

    if (this.decimalPlaces > 0 && decPart) {
      return formatted + this.decimalSeparator + decPart;
    }
    return formatted;
  }
}
