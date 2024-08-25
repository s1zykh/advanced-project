import { StoryFn } from '@storybook/react';
import React from 'react';

import { Theme } from '@/shared/const/theme';
// eslint-disable-next-line s1zykh-test-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
    <ThemeProvider initialState={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
