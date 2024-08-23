
import React from 'react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import '@/app/styles/index.scss';

import type { Meta, StoryObj } from '@storybook/react';
import  LoginForm from './LoginForm';

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
    decorators: [StoreDecorator({ loginForm: { username: '123', password: '123', error: "ERROR" }})]
};

export const Loading: Story = {
    decorators: [StoreDecorator({ loginForm: {isLoading: true}})]
};