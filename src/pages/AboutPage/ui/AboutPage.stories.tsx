import { Theme } from '@/app/providers/ThemeProvider';
import React from 'react';

import AboutPage from './AboutPage';

import type { Meta, StoryObj } from '@storybook/react';
import '@/app/styles/index.scss';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage,
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Normal: Story = {

};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
