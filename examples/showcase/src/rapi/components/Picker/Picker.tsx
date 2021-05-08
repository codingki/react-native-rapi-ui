import React from "react";
import {
  ColorValue,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  View,
  ViewStyle,
  ScrollView,
  Dimensions,
} from "react-native";
import Text from "../Text/Text";
import { component, themeColor } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { fontSize } from "../../constants/typography";
import { useTheme } from "../../provider/ThemeProvider";

const { width, height } = Dimensions.get("screen");

interface Props {
  items: items[];
  placeholder: string;
  value?: string | null;
  onValueChange?: (val: string) => void;
  borderColor?: ColorValue;
  borderWidth?: number;
  borderRadius?: number;
  backgroundColor?: ColorValue;
  selectionBackgroundColor?: ColorValue;
  selectionBorderRadius?: number;
  iconColor?: ColorValue;
  labelColor?: ColorValue;
  closeIconColor?: ColorValue;
  labelSize?: keyof typeof fontSize;
  placeholderSize?: keyof typeof fontSize;
  placeholderColor?: ColorValue;
  disabled?: boolean;
}

interface items {
  label: string;
  value: string;
}

const Picker: React.FC<Props> = ({
  items,
  placeholder,
  value,
  onValueChange,
  borderColor,
  borderWidth = 1,
  borderRadius = 8,
  backgroundColor,
  selectionBackgroundColor,
  selectionBorderRadius = 8,
  iconColor,
  labelColor,
  closeIconColor,
  labelSize = "lg",
  placeholderSize = "md",
  placeholderColor,
  disabled = false,
}) => {
  const { theme } = useTheme();

  const selectedBorderColor = borderColor
    ? borderColor
    : component[theme].picker.borderColor;
  const selectedBackgroundColor = backgroundColor
    ? backgroundColor
    : component[theme].picker.backgroundColor;
  const selectedSelectionBackgroundColor = selectionBackgroundColor
    ? selectionBackgroundColor
    : component[theme].picker.selectionBackgroundColor;
  const selectedIconColor = iconColor
    ? iconColor
    : component[theme].picker.iconColor;
  const selectedLabelColor = labelColor
    ? labelColor
    : component[theme].picker.labelColor;
  const selectedCloseIconColor = closeIconColor
    ? closeIconColor
    : component[theme].picker.closeIconColor;
  const selectedPlaceholderColor = placeholderColor
    ? placeholderColor
    : component[theme].picker.placeholderColor;

  const [toggleModal, setToggleModal] = React.useState(false);

  const selected = items.find((o) => o.value === value);

  const [selectedValue, setSelectedValue] = React.useState<
    items | undefined | null
  >(value ? selected : null);

  const renderPickerItems = () => {
    return items.map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          onPress={() => {
            onValueChange && onValueChange(item.value);
            setSelectedValue(item);
            setToggleModal(!toggleModal);
          }}
          style={{
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}
        >
          <Text
            style={{ color: selectedLabelColor }}
            size={labelSize}
            fontWeight={selectedValue?.value == item.value ? "bold" : "regular"}
          >
            {item.label}
          </Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={toggleModal}
        onRequestClose={() => {
          setToggleModal(!toggleModal);
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.2)",
          }}
        >
          <View
            style={{
              backgroundColor: component[theme].picker.backgroundColor,
              borderRadius: 8,
              width: width - 40,
              maxHeight: height - 300,
            }}
          >
            <View
              style={{
                padding: 20,
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: selectedSelectionBackgroundColor,
                borderRadius: selectionBorderRadius,
              }}
            >
              <View style={{ flex: 1 }}>
                <Text style={{ color: selectedLabelColor }} fontWeight="bold">
                  {placeholder}
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => {
                  setToggleModal(!toggleModal);
                }}
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 4,
                  backgroundColor: selectedCloseIconColor,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="ios-close" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              {renderPickerItems()}
            </ScrollView>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => {
          setToggleModal(!toggleModal);
        }}
        style={{
          backgroundColor: selectedBackgroundColor,
          borderColor: selectedBorderColor,
          borderWidth: borderWidth,
          borderRadius: borderRadius,
          flexDirection: "row",
          padding: 14,
          paddingHorizontal: 20,
          alignItems: "center",
          justifyContent: "space-between",
        }}
        disabled={disabled}
      >
        <Text
          style={{
            color: selectedValue
              ? selectedLabelColor
              : selectedPlaceholderColor,
            marginRight: 5,
          }}
          size={placeholderSize}
        >
          {selectedValue?.label || placeholder}
        </Text>
        <Ionicons name="caret-down" size={18} color={selectedIconColor} />
      </TouchableOpacity>
    </>
  );
};

export default Picker;
