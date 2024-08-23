import { Theme } from '@/app/providers/ThemeProvider';
import React from 'react';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { Navbar } from './Navbar';

import '@/app/styles/index.scss';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,

};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
decorators:[(Story, {parameters}) => {
    return (
        <StoreProvider initialState={{ loginForm: { username: '123', password: '123' } }}>
            <Story />
        </StoreProvider>
    )
}]
};

export const Dark: Story = {
    decorators: [ (Story) => (
        <div className={`app ${Theme.DARK}`}>
            <Story />
        </div>
    ), (Story, {parameters}) => {
        return (
            <StoreProvider initialState={{ loginForm: { username: '123', password: '123' } }}>
                <Story />
            </StoreProvider>
        )
    } ],
};
