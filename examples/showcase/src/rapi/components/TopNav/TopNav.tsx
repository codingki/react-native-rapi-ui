import React from "react";
import {
  Pressable,
  TextStyle,
  View,
  ViewProps,
  TouchableOpacity,
} from "react-native";
import { component } from "../../constants/colors";
import { useTheme } from "../../provider/ThemeProvider";
import { Text } from "../Text";

interface Props extends ViewProps {
  height?: number;
  backgroundColor?: string;
  borderColor?: string;
  leftAction?: VoidFunction;
  middleAction?: VoidFunction;
  rightAction?: VoidFunction;
  leftContent?: string | React.ReactNode;
  rightContent?: string | React.ReactNode;
  middleContent?: string | React.ReactNode;
  leftTextStyle?: TextStyle;
  rightTextStyle?: TextStyle;
  middleTextStyle?: TextStyle;
}

const TopNav: React.FC<Props> = ({
  height = 64,
  backgroundColor,
  borderColor,
  leftAction,
  middleAction,
  rightAction,
  leftContent,
  middleContent,
  rightContent,
  leftTextStyle,
  rightTextStyle,
  middleTextStyle,
  ...rest
}) => {
  const { theme } = useTheme();
  return (
    <View
      {...rest}
      style={{
        height: height,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: backgroundColor
          ? backgroundColor
          : component[theme].topNav.backgroundColor,
        alignItems: "center",
        borderColor: backgroundColor
          ? borderColor
          : component[theme].topNav.borderColor,
        borderBottomWidth: 1,
      }}
    >
      <TouchableOpacity
        onPress={leftAction}
        style={{
          flex: 1,
          alignItems: "flex-start",
        }}
      >
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          {typeof leftContent == "string" ? (
            <Text style={leftTextStyle} fontWeight="bold" size="lg">
              {leftContent}
            </Text>
          ) : (
            leftContent
          )}
        </View>
      </TouchableOpacity>
      <Pressable
        onPress={middleAction}
        style={{
          flex: 4,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {typeof middleContent == "string" ? (
            <Text style={middleTextStyle} fontWeight="bold" size="lg">
              {middleContent}
            </Text>
          ) : (
            middleContent
          )}
        </View>
      </Pressable>
      <TouchableOpacity
        onPress={rightAction}
        style={{
          flex: 1,
          alignItems: "flex-end",
        }}
      >
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          {typeof rightContent == "string" ? (
            <Text style={rightTextStyle} fontWeight="bold" size="lg">
              {rightContent}
            </Text>
          ) : (
            rightContent
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TopNav;
