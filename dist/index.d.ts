import React from 'react';

type ButtonProps = {
    variant: string;
    children: React.ReactNode;
};
declare const Button: (props: ButtonProps) => React.JSX.Element;

declare const ThemeProvider: (props: {
    children: React.ReactNode;
}) => React.JSX.Element;
declare const useTheme: () => any;

export { Button, ThemeProvider, useTheme };
