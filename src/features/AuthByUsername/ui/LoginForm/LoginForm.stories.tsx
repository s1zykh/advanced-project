
import React from 'react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import 'app/styles/index.scss';

import type { Meta, StoryObj } from '@storybook/react';
import  LoginForm from './LoginForm';
import { StoreProvider } from 'app/providers/StoreProvider';
import { defaulAsyncReducers } from 'shared/const/defaultAsyncReducers';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,

};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
decorators: [StoreDecorator({ loginForm: { username: '123', password: '123' }})]
};

export const withError: Story = {
    decorators: [(Story, {parameters}) => {
        return (
            <StoreProvider initialState={{ loginForm: { username: '123', password: '123', error: "ERROR"} }}>
                <Story />
            </StoreProvider>
        )
    }]
};

export const Loading: Story = {
    decorators: [(Story, {parameters}) => {
        return (
            <StoreProvider initialState={{ loginForm: {isLoading: true}}}>
                <Story />
            </StoreProvider>
        )
    }]
};