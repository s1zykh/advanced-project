import { Theme } from '@/app/providers/ThemeProvider';
import React from 'react';

import { PageError } from './PageError';

import '@/app/styles/index.scss';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PageError> = {
    title: 'widgets/PageError',
    component: PageError,

};

export default meta;
type Story = StoryObj<typeof PageError>;

export const Light: Story = {

};

export const Dark: Story = {
    decorators: [ (Story) => (
        <div className={`app ${Theme.DARK}`}>
            <Story />
        </div>
    ) ],
};
