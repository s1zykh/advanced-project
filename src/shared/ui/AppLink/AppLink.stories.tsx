import { Theme } from '@/app/providers/ThemeProvider';
import React from 'react';

import { AppLinkTheme, AppLink } from './AppLink';

import '@/app/styles/index.scss';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/',
    },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
};

export const Secondary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
    },
};
export const Red: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.RED,
    },
};
export const PrimaryDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [
        (Story) => (
            <div className={`app ${Theme.DARK}`}>
                <Story />
            </div>
        ),
    ],
};
export const SecondaryDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [
        (Story) => (
            <div className={`app ${Theme.DARK}`}>
                <Story />
            </div>
        ),
    ],
};
export const RedDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.RED,
    },
    decorators: [
        (Story) => (
            <div className={`app ${Theme.DARK}`}>
                <Story />
            </div>
        ),
    ],
};
