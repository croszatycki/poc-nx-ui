import { Story, Meta } from '@storybook/react';
import { BuToggle, BuToggleProps } from './BuToggle';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

export default {
  component: BuToggle,
  title: 'BuToggle',
  decorators: [withKnobs],
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      table: {
        category: 'Events',
        subcategory: 'Button Events',
      },
      action: 'clicked',
    },
  },
  args: {
    disabled: boolean('disabled', false),
    checked: boolean('checked', false),
    children: text('children', '')
  }
} as Meta<BuToggleProps>;

const Template: Story<React.PropsWithChildren<BuToggleProps>> = ({children, ...args}) => <BuToggle {...args} >{children}</BuToggle>;

export const Primary = Template.bind({ });
Primary.args = {};
