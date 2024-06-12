import { Theme } from 'app/providers/ThemeProvider';
import React from 'react';

import { Navbar } from './Navbar';

import 'app/styles/index.scss';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,

};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {

};

export const Dark: Story = {
    decorators: [ (Story) => (
        <div className={`app ${Theme.DARK}`}>
            <Story />
        </div>
    ) ],
};
