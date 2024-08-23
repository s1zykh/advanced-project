import { Theme } from '@/app/providers/ThemeProvider';
import React from 'react';

import { Loader } from './Loader';

import type { Meta, StoryObj } from '@storybook/react';
import '@/app/styles/index.scss';

const meta: Meta<typeof Loader> = {
    title: 'shared/Loader',
    component: Loader,
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Normal: Story = {

};

export const Dark: Story = {
    decorators: [ (Story) => (
        <div className={`app ${Theme.DARK}`}>
            <Story />
        </div>
    ) ],
};
