import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { EditableProfileCardHeader } from './EditableProfileCardHeader';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof EditableProfileCardHeader> = {
    title: 'features/editableProfileCard/EditableProfileCardHeader',
    component: EditableProfileCardHeader,
};

export default meta;

type Story = StoryObj<typeof EditableProfileCardHeader>;

export const Normal: Story = {
    args: {},
    decorators: [StoreDecorator({})],
};
