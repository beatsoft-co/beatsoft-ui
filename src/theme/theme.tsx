import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext<any>(undefined);

export const ThemeProvider = (props: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { theme } = useContext(ThemeContext);

  return theme;
};

const defaultTheme: ThemeType = {
  button: {
    variants: {
      default: {
        className:
          "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
      },
    },
  },
};
