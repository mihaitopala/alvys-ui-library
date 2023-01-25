import { MatButtonModule } from '@angular/material/button';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ButtonTextComponent } from 'alvys-ui-components';

export default {
  title: 'Button/Text',
  component: ButtonTextComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [MatButtonModule],
    }),
  ],
} as Meta;

const Template: Story<ButtonTextComponent> = (args: ButtonTextComponent) => ({
  props: args,
  template: `
  <app-button-text [disabled]="disabled" [size]="size">
    Button
  </app-button-text>
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
} as Partial<ButtonTextComponent>;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
} as Partial<ButtonTextComponent>;
