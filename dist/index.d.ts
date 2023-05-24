import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

interface ButtonProps {
    variant: string;
    children: React.ReactNode;
}
declare const Button: (props: ButtonProps) => react_jsx_runtime.JSX.Element;

declare const ThemeProvider: (props: {
    children: React.ReactNode;
}) => react_jsx_runtime.JSX.Element;
declare const useTheme: () => any;

export { Button, ButtonProps, ThemeProvider, useTheme };
