import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { AppImage } from './AppImage';

const meta: Meta<typeof AppImage> = {
    title: 'shared/AppImage',
    component: AppImage,
};

export default meta;

type Story = StoryObj<typeof AppImage>;

export const Normal: Story = {
    args: {},
};
