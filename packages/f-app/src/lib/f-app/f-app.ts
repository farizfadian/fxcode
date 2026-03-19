import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({ selector: 'f-app', standalone: true, template: `<div class="f-app"><ng-content></ng-content></div>`, styles: [`.f-app { min-height: 100vh; }`], changeDetection: ChangeDetectionStrategy.OnPush })
export class FAppComponent {}

@Component({ selector: 'f-title', standalone: true, template: `<h1 class="f-page-title mb-0"><ng-content></ng-content></h1>`, styles: [`.f-page-title { font-size: 1.5rem; font-weight: 600; }`], changeDetection: ChangeDetectionStrategy.OnPush })
export class FTitleComponent {}

@Component({ selector: 'f-breadcrumb', standalone: true, template: `<nav aria-label="breadcrumb"><ol class="breadcrumb mb-2 bg-transparent p-0"><ng-content></ng-content></ol></nav>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class FBreadcrumbComponent {}

@Component({ selector: 'f-breadcrumb-item', standalone: true, template: `<li class="breadcrumb-item" [class.active]="active"><ng-content></ng-content></li>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class FBreadcrumbItemComponent { @Input() active = false; }
