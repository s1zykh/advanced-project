import React from 'react';
import { Avatar } from './Avatar';
import AvatarImg from '@/shared/assets/tests/storybook.jpg';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
    args: {
        size: 150,
        src: AvatarImg,
    },
};

export const Small: Story = {
    args: {
        size: 50,
        src: AvatarImg,
    },
};
