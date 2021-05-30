import React from "react";
import { View } from "react-native";
import { Text, themeColor, useTheme } from "react-native-rapi-ui";

interface Props {
  color: keyof typeof themeColor;
  last?: boolean;
}
const ColorCard: React.FC<Props> = (props: Props) => {
  const { isDarkmode } = useTheme();
  return (
    <View
      style={{
        marginHorizontal: 5,
        marginVertical: 10,
        marginRight: props.last ? 20 : 5,
      }}
    >
      <View
        style={{
          height: 50,
          width: 110,
          backgroundColor: themeColor[props.color],
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
      />
      <View
        style={{
          backgroundColor: isDarkmode ? "#262834" : "white",
          padding: 10,
          alignItems: "center",
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
        }}
      >
        <Text size="md">{props.color}</Text>
      </View>
    </View>
  );
};
export default ColorCard;
