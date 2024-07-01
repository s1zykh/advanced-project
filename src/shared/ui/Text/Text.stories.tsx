
import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Theme } from 'app/providers/ThemeProvider';


const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,

};

export default meta;
type Story = StoryObj<typeof Text>;


export const Primary: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
    }
};


export const Error: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        theme: TextTheme.ERROR,
    }
};

export const onlyTitle: Story = {
    args: {
        title: 'Title lorem ipsun',
    }
    
};

export const onlyText: Story = {
    args: {
        text: 'Description Description Description Description',
    }
    
};

export const PrimaryDark: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
    }
};
