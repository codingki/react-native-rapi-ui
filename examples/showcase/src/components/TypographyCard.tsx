import React from "react";
import { View } from "react-native";
import { Section, SectionContent, Text } from "react-native-rapi-ui";
import { fontSize } from "react-native-rapi-ui/constants/typography";
interface Props {
  size?: keyof typeof fontSize;
}

const TypographyCard: React.FC<Props> = (props: Props) => {
  return (
    <View>
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 20,
          marginBottom: 10,
          flexDirection: "row",
        }}
      >
        <Text fontWeight="medium">Size </Text>
        <Text fontWeight="bold">{props.size}</Text>
      </View>

      <Section style={{ marginHorizontal: 20 }}>
        <SectionContent>
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <Text>Normal</Text>
          </View>
          <View>
            <Text fontWeight="bold" size={props.size}>
              Ubuntu Bold
            </Text>
            <Text fontWeight="medium" size={props.size}>
              Ubuntu Medium
            </Text>
            <Text fontWeight="regular" size={props.size}>
              Ubuntu Regular
            </Text>
            <Text fontWeight="light" size={props.size}>
              Ubuntu Light
            </Text>
          </View>

          <View
            style={{ flexDirection: "row", marginBottom: 10, marginTop: 20 }}
          >
            <Text>Italic</Text>
          </View>
          <View>
            <Text fontWeight="bold" size={props.size} italic>
              Ubuntu Bold
            </Text>
            <Text fontWeight="medium" size={props.size} italic>
              Ubuntu Medium
            </Text>
            <Text fontWeight="regular" size={props.size} italic>
              Ubuntu Regular
            </Text>
            <Text fontWeight="light" size={props.size} italic>
              Ubuntu Light
            </Text>
          </View>
        </SectionContent>
      </Section>
    </View>
  );
};
export default TypographyCard;
