import { createContext } from "react";

export interface IContext {
  theme: "light" | "dark";
  toggleTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<IContext>({} as IContext);
