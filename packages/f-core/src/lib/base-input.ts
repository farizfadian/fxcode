import {
  Directive, ElementRef, EventEmitter, inject, Input, OnInit, Output,
} from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { AutoDestroyable } from './auto-destroyable';
import { ThemeService, TemplateSize } from './theme.service';
import { Device } from './device';
import {
  AutoCapitalize, AutoComplete, AutoCorrect, ButtonHelper,
  InputMode, InputType, OnEnterCallback, PatternRef,
} from './types';

/**
 * Base input component with ControlValueAccessor.
 * All f-input-* components extend this.
 *
 * Improvements from original:
 * - Removed @Injectable (not needed for directives)
 * - Removed console.log debug statements
 * - Simplified onKeyEnter (removed select2-specific handling)
 * - Uses takeUntil pattern via AutoDestroyable
 */
@Directive()
export abstract class BaseInput<T = string>
  extends AutoDestroyable
  implements ControlValueAccessor, OnInit
{
  @Input() id!: string;
  @Input() class?: string;
  @Input() name?: string;
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() placeholder?: string;
  @Input() label?: string;
  @Input() tabIndex?: number;
  @Input() mode: InputMode = 'input';
  @Input() value: T | null = null;
  @Input() isValid = true;
  @Input() invalidFeedback?: string;
  @Input() icon?: string;
  @Input() onEnter: OnEnterCallback = 'nextTabIndex';

  @Output() onKeyupEnter = new EventEmitter<T>();
  @Output() onKeyupPaste = new EventEmitter<T>();

  abstract type: InputType;

  private themeService = inject(ThemeService);
  protected elementRef = inject(ElementRef);

  isMobile = false;
  isDesktop = true;

  private _size?: TemplateSize;
  @Input() set size(val: TemplateSize) { this._size = val; }
  get size(): TemplateSize { return this._size || this.themeService.template_size; }

  // --- ControlValueAccessor ---

  private _onChange: (v: T | null) => void = () => {};
  private _onTouched: () => void = () => {};

  writeValue(value: T): void {
    if (value !== undefined) this.value = value;
  }

  registerOnChange(fn: (v: T | null) => void): void { this._onChange = fn; }
  registerOnTouched(fn: () => void): void { this._onTouched = fn; }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  protected handleInputChange(value: T | null): void {
    if (this.value !== value) {
      this.value = value;
      this._onChange(this.value);
      this._onTouched();
    }
  }

  // --- Lifecycle ---

  constructor() {
    super();
    const el = this.elementRef.nativeElement;
    const formControlName = el.getAttribute('formcontrolname');

    // Remove duplicate attrs that Angular puts on the host element
    el.removeAttribute('id');
    el.removeAttribute('class');

    if (!this.id) this.id = formControlName;
    if (!this.name) this.name = this.id;

    if (!this.tabIndex) {
      this.tabIndex = parseInt(el.getAttribute('tabindex'), 10) || undefined;
      el.removeAttribute('tabindex');
    }
  }

  ngOnInit(): void {
    if (this.value === undefined) this.value = null;
    this.isMobile = Device.isMobile();
    this.isDesktop = !this.isMobile;
  }

  // --- Enter key handler ---

  onKeyEnter(event: KeyboardEvent): void {
    const tag = (event.target as HTMLElement).tagName.toLowerCase();

    if (this.value) {
      this.onKeyupEnter.emit(this.value);
    }

    if (tag === 'textarea') return;

    if (this.onEnter === 'nextTabIndex') {
      event.preventDefault();
      const next = this.tabIndex != null ? this.tabIndex + 1 : null;
      if (next != null) {
        const nextEl = document.querySelector(`[tabindex="${next}"]`) as HTMLElement;
        nextEl?.focus();
      }
    }
  }
}

/**
 * Extended base for text-type inputs (text, email, url, search, tel, password).
 * Adds: maxLength, allowClear, datalist, pattern filtering.
 */
@Directive()
export abstract class BaseTextInput<T = string> extends BaseInput<T> {
  @Input() maxLength = 255;
  @Input() allowClear = true;
  @Input() dataList?: string[];
  @Input() pattern?: string;
  @Input() patternRef?: string;
  @Input() buttons?: ButtonHelper[];
  @Output() onButtonClicked = new EventEmitter<ButtonHelper>();

  // --- AutoCorrect/AutoCapitalize ---
  @Input() autocomplete: AutoComplete = 'off';
  @Input() spellcheck = true;
  @Input() lang?: string;
  @Input() autocorrect: AutoCorrect = 'on';
  @Input() autocapitalize?: AutoCapitalize;

  override ngOnInit(): void {
    super.ngOnInit();

    // Auto-detect lang from document
    if (typeof document !== 'undefined') {
      this.lang = document.documentElement.lang;
    }

    // Auto-set autocapitalize based on field name
    if (!this.autocapitalize && this.name) {
      const n = this.name.toLowerCase();
      if (['name', 'village', 'district', 'city', 'country'].some(q => n.includes(q))) {
        this.autocapitalize = 'words';
      }
    }

    // Auto-set pattern from patternRef
    if (!this.pattern && this.patternRef) {
      this.pattern = PatternRef[this.patternRef as keyof typeof PatternRef];
    } else if (!this.pattern && this.name) {
      const n = this.name.toLowerCase();
      if (['username', 'user_name'].some(q => n.includes(q))) {
        this.pattern = PatternRef.Username;
        this.autocapitalize = undefined;
        this.autocorrect = 'off';
        this.spellcheck = false;
      }
    }
  }

  protected onBlur(inputElement: HTMLInputElement): void {
    this.handleInputChange(inputElement.value.trim() as unknown as T);
  }

  protected onPaste(event: ClipboardEvent, inputElement: HTMLInputElement): void {
    event.preventDefault();
    const text = event.clipboardData?.getData('text/plain');
    if (text) {
      inputElement.value = text.normalize();
      this.filterInput(inputElement);
      this.onKeyupPaste.emit(this.value!);
    }
  }

  protected clearText(): void {
    this.value = null;
    document.getElementById(this.id)?.focus();
    this.handleInputChange('' as unknown as T);
  }

  protected filterInput(inputElement: HTMLInputElement): void {
    if ((this.value as unknown) === inputElement.value) return;
    this.filterByRegex(inputElement);
    this.filterCapitalize(inputElement);
    this.handleInputChange(inputElement.value as unknown as T);
  }

  private filterByRegex(el: HTMLInputElement): void {
    if (!this.pattern) return;
    const regex = new RegExp(this.pattern);
    const filtered = el.value.split('').filter(c => regex.test(c)).join('');
    if (filtered !== el.value) el.value = filtered;
  }

  private filterCapitalize(el: HTMLInputElement): void {
    if (!this.autocapitalize || this.autocapitalize === 'off' || this.autocapitalize === 'none') return;
    const start = el.selectionStart;
    if (this.autocapitalize === 'characters') {
      el.value = el.value.toUpperCase();
    } else if (this.autocapitalize === 'words') {
      el.value = el.value.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    } else {
      el.value = el.value.charAt(0).toUpperCase() + el.value.slice(1);
    }
    el.setSelectionRange(start, start);
  }
}
