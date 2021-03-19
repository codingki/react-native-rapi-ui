import React from 'react';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
import {
	Avatar,
	Layout,
	Section,
	SectionContent,
	SectionImage,
	Text,
	theme,
	TopNav,
} from '../rapi';
import { StackScreenProps } from '@react-navigation/stack';
import { MainStackParamList } from '../types/navigation';
import { Ionicons } from '@expo/vector-icons';

export default function ({
	navigation,
}: StackScreenProps<MainStackParamList, 'Section'>) {
	return (
		<Layout>
			<TopNav
				leftContent={
					<Ionicons name="chevron-back" size={20} color={theme.black} />
				}
				leftAction={() => navigation.goBack()}
				middleContent="Section"
			/>
			<View>
				<Section style={{ marginTop: 20, marginHorizontal: 20 }}>
					<SectionContent>
						<Text>This is a Section</Text>
					</SectionContent>
				</Section>
				<Section style={{ marginTop: 20, marginHorizontal: 20 }}>
					<SectionImage source={require('../../assets/blue.jpg')} />
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
		backgroundColor: 'white',
		borderRadius: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});
