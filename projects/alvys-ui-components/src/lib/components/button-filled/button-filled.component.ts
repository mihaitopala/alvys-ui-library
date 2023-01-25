import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-filled',
  templateUrl: './button-filled.component.html',
  styleUrls: ['./button-filled.component.scss'],
})
export class ButtonFilledComponent implements OnInit {
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
