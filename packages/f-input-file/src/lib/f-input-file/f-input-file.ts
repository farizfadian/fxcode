import {
  ChangeDetectionStrategy, Component, EventEmitter,
  forwardRef, Input, Output,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseInput, InputType } from '@fxcode/f-core';

@Component({
  selector: 'f-input-file',
  standalone: true,
  templateUrl: './f-input-file.html',
  styleUrl: './f-input-file.scss',
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => FInputFileComponent), multi: true }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FInputFileComponent extends BaseInput {
  override type: InputType = 'file';

  @Input() accept?: string;
  @Input() multiple = false;
  @Output() onFileSelected = new EventEmitter<File[]>();

  selectedFiles: File[] = [];

  get fileNames(): string {
    if (!this.selectedFiles.length) return '';
    return this.selectedFiles.map(f => f.name).join(', ');
  }

  onFileChange(target: EventTarget | null): void {
    const input = target as HTMLInputElement;
    if (input?.files) {
      this.selectedFiles = Array.from(input.files);
      this.onFileSelected.emit(this.selectedFiles);
      this.handleInputChange(this.fileNames || null);
    }
  }

  clearFiles(): void {
    this.selectedFiles = [];
    this.value = null;
    this.handleInputChange(null);
    const el = document.getElementById(this.id) as HTMLInputElement;
    if (el) el.value = '';
  }
}
