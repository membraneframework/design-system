/* Code generated with AutoHTML Plugin for Figma */
import React from 'react';
import './style.css';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    state?: 'enabled' | 'hover' | 'pressed' | 'disabled';
    icon?: 'right' | 'no' | 'left';
}

export const Button = ({ state = 'enabled', icon = 'no', children, ...props }: IButtonProps): JSX.Element => {
    const variantsClassName = 'button--icon-' + icon + '--state-' + state;

    return (
        <button type="button" className={'button ' + variantsClassName} {...props}>
            <span className="button__button-text">{children}</span>
        </button>
    );
};
