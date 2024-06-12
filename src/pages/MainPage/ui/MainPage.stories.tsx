import { Theme } from 'app/providers/ThemeProvider';
import React from 'react';

import MainPage from './MainPage';

import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';

const meta: Meta<typeof MainPage> = {
    title: 'pages/MainPage',
    component: MainPage,
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Normal: Story = {

};

export const Dark: Story = {
    decorators: [ (Story) => (
        <div className={`app ${Theme.DARK}`}>
            <Story />
        </div>
    ) ],
};
