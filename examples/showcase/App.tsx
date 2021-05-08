import React from "react";
import { ThemeProvider, useTheme } from "./src/rapi";
import Navigator from "./src/navigation";
import { enableScreens } from "react-native-screens";
export default function App() {
  enableScreens();
  const { setTheme } = useTheme();

  return (
    <ThemeProvider theme="light" setTheme={setTheme}>
      <Navigator />
    </ThemeProvider>
  );
}
