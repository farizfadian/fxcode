import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({ selector: 'f-modal-header', standalone: true, template: `<div class="modal-header"><ng-content></ng-content></div>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class FModalHeaderComponent {}

@Component({ selector: 'f-modal-title', standalone: true, template: `<h5 class="modal-title"><ng-content></ng-content></h5>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class FModalTitleComponent {}

@Component({ selector: 'f-modal-body', standalone: true, template: `<div class="modal-body"><ng-content></ng-content></div>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class FModalBodyComponent {}

@Component({ selector: 'f-modal-footer', standalone: true, template: `<div class="modal-footer"><ng-content></ng-content></div>`, changeDetection: ChangeDetectionStrategy.OnPush })
export class FModalFooterComponent {}
