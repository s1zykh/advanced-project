import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { EditableProfileCard } from './EditableProfileCard';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof EditableProfileCard> = {
    title: 'features/editableProfileCard/EditableProfileCard',
    component: EditableProfileCard,
};

export default meta;

type Story = StoryObj<typeof EditableProfileCard>;

export const Normal: Story = {
    args: {},
    decorators: [StoreDecorator({})],
};
