import { MatButtonModule } from '@angular/material/button';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
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
  <app-button-outlined [disabled]="disabled" [size]="size" [color]="color" (onClick)="onClick($event)">
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

Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByRole('button'));

  await waitFor(() => expect(args.onClick).toHaveBeenCalled());
};
