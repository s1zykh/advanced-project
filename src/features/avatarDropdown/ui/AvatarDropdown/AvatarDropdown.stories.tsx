import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { AvatarDropdown } from './AvatarDropdown';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof AvatarDropdown> = {
    title: 'shared/AvatarDropdown',
    component: AvatarDropdown,
};

export default meta;

type Story = StoryObj<typeof AvatarDropdown>;

export const Normal: Story = {
    args: {
        
    },
    decorators: [StoreDecorator({})]
};