import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { expect } from '@storybook/jest';

import { userEvent, waitFor, within } from '@storybook/testing-library';

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
  <alvys-button-filled [disabled]="disabled" [size]="size" (onClick)="onClick($event)" >
    Button
    <mat-icon>keyboard_arrow_down</mat-icon>
  </alvys-button-filled>
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

Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByRole('button'));

  await waitFor(() => expect(args.onClick).toHaveBeenCalled());
};
