import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { ScrollView, View } from "react-native";
import {
  Layout,
  TopNav,
  Text,
  themeColor,
  useTheme,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import ColorCard from "../components/ColorCard";
import { MainStackParamList } from "../types/navigation";

export default function ({
  navigation,
}: StackScreenProps<MainStackParamList, "Colors">) {
  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <TopNav
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white : themeColor.black}
          />
        }
        leftAction={() => navigation.goBack()}
        middleContent="Colors"
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        rightAction={() => {
          if (isDarkmode) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <Text fontWeight="medium">Primary</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ flexDirection: "row", paddingLeft: 15 }}
        >
          <ColorCard color="primary" />
          <ColorCard color="primary100" />
          <ColorCard color="primary200" />
          <ColorCard color="primary300" />
          <ColorCard color="primary400" />
          <ColorCard color="primary500" />
          <ColorCard color="primary600" />
          <ColorCard color="primary700" />
          <ColorCard color="primary800" />
          <ColorCard color="primary900" last />
        </ScrollView>

        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <Text fontWeight="medium">Success</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ flexDirection: "row", paddingLeft: 15 }}
        >
          <ColorCard color="success" />
          <ColorCard color="success100" />
          <ColorCard color="success200" />
          <ColorCard color="success300" />
          <ColorCard color="success400" />
          <ColorCard color="success500" />
          <ColorCard color="success600" />
          <ColorCard color="success700" />
          <ColorCard color="success800" />
          <ColorCard color="success900" last />
        </ScrollView>

        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <Text fontWeight="medium">Info</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ flexDirection: "row", paddingLeft: 15 }}
        >
          <ColorCard color="info" />
          <ColorCard color="info100" />
          <ColorCard color="info200" />
          <ColorCard color="info300" />
          <ColorCard color="info400" />
          <ColorCard color="info500" />
          <ColorCard color="info600" />
          <ColorCard color="info700" />
          <ColorCard color="info800" />
          <ColorCard color="info900" last />
        </ScrollView>

        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <Text fontWeight="medium">Warning</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ flexDirection: "row", paddingLeft: 15 }}
        >
          <ColorCard color="warning" />
          <ColorCard color="warning100" />
          <ColorCard color="warning200" />
          <ColorCard color="warning300" />
          <ColorCard color="warning400" />
          <ColorCard color="warning500" />
          <ColorCard color="warning600" />
          <ColorCard color="warning700" />
          <ColorCard color="warning800" />
          <ColorCard color="warning900" last />
        </ScrollView>

        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <Text fontWeight="medium">Danger</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ flexDirection: "row", paddingLeft: 15 }}
        >
          <ColorCard color="danger" />
          <ColorCard color="danger100" />
          <ColorCard color="danger200" />
          <ColorCard color="danger300" />
          <ColorCard color="danger400" />
          <ColorCard color="danger500" />
          <ColorCard color="danger600" />
          <ColorCard color="danger700" />
          <ColorCard color="danger800" />
          <ColorCard color="danger900" last />
        </ScrollView>

        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <Text fontWeight="medium">White</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ flexDirection: "row", paddingLeft: 15 }}
        >
          <ColorCard color="white" />
          <ColorCard color="white100" />
          <ColorCard color="white200" last />
        </ScrollView>

        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <Text fontWeight="medium">Gray</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ flexDirection: "row", paddingLeft: 15 }}
        >
          <ColorCard color="gray" />
          <ColorCard color="gray100" />
          <ColorCard color="gray200" />
          <ColorCard color="gray300" />
          <ColorCard color="gray400" />
          <ColorCard color="gray500" last />
        </ScrollView>

        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <Text fontWeight="medium">Black</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ flexDirection: "row", paddingLeft: 15 }}
        >
          <ColorCard color="black" />
          <ColorCard color="black100" />
          <ColorCard color="black200" />
          <ColorCard color="black300" />
          <ColorCard color="black400" />
          <ColorCard color="black500" last />
        </ScrollView>
      </ScrollView>
    </Layout>
  );
}
