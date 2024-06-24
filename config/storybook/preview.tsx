import React from 'react';
import { BrowserRouter } from 'react-router-dom';

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
    ) ],
};

export default preview;
