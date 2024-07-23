import type { Meta, StoryObj } from '@storybook/react';
import  postlist  from './postlist';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof postlist> = {
  component: postlist,
  title: 'postlist',
};
export default meta;
type Story = StoryObj<typeof postlist>;

export const Primary = {
  args: {
    posts:[{title:'post title', content:'post content here'}]
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to postlist!/gi)).toBeTruthy();
  },
};
