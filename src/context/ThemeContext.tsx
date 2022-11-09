import React, { FC, useContext } from "react";

export type NixpoThemeType = "light" | "dark";

export interface ThemeContext {
  theme: NixpoThemeType;
}

const NixpoContext = React.createContext<ThemeContext>({
  theme: "light",
});

export const useNixpoTheme = () => {
  return useContext(NixpoContext);
};
interface NixpoProviderProps {
  theme?: NixpoThemeType;
  children?: React.ReactNode;
}

export const NixpoProvider: FC<NixpoProviderProps> = ({
  children,
  theme = "light",
}) => {
  return (
    <NixpoContext.Provider value={{ theme }}>{children}</NixpoContext.Provider>
  );
};
