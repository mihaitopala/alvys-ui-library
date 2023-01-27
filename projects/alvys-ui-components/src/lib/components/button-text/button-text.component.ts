import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ButtonSize } from '../../enums/button-size.enum';

@Component({
  selector: 'app-button-text',
  templateUrl: './button-text.component.html',
  styleUrls: ['./button-text.component.scss'],
})
export class ButtonTextComponent implements OnInit {
  @Input()
  disabled?: boolean = false;

  @Input()
  size?: ButtonSize = ButtonSize.Large;

  @Input()
  color?: ThemePalette = 'primary';

  @Output()
  onClick = new EventEmitter<Event>();

  get classes(): string[] {
    return [this.size === ButtonSize.Small ? ButtonSize.Small : ''];
  }

  constructor() {}

  ngOnInit(): void {}
}
