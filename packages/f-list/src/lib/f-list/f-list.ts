import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({ selector: 'f-list', standalone: true, template: `<div class="f-list"><ng-content></ng-content></div>`, styles: [`.f-list { list-style: none; padding: 0; margin: 0; }`], changeDetection: ChangeDetectionStrategy.OnPush })
export class FListComponent {}

@Component({ selector: 'f-list-item', standalone: true, template: `<div class="f-list-item d-flex align-items-center p-3 border-bottom"><ng-content></ng-content></div>`, styles: [`.f-list-item:hover { background-color: #f8f9fa; cursor: pointer; }`], changeDetection: ChangeDetectionStrategy.OnPush })
export class FListItemComponent {}

@Component({ selector: 'f-list-title', standalone: true, template: `<div class="f-list-title font-weight-bold"><ng-content></ng-content></div>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class FListTitleComponent {}

@Component({ selector: 'f-list-subtitle', standalone: true, template: `<div class="f-list-subtitle text-muted small"><ng-content></ng-content></div>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class FListSubtitleComponent {}

@Component({ selector: 'f-list-body', standalone: true, template: `<div class="f-list-body flex-grow-1 mx-3"><ng-content></ng-content></div>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class FListBodyComponent {}

@Component({ selector: 'f-list-thumbnail', standalone: true, template: `<div class="f-list-thumbnail"><ng-content></ng-content></div>`, styles: [`.f-list-thumbnail { width: 48px; height: 48px; flex-shrink: 0; } :host ::ng-deep img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }`], changeDetection: ChangeDetectionStrategy.OnPush })
export class FListThumbnailComponent {}

@Component({ selector: 'f-list-button', standalone: true, template: `<div class="f-list-button flex-shrink-0"><ng-content></ng-content></div>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class FListButtonComponent {}
