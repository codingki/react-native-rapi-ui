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
}: StackScreenProps<MainStackParamList, 'Avatar'>) {
	return (
		<Layout>
			<TopNav
				leftContent={
					<Ionicons name="chevron-back" size={20} color={theme.black} />
				}
				leftAction={() => navigation.goBack()}
				middleContent="Avatar"
			/>
			<ScrollView>
				<Section style={{ marginTop: 20, marginHorizontal: 20 }}>
					<SectionContent>
						<Text fontWeight="medium">Sizes</Text>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								marginTop: 10,
								justifyContent: 'space-between',
							}}
						>
							<Text>Extra large xl</Text>
							<Avatar source={require('../../assets/people.jpg')} size="xl" />
						</View>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								marginTop: 10,
								justifyContent: 'space-between',
							}}
						>
							<Text size="lg">Large lg</Text>
							<Avatar source={require('../../assets/people.jpg')} size="lg" />
						</View>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								marginTop: 10,
								justifyContent: 'space-between',
							}}
						>
							<Text>Medium md</Text>
							<Avatar source={require('../../assets/people.jpg')} size="md" />
						</View>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								marginTop: 10,
								justifyContent: 'space-between',
							}}
						>
							<Text>Small sm</Text>
							<Avatar source={require('../../assets/people.jpg')} size="sm" />
						</View>
					</SectionContent>
				</Section>
				<Section style={{ marginVertical: 20, marginHorizontal: 20 }}>
					<SectionContent>
						<Text fontWeight="medium">Shapes</Text>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								marginTop: 10,
								justifyContent: 'space-between',
							}}
						>
							<View style={{ flexDirection: 'row', alignItems: 'center' }}>
								<Avatar source={require('../../assets/people.jpg')} size="xl" />
								<Avatar source={require('../../assets/people.jpg')} size="lg" />
								<Avatar source={require('../../assets/people.jpg')} size="md" />
								<Avatar source={require('../../assets/people.jpg')} size="sm" />
							</View>
							<View style={{ alignItems: 'flex-end' }}>
								<Text>round</Text>
								<Text fontWeight="bold">default</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								marginTop: 10,
								justifyContent: 'space-between',
							}}
						>
							<View style={{ flexDirection: 'row', alignItems: 'center' }}>
								<Avatar
									shape="rounded"
									source={require('../../assets/people.jpg')}
									size="xl"
								/>
								<Avatar
									shape="rounded"
									source={require('../../assets/people.jpg')}
									size="lg"
								/>
								<Avatar
									shape="rounded"
									source={require('../../assets/people.jpg')}
									size="md"
								/>
								<Avatar
									shape="rounded"
									source={require('../../assets/people.jpg')}
									size="sm"
								/>
							</View>
							<Text>rounded </Text>
						</View>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								marginTop: 10,
								justifyContent: 'space-between',
							}}
						>
							<View style={{ flexDirection: 'row', alignItems: 'center' }}>
								<Avatar
									shape="square"
									source={require('../../assets/people.jpg')}
									size="xl"
								/>
								<Avatar
									shape="square"
									source={require('../../assets/people.jpg')}
									size="lg"
								/>
								<Avatar
									shape="square"
									source={require('../../assets/people.jpg')}
									size="md"
								/>
								<Avatar
									shape="square"
									source={require('../../assets/people.jpg')}
									size="sm"
								/>
							</View>
							<Text>square </Text>
						</View>
					</SectionContent>
				</Section>
			</ScrollView>
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
