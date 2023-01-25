import { MatButtonModule } from '@angular/material/button';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ButtonOutlinedComponent } from 'alvys-ui-components';

export default {
  title: 'Button/Outlined',
  component: ButtonOutlinedComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [MatButtonModule],
    }),
  ],
} as Meta;

const Template: Story<ButtonOutlinedComponent> = (
  args: ButtonOutlinedComponent
) => ({
  props: args,
  template: `
  <app-button-outlined [disabled]="disabled" [size]="size">
    Button
  </app-button-outlined>
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
} as Partial<ButtonOutlinedComponent>;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
} as Partial<ButtonOutlinedComponent>;
