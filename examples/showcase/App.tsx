import React from "react";
import { ThemeProvider } from "react-native-rapi-ui";
import Navigator from "./src/navigation";
import { enableScreens } from "react-native-screens";
export default function App() {
  enableScreens();

  return (
    <ThemeProvider>
      <Navigator />
    </ThemeProvider>
  );
}
