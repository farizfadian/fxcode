import {
  ChangeDetectionStrategy, Component, EventEmitter,
  forwardRef, Input, OnDestroy, OnInit, Output,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseTextInput, InputType } from '@fxcode/f-core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'f-input-search',
  standalone: true,
  templateUrl: './f-input-search.html',
  styleUrl: './f-input-search.scss',
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => FInputSearchComponent), multi: true }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FInputSearchComponent extends BaseTextInput implements OnInit, OnDestroy {
  override type: InputType = 'search';
  override allowClear = true;
  override icon = 'bi bi-search';

  @Input() debounceMs = 300;
  @Output() onSearch = new EventEmitter<string>();

  private searchSubject = new Subject<string>();

  override ngOnInit(): void {
    super.ngOnInit();
    this.searchSubject.pipe(
      debounceTime(this.debounceMs),
      distinctUntilChanged(),
      takeUntil(this.destroy$),
    ).subscribe(term => this.onSearch.emit(term));
  }

  override filterInput(inputElement: HTMLInputElement): void {
    super.filterInput(inputElement);
    this.searchSubject.next(inputElement.value);
  }

  override clearText(): void {
    super.clearText();
    this.searchSubject.next('');
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.searchSubject.complete();
  }
}
