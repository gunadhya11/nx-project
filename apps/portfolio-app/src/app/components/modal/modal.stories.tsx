import type { Meta, StoryObj } from '@storybook/react';
import modal from './modal';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof modal> = {
  component: modal,
  title: 'modal',
};
export default meta;
type Story = StoryObj<typeof modal>;

export const Primary = {
  args: {},
  children:<h1>hi</h1>
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to modal!/gi)).toBeTruthy();
  },
};
