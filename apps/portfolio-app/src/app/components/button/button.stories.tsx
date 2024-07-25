import type { Meta, StoryObj } from '@storybook/react';
import button from './button';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof button> = {
  component: button,
  title: 'button',
};
export default meta;
type Story = StoryObj<typeof button>;

export const Primary = {
  args: {
    buttonText: 'click me',
    type:'primary',
    handleClick:(e: any)=>console.log(e)
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to button!/gi)).toBeTruthy();
  },
};
