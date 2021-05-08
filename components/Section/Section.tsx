import React from "react";
import { View, ViewProps, Image } from "react-native";
import { component, themeColor } from "../../constants/colors";
import { useTheme } from "../../provider/ThemeProvider";

interface Props extends ViewProps {
  children?: React.ReactNode;
  backgroundColor?: string;

  borderRadius?: number;
}

const Section: React.FC<Props> = ({
  backgroundColor,
  borderRadius = 10,
  children,
  style,
  ...otherProps
}) => {
  const { theme } = useTheme();
  return (
    <View
      {...otherProps}
      style={[
        style,
        {
          flexDirection: "column",
          backgroundColor: backgroundColor
            ? backgroundColor
            : component[theme].section.backgroundColor,
          borderRadius: borderRadius,
          overflow: "hidden",
        },
      ]}
    >
      {children}
    </View>
  );
};

export default Section;
