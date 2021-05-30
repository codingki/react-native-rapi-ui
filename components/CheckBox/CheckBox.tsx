import React from "react";
import {
  ColorValue,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { component, themeColor } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../provider/ThemeProvider";

interface Props {
  value: boolean;
  onValueChange?: (newValue: boolean) => void;
  checkedColor?: ColorValue;
  uncheckedColor?: ColorValue;
  inverseColor?: ColorValue;
  disabled?: boolean;
  style?: ViewStyle;
  size?: number;
}

const Checkbox: React.FC<Props> = ({
  value = false,
  onValueChange,
  checkedColor,
  uncheckedColor,
  inverseColor = themeColor.white,
  disabled = false,
  size = 24,
  style,
}) => {
  const { theme } = useTheme();
  const selectedCheckedColor = checkedColor
    ? checkedColor
    : component[theme].checkBox.checkedColor;
  const selectedUncheckedColor = uncheckedColor
    ? uncheckedColor
    : component[theme].checkBox.uncheckedColor;

  const handleChange = () => {
    if (onValueChange) {
      onValueChange(!value);
    }
  };

  return (
    <TouchableOpacity
      onPress={handleChange}
      style={{
        ...style,
        width: size,
        height: size,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: style?.borderRadius || 4,
        borderColor: value ? selectedCheckedColor : selectedUncheckedColor,
        backgroundColor: disabled
          ? component[theme].checkBox.disabledColor
          : value
          ? selectedCheckedColor
          : "transparent",
        borderWidth: 1,
      }}
      disabled={disabled}
    >
      <Ionicons
        name="md-checkmark"
        size={size - 2}
        color={
          disabled
            ? inverseColor
            : value
            ? inverseColor
            : selectedUncheckedColor
        }
      />
    </TouchableOpacity>
  );
};

export default Checkbox;
