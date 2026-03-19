import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'f-form-row',
  standalone: true,
  template: `<div class="form-row" [class]="cssClass"><ng-content></ng-content></div>`,
  styles: [`:host { display: block; }`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FFormRowComponent {
  @Input('class') cssClass: string = '';
}

@Component({
  selector: 'f-form-group',
  standalone: true,
  imports: [NgClass],
  template: `<div class="form-group" [ngClass]="colClasses" [class]="cssClass"><ng-content></ng-content></div>`,
  styles: [`:host { display: block; }`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FFormGroupComponent {
  @Input('class') cssClass: string = '';
  @Input() col?: string;
  @Input() sm?: string;
  @Input() md?: string;
  @Input() lg?: string;
  @Input() xl?: string;

  get colClasses(): Record<string, boolean> {
    const classes: Record<string, boolean> = {};
    if (this.col) classes[`col-${this.col}`] = true;
    if (this.sm) classes[`col-sm-${this.sm}`] = true;
    if (this.md) classes[`col-md-${this.md}`] = true;
    if (this.lg) classes[`col-lg-${this.lg}`] = true;
    if (this.xl) classes[`col-xl-${this.xl}`] = true;
    if (!this.col && !this.sm && !this.md && !this.lg && !this.xl) classes['col'] = true;
    return classes;
  }
}

@Component({
  selector: 'f-form-row-divider',
  standalone: true,
  template: `<div class="form-row"><div class="col-12"><hr /></div></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FFormRowDividerComponent {}

@Component({
  selector: 'f-label',
  standalone: true,
  template: `<label [attr.for]="forId"><ng-content></ng-content></label>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FLabelComponent {
  @Input('for') forId?: string;
}
