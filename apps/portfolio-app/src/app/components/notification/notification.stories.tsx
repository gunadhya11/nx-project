import type { Meta, StoryObj } from '@storybook/react';
import  notification  from './notification';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof notification> = {
  component: notification,
  title: 'notification',
};
export default meta;
type Story = StoryObj<typeof notification>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to notification!/gi)).toBeTruthy();
  },
};
