import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonSize, ThemePalette } from '../../types';

@Component({
  selector: 'alvys-button-text',
  templateUrl: './button-text.component.html',
  styleUrls: ['./button-text.component.scss'],
})
export class ButtonTextComponent implements OnInit {
  @Input()
  disabled?: boolean = false;

  @Input()
  size?: ButtonSize = 'large';

  @Input()
  color?: ThemePalette = 'primary';

  @Output()
  onClick = new EventEmitter<Event>();

  get classes(): string[] {
    return [this.size === 'small' ? 'small' : ''];
  }

  constructor() {}

  ngOnInit(): void {}
}
