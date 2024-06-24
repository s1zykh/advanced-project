import { Theme } from 'app/providers/ThemeProvider';
import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,

};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita rem veniam quisquam itaque animi? Eos accusantium ducimus architecto molestias doloribus ratione! Commodi minima distinctio rerum! Mollitia explicabo consequuntur reiciendis cumque.',
    },
};
