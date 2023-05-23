import React from "react";
import { useTheme } from "../../theme/theme";

const Button = (props: ButtonProps) => {
  const { variant = "default" } = props;
  const {
    variants: { button },
  } = useTheme();
  return <button className={button[variant]}>OK</button>;
};

export default Button;
