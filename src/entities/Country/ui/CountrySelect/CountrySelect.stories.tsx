import React from 'react';
import { CountrySelect } from './CountrySelect';

import '@/app/styles/index.scss';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CountrySelect> = {
    title: 'entities/CountrySelect',
    component: CountrySelect,
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;

export const Primary: Story = {};
