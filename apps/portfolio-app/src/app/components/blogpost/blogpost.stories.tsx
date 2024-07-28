import type { Meta, StoryObj } from '@storybook/react';
import blogpost from './blogpost';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof blogpost> = {
  component: blogpost,
  title: 'blogpost',
};
export default meta;
type Story = StoryObj<typeof blogpost>;

export const Primary = {
  args: {
    imagesource:'../237-200x300.jpg', title:'first post', content:'this is blog post content'
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to blogpost!/gi)).toBeTruthy();
  },
};
