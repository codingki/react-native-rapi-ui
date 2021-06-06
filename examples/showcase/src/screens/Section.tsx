import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Layout,
  Section,
  SectionContent,
  SectionImage,
  Text,
  themeColor,
  TopNav,
  useTheme,
} from "react-native-rapi-ui";
import { StackScreenProps } from "@react-navigation/stack";
import { MainStackParamList } from "../types/navigation";
import { Ionicons } from "@expo/vector-icons";

export default function ({
  navigation,
}: StackScreenProps<MainStackParamList, "Section">) {
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
        middleContent="Section"
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
      <View>
        <Section style={{ marginTop: 20, marginHorizontal: 20 }}>
          <SectionContent>
            <Text>This is a Section</Text>
          </SectionContent>
        </Section>
        <Section style={{ marginTop: 20, marginHorizontal: 20 }}>
          <SectionImage source={require("../../assets/blue.jpg")} />
          <SectionContent>
            <Text>This is a Section with an image</Text>
          </SectionContent>
        </Section>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  listItem: {
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
