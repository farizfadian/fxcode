import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'f-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './f-button.html',
  styleUrl: './f-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FButtonComponent {
  @Input() type: string = 'button';
  @Input() label?: string;
  @Input() icon?: string;
  @Input('class') cssClass: string = '';
  @Input() size?: 'sm' | 'md' | 'lg';
  @Input() theme?: string;
  @Input() disabled = false;
  @Input() loading = false;
  @Input() tooltip?: string;
  @Input() tabIndex?: number;
  @Output() onClick = new EventEmitter<void>();

  get btnClasses(): Record<string, boolean> {
    const classes: Record<string, boolean> = { 'btn': true };
    if (this.theme) classes[`btn-${this.theme}`] = true;
    if (this.size) classes[`btn-${this.size}`] = true;
    if (this.icon && !this.label) classes['btn-circle'] = true;
    return classes;
  }

  handleClick(): void {
    if (!this.disabled && !this.loading) {
      this.onClick.emit();
    }
  }
}
