import { Theme } from '@/app/providers/ThemeProvider';
import React from 'react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { Sidebar } from './Sidebar';

import '@/app/styles/index.scss';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,

};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
decorators: [StoreDecorator({
    user: { authData: {} },
}),]
};

export const Dark: Story = {
    decorators: [ (Story) => (
        <div className={`app ${Theme.DARK}`}>
            <Story />
        </div>
    ), StoreDecorator({
        user: { authData: {} },
    }), ],
};
