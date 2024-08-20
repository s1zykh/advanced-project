
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ArticleSortSelector } from './ArticleSortSelector';

const meta: Meta<typeof ArticleSortSelector> = {
    title: 'entities/ArticleSortSelector',
    component: ArticleSortSelector,
};

export default meta;

type Story = StoryObj<typeof ArticleSortSelector>;

export const Normal: Story = {
    args: {
        
    },
};