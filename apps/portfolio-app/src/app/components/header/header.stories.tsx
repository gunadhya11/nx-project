import type { Meta, StoryObj } from '@storybook/react';
import  header  from './header';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof header> = {
  component: header,
  title: 'header',
};
export default meta;
type Story = StoryObj<typeof header>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to header!/gi)).toBeTruthy();
  },
};
