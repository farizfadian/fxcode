import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Device } from '@fxcode/f-core';

export type ViewMode = 'table' | 'list' | 'grid';

@Component({
  selector: 'f-data-view',
  standalone: true,
  templateUrl: './f-data-view.html',
  styleUrl: './f-data-view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FDataViewComponent implements OnInit {
  @Input() mode: ViewMode = 'table';
  @Input() showToggle: boolean = true;
  @Output() modeChange = new EventEmitter<ViewMode>();

  ngOnInit(): void {
    // Auto-switch to list view on mobile per CLAUDE.md spec
    if (Device.isMobile() || Device.isMobileScreen()) {
      this.mode = 'list';
      this.modeChange.emit(this.mode);
    }
  }

  setMode(mode: ViewMode): void {
    this.mode = mode;
    this.modeChange.emit(this.mode);
  }
}
