import React from "react";
import {
  ColorValue,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import { component } from "../../constants/colors";
import { useTheme } from "../../provider/ThemeProvider";

interface Props extends TextInputProps {
  containerStyle?: ViewStyle;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  backgroundColor?: ColorValue;
  borderColor?: ColorValue;
  borderWidth?: number;
  borderRadius?: number;
}

const StyledTextInput: React.FC<Props> = (props: Props) => {
  const { theme } = useTheme();
  const {
    containerStyle,
    leftContent,
    rightContent,
    backgroundColor = containerStyle?.backgroundColor ||
      component[theme].textInput.backgroundColor,
    borderColor = component[theme].textInput.borderColor,
    borderWidth = containerStyle?.borderWidth || 1,
    borderRadius = containerStyle?.borderRadius || 8,

    ...otherProps
  } = props;

  return (
    <View
      style={{
        ...containerStyle,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: borderWidth,
        borderRadius: borderRadius,
        flexDirection: containerStyle?.flexDirection || "row",
        paddingHorizontal: containerStyle?.paddingHorizontal || 20,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {leftContent}
      <TextInput
        {...otherProps}
        placeholderTextColor={component[theme].textInput.placeholderTextColor}
        style={{
          flex: 1,
          color: component[theme].textInput.color,
          paddingVertical: containerStyle?.padding || 10,
          fontFamily: "Ubuntu_400Regular",
          marginLeft: leftContent ? 5 : 0,
          marginRight: rightContent ? 5 : 0,
        }}
      />
      {rightContent}
    </View>
  );
};
export default StyledTextInput;
