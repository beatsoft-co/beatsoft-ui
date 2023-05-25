import React from "react";
export interface ButtonProps {
    variant: string;
    children: React.ReactNode;
}
declare const Button: (props: ButtonProps) => React.JSX.Element;
export default Button;
