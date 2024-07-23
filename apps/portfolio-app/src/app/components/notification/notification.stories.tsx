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

export const Success = {
  args: {
    message:'record saved successfully',
    title:'successful',
    type:'success'
  },
};

export const Failure = {
  args: {
    message:'record saved successfully',
    title:'successful',
    type:'failure'
  },
};

export const Primary = {
  args: {
    message:'record saved successfully',
    title:'successful',
    type:'default'
  },
};

// export const Heading: Story = {
//   args: {},
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     expect(canvas.getByText(/Welcome to notification!/gi)).toBeTruthy();
//   },
// };
