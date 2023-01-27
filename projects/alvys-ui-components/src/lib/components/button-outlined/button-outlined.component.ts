import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonSize, ThemePalette } from '../../types';

@Component({
  selector: 'alvys-button-outlined',
  templateUrl: './button-outlined.component.html',
  styleUrls: ['./button-outlined.component.scss'],
})
export class ButtonOutlinedComponent implements OnInit {
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
