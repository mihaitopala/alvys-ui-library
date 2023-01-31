import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RangeDatePickerComponent } from 'alvys-ui-components';
import { AngularMaterialModule } from 'projects/alvys-ui-components/src/lib/angular-material.module';

export default {
  title: 'DatePicker/Range',
  component: RangeDatePickerComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [BrowserAnimationsModule, FormsModule, ReactiveFormsModule, AngularMaterialModule],
      providers: []
    }),
  ],
} as Meta;

const Template: Story<RangeDatePickerComponent> = (
  args: RangeDatePickerComponent
) => ({
  props: args,
});

export const Range = Template.bind({});
Range.args = {};
