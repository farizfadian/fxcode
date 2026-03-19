import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseInput, InputType } from '@fxcode/f-core';

export interface SelectOption {
  value: string | number;
  label: string;
}

@Component({
  selector: 'f-select',
  standalone: true,
  templateUrl: './f-select.html',
  styleUrl: './f-select.scss',
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => FSelectComponent), multi: true }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FSelectComponent extends BaseInput {
  override type: InputType = 'text';

  @Input() options: SelectOption[] = [];
  @Input() emptyLabel = '-- Select --';
  @Input() showEmpty = true;

  onSelectChange(target: EventTarget | null): void {
    const select = target as HTMLSelectElement;
    if (select) {
      this.handleInputChange(select.value || null);
    }
  }
}
