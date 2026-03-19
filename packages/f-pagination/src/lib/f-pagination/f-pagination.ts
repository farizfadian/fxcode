import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'f-pagination',
  standalone: true,
  templateUrl: './f-pagination.html',
  styleUrl: './f-pagination.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FPaginationComponent implements OnChanges {
  @Input() page: number = 1;
  @Input() size: number = 10;
  @Input() totalElements: number = 0;
  @Input() pageSizes: number[] = [10, 25, 50, 100];

  @Output() pageChange = new EventEmitter<number>();
  @Output() sizeChange = new EventEmitter<number>();

  totalPages: number = 0;
  pages: number[] = [];

  ngOnChanges(): void {
    this.totalPages = Math.ceil(this.totalElements / this.size) || 1;
    this.buildPages();
  }

  goToPage(p: number): void {
    if (p >= 1 && p <= this.totalPages && p !== this.page) {
      this.page = p;
      this.pageChange.emit(this.page);
    }
  }

  onSizeChange(newSize: number): void {
    this.size = newSize;
    this.page = 1;
    this.sizeChange.emit(this.size);
    this.pageChange.emit(1);
  }

  private buildPages(): void {
    const range = 2; // show 2 pages before and after current
    const start = Math.max(1, this.page - range);
    const end = Math.min(this.totalPages, this.page + range);
    this.pages = [];
    for (let i = start; i <= end; i++) {
      this.pages.push(i);
    }
  }
}
