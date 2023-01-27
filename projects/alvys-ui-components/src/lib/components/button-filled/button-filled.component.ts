import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonSize, ThemePalette } from '../../types';

@Component({
  selector: 'alvys-button-filled',
  templateUrl: './button-filled.component.html',
  styleUrls: ['./button-filled.component.scss'],
})
export class ButtonFilledComponent implements OnInit {
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
