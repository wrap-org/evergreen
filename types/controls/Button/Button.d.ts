import React from 'react';
interface ButtonProps {
    children: React.ReactNode;
    submit?: boolean;
    loading?: boolean;
    href?: string;
    type?: 'primary' | 'secondary' | 'positive' | 'negative';
    icon?: boolean;
    block?: boolean | 'mobile';
    [x: string]: any;
}
declare const Button: React.ForwardRefExoticComponent<Pick<ButtonProps, keyof ButtonProps> & React.RefAttributes<unknown>>;
export default Button;
