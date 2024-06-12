import { Theme } from 'app/providers/ThemeProvider';
import React from 'react';

import { Button, ThemeButton } from './Button';

import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,

};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
};

export const Outlined: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
    decorators: [ (Story) => (
        <div className={`app ${Theme.DARK}`}>
            <Story />
        </div>
    ) ],
};
