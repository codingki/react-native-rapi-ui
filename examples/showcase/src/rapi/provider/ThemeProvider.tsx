import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { component, themeColor } from "../constants/colors";
import useCachedResources from "../hooks/useCachedResources";

type ContextProps = {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  isDarkmode?: boolean;
  images?: Array<any> | null;
  fonts?: any;
};

const ThemeContext = React.createContext<ContextProps>({
  theme: "light",
  setTheme: (theme) => console.warn("no theme provider"),
});

const useTheme = () => React.useContext(ThemeContext);

const ThemeProvider: React.FC<ContextProps> = (props) => {
  const [theme, setTheme] = React.useState<"light" | "dark">(
    props.theme || "light"
  );
  const isLoadingComplete = useCachedResources(props.images, props.fonts);
  const isDarkmode = theme === "dark";

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDarkmode }}>
      <StatusBar
        backgroundColor={component[theme].statusBar.color}
        barStyle={isDarkmode ? "light-content" : "dark-content"}
      />
      <SafeAreaProvider
        style={{
          backgroundColor: isDarkmode ? "#191921" : themeColor.white100,
        }}
      >
        {!isLoadingComplete ? null : props.children}
      </SafeAreaProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext, useTheme, ContextProps };
