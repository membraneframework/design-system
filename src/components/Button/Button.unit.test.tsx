import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Button } from './Button';
import React from 'react';

test('loads and displays label', async () => {
    // ARRANGE
    render(<Button>Label test </Button>);

    // ACT
    await userEvent.click(screen.getByText('Label test'));
});
