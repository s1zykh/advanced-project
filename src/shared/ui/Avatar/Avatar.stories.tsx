import React from 'react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import AvatarImg from './storybook.jpg';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story =  {
    args: {
        size: 150,
        src: AvatarImg,
    }
}

export const Small: Story = {
    args: {
        size: 50,
        src: AvatarImg,
    }
}
