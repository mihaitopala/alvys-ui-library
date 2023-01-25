import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ButtonFilledComponent } from 'alvys-ui-components';

export default {
  title: 'Button/Filled',
  component: ButtonFilledComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [MatButtonModule, MatIconModule],
    }),
  ],
} as Meta;

const Template: Story<ButtonFilledComponent> = (
  args: ButtonFilledComponent
) => ({
  props: args,
  template: `
  <app-button-filled [disabled]="disabled" [size]="size">
    Button
  </app-button-filled>
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
} as Partial<ButtonFilledComponent>;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
} as Partial<ButtonFilledComponent>;
