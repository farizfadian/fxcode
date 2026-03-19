import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'f-icon',
  standalone: true,
  template: `<i [class]="name" [style.font-size]="size" [style.color]="color"></i>`,
  styles: [`:host { display: inline-flex; align-items: center; }`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FIconComponent {
  @Input() name: string = '';
  @Input() size?: string;
  @Input() color?: string;
}
