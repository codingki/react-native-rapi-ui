import React from "react";
import { ScrollView, View } from "react-native";
import {
  Layout,
  TopNav,
  Text,
  TextInput,
  Picker,
  CheckBox,
  RadioButton,
  themeColor,
  SectionContent,
  Section,
  useTheme,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import { MainStackParamList } from "../types/navigation";

export default function ({
  navigation,
}: StackScreenProps<MainStackParamList, "Forms">) {
  const { isDarkmode, setTheme } = useTheme();
  const [text, setText] = React.useState<string>("");
  const [pass, setPass] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [value, setValue] = React.useState<string | null>(null);
  const [toggle, setToggle] = React.useState<boolean>(false);
  const [RadioToggle, setRadioToggle] = React.useState<boolean>(false);

  const items = [
    { label: "Front-end Developer", value: "FED" },
    { label: "Back-end Developer", value: "BED" },
    { label: "Full-stack Developer", value: "FSD" },
  ];

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
        middleContent="Forms"
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
      <ScrollView>
        <Section style={{ marginHorizontal: 20, marginTop: 20 }}>
          <SectionContent>
            <View style={{ marginBottom: 20 }}>
              <Text style={{ marginBottom: 10 }}>TextInput</Text>

              <TextInput
                placeholder="Enter your text"
                value={text}
                onChangeText={(val) => setText(val)}
              />
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text style={{ marginBottom: 10 }}>
                TextInput with leftContent
              </Text>

              <TextInput
                placeholder="Enter your password"
                value={pass}
                onChangeText={(val) => setPass(val)}
                leftContent={
                  <Ionicons
                    name="lock-closed"
                    size={20}
                    color={themeColor.gray300}
                  />
                }
              />
            </View>
            <View>
              <Text style={{ marginBottom: 10 }}>
                TextInput with rightContent
              </Text>

              <TextInput
                placeholder="Enter your email"
                value={email}
                onChangeText={(val) => setEmail(val)}
                rightContent={
                  <Ionicons name="mail" size={20} color={themeColor.gray300} />
                }
              />
            </View>
          </SectionContent>
        </Section>
        <Section style={{ marginHorizontal: 20, marginTop: 20 }}>
          <SectionContent>
            <View>
              <Text style={{ marginBottom: 10 }}>Picker</Text>
              <Picker
                items={items}
                value={value}
                placeholder="Choose your role"
                onValueChange={(val) => setValue(val)}
              />
            </View>
          </SectionContent>
        </Section>
        <Section style={{ marginHorizontal: 20, marginTop: 20 }}>
          <SectionContent>
            <View>
              <Text style={{ marginBottom: 10 }}>CheckBox</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <CheckBox
                  value={toggle}
                  onValueChange={(val) => setToggle(val)}
                />
                <Text size="md" style={{ marginLeft: 10, color: "gray" }}>
                  I agree with the Terms & Conditions
                </Text>
              </View>
            </View>
          </SectionContent>
        </Section>
        <Section
          style={{ marginHorizontal: 20, marginTop: 20, marginBottom: 20 }}
        >
          <SectionContent>
            <View>
              <Text style={{ marginBottom: 10 }}>RadioButton</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                  value={RadioToggle}
                  onValueChange={(val) => setRadioToggle(val)}
                />
                <Text size="md" style={{ marginLeft: 10, color: "gray" }}>
                  I agree with the Terms & Conditions
                </Text>
              </View>
            </View>
          </SectionContent>
        </Section>
      </ScrollView>
    </Layout>
  );
}
