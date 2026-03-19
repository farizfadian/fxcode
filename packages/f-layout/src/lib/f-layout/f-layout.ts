import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'f-row',
  standalone: true,
  template: `<div class="row" [class.mt-3]="margin" [class.d-none]="hideOnMobile" [class.d-md-flex]="hideOnMobile"><ng-content></ng-content></div>`,
  styles: [`:host { display: block; }`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FRowComponent {
  @Input() margin = true;
  @Input() hideOnMobile = false;
}

@Component({
  selector: 'f-col',
  standalone: true,
  imports: [NgClass],
  template: `<div [ngClass]="colClasses" [class]="cssClass"><ng-content></ng-content></div>`,
  styles: [`:host { display: block; }`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FColComponent {
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
  selector: 'f-header',
  standalone: true,
  template: `<header class="f-page-header"><ng-content></ng-content></header>`,
  styles: [`
    .f-page-header {
      background-color: var(--primary, #1a73e8);
      min-height: 100px;
      padding: 1rem;
      color: #fff;
      margin: -1rem -1rem 1rem -1rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FHeaderComponent {}

@Component({
  selector: 'f-body',
  standalone: true,
  template: `<div [class.f-body-stack]="mode === 'stack'"><ng-content></ng-content></div>`,
  styles: [`
    .f-body-stack { margin-top: -2rem; position: relative; z-index: 1; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FBodyComponent {
  @Input() mode: 'stack' | 'default' = 'stack';
}

@Component({
  selector: 'f-section',
  standalone: true,
  template: `<section class="mb-4"><ng-content></ng-content></section>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FSectionComponent {}

@Component({
  selector: 'f-container',
  standalone: true,
  template: `<div class="container-fluid px-4"><ng-content></ng-content></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FContainerComponent {}
