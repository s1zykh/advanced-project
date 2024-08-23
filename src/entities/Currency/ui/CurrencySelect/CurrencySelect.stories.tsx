import React from 'react';
import { CurrencySelect } from '@/entities/Currency';

import '@/app/styles/index.scss';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CurrencySelect> = {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,

};

export default meta;
type Story = StoryObj<typeof CurrencySelect>;

export const Primary: Story = {

};