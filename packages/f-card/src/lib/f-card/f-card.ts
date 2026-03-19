import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({ selector: 'f-card', standalone: true, template: `<div class="card shadow-sm border-0 h-100"><ng-content></ng-content></div>`, styles: [`.card { border-radius: 12px; transition: transform 0.2s, box-shadow 0.2s; } .card:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(0,0,0,0.1) !important; }`], changeDetection: ChangeDetectionStrategy.OnPush })
export class FCardComponent {}

@Component({ selector: 'f-card-body', standalone: true, template: `<div class="card-body"><ng-content></ng-content></div>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class FCardBodyComponent {}

@Component({ selector: 'f-card-title', standalone: true, template: `<h5 class="card-title font-weight-bold"><ng-content></ng-content></h5>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class FCardTitleComponent {}

@Component({ selector: 'f-card-subtitle', standalone: true, template: `<h6 class="card-subtitle text-muted mb-2"><ng-content></ng-content></h6>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class FCardSubtitleComponent {}

@Component({ selector: 'f-card-thumbnail', standalone: true, template: `<ng-content></ng-content>`, styles: [`:host ::ng-deep img { width: 100%; border-radius: 12px 12px 0 0; object-fit: cover; }`], changeDetection: ChangeDetectionStrategy.OnPush })
export class FCardThumbnailComponent {}

@Component({ selector: 'f-card-button', standalone: true, template: `<div class="card-footer bg-transparent border-0"><ng-content></ng-content></div>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class FCardButtonComponent {}

@Component({ selector: 'f-card-counter', standalone: true, template: `<div class="card shadow-sm border-0 p-3"><div class="d-flex align-items-center"><div class="flex-grow-1"><div class="text-muted small"><ng-content select="[label]"></ng-content></div><div class="h3 font-weight-bold mb-0"><ng-content select="[value]"></ng-content></div></div><div class="ml-3" style="font-size:2rem;color:var(--primary,#1a73e8);"><ng-content select="[icon]"></ng-content></div></div></div>`, styles: [`.card { border-radius: 12px; }`], changeDetection: ChangeDetectionStrategy.OnPush })
export class FCardCounterComponent {}
