import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonTest } from './ButtonTest';

// Default metadata of the story https://storybook.js.org/docs/react/api/csf#default-export
const meta: Meta<typeof ButtonTest> = {
    title: 'Components/ButtonTest',
    component: ButtonTest,
    argTypes: {
        textColor: { control: 'color' },
        onClick: { action: 'clicked' },
    },
};

export default meta;

// The story type for the component https://storybook.js.org/docs/react/api/csf#named-story-exports
type Story = StoryObj<typeof ButtonTest>;

export const Primary: Story = {
    args: {
        label: 'Primary 😃',
        size: 'large',
        type: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        ...Primary.args,
        type: 'secondary',
        label: 'Secondary 😇',
    },
};
