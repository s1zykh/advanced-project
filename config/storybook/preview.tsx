import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Theme } from '../../src/app/providers/ThemeProvider';

import type { Preview } from '@storybook/react';

const preview: Preview = {
    parameters: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    decorators: [ (Story) => (
        <div className={`app ${Theme.LIGHT}`}>
            <Story />
        </div>
    ), (Story) => (
        <BrowserRouter>
            <Story />
        </BrowserRouter>
    ) ],
};

export default preview;
