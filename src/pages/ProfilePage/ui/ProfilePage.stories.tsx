import React from 'react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import ProfilePage from '@/pages/ProfilePage/ui/ProfilePage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import '@/app/styles/index.scss';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Normal: Story = {
    decorators: [
        StoreDecorator({
            profile: {
                form: {
                    username: 'admin',
                    age: 22,
                    country: Country.Ukraine,
                    lastname: 'ulbi tv',
                    first: 'asd',
                    city: 'asf',
                    currency: Currency.USD,
                },
            },
        }),
    ],
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            profile: {
                form: {
                    username: 'admin',
                    age: 22,
                    country: Country.Ukraine,
                    lastname: 'ulbi tv',
                    first: 'asd',
                    city: 'asf',
                    currency: Currency.USD,
                },
            },
        }),
    ],
};
