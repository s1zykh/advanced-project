import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { StoreProvider } from '../../src/app/providers/StoreProvider';
import { Theme, ThemeProvider } from '../../src/app/providers/ThemeProvider';
import type { Preview } from '@storybook/react';

const preview: Preview = {
    parameters: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    decorators: [ (Story) => (
        <ThemeProvider>
            <div className={`app ${Theme.LIGHT}`}>
                <Story />
            </div>
        </ThemeProvider>

    ), (Story) => (
        <BrowserRouter>
            <Story />
        </BrowserRouter>
    ), (Story) => (
        <StoreProvider initialState={{ loginForm: { username: '123', password: '123' } }}>
            <Story />
        </StoreProvider>

    ) ],
};

export default preview;
