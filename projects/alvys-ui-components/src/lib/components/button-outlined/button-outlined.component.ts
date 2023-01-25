import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-outlined',
  templateUrl: './button-outlined.component.html',
  styleUrls: ['./button-outlined.component.scss'],
})
export class ButtonOutlinedComponent implements OnInit {
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
