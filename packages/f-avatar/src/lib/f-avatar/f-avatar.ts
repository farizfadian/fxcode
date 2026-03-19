import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'f-avatar',
  standalone: true,
  template: `
    @if (src) {
      <img [src]="src" [alt]="alt || name" class="f-avatar-img" [style.width]="sizeStr" [style.height]="sizeStr" />
    } @else {
      <div class="f-avatar-initials" [style.width]="sizeStr" [style.height]="sizeStr" [style.font-size]="fontSize" [style.background-color]="bgColor">
        {{ initials }}
      </div>
    }
  `,
  styles: [`
    :host { display: inline-block; }
    .f-avatar-img { border-radius: 50%; object-fit: cover; }
    .f-avatar-initials {
      border-radius: 50%; display: flex; align-items: center; justify-content: center;
      color: #fff; font-weight: 600; text-transform: uppercase;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FAvatar {
  @Input() src?: string;
  @Input() name: string = '';
  @Input() alt?: string;
  @Input() size: number = 40;

  get sizeStr(): string { return this.size + 'px'; }
  get fontSize(): string { return (this.size / 2.5) + 'px'; }
  get initials(): string {
    return this.name.split(' ').map(w => w.charAt(0)).join('').substring(0, 2);
  }
  get bgColor(): string {
    let hash = 0;
    for (let i = 0; i < this.name.length; i++) hash = this.name.charCodeAt(i) + ((hash << 5) - hash);
    const hue = Math.abs(hash % 360);
    return `hsl(${hue}, 55%, 55%)`;
  }
}
