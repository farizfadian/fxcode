import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({ selector: 'f-grid', standalone: true, template: `<div class="row"><ng-content></ng-content></div>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class FGridComponent {}

@Component({ selector: 'f-grid-body', standalone: true, template: `<div class="f-grid-body p-2"><ng-content></ng-content></div>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class FGridBodyComponent {}

@Component({ selector: 'f-grid-thumbnail', standalone: true, template: `<div class="f-grid-thumbnail"><ng-content></ng-content></div>`, styles: [`:host ::ng-deep img { width: 100%; height: 180px; object-fit: cover; border-radius: 8px 8px 0 0; }`], changeDetection: ChangeDetectionStrategy.OnPush })
export class FGridThumbnailComponent {}

@Component({ selector: 'f-grid-button', standalone: true, template: `<div class="f-grid-button p-2 text-right"><ng-content></ng-content></div>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class FGridButtonComponent {}
