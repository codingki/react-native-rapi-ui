import React from "react";
import { View, ViewProps } from "react-native";

interface Props extends ViewProps {
  children?: React.ReactNode;
  padding?: number;
}

const SectionContent: React.FC<Props> = ({
  children,
  style,
  padding = 20,
  ...rest
}) => {
  return (
    <View
      {...rest}
      style={[
        style,
        {
          padding: padding,
        },
      ]}
    >
      {children}
    </View>
  );
};

export default SectionContent;
