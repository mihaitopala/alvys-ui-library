import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-text',
  templateUrl: './button-text.component.html',
  styleUrls: ['./button-text.component.scss'],
})
export class ButtonTextComponent implements OnInit {
  @Input()
  disabled?: boolean = false;

  @Input()
  size?: 'small' | 'large' = 'large';

  @Output()
  onClick = new EventEmitter<Event>();

  get classes(): string[] {
    return [this.size === 'small' ? 'small' : ''];
  }

  constructor() {}

  ngOnInit(): void {}
}
