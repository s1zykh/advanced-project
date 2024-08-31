import { Theme } from '@/app/providers/ThemeProvider';
import React from 'react';

import { NotFoundPage } from './NotFoundPage';

import type { Meta, StoryObj } from '@storybook/react';
import '@/app/styles/index.scss';

const meta: Meta<typeof NotFoundPage> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Normal: Story = {};

export const Dark: Story = {
    decorators: [
        (Story) => (
            <div className={`app ${Theme.DARK}`}>
                <Story />
            </div>
        ),
    ],
};
