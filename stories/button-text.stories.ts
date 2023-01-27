import { MatButtonModule } from '@angular/material/button';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
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
  <alvys-button-text [disabled]="disabled" [size]="size" (onClick)="onClick($event)">
    Button
  </alvys-button-text>
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

Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByRole('button'));

  await waitFor(() => expect(args.onClick).toHaveBeenCalled());
};
