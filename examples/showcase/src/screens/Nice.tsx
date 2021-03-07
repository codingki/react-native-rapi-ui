import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-rapi-ui';
import { StackScreenProps } from '@react-navigation/stack';
import { MainStackParamList } from '../types/navigation';

export default function ({
	navigation,
}: StackScreenProps<MainStackParamList, 'Nice'>) {
	return (
		<View style={{ height: 50, width: 50, backgroundColor: 'blue' }}>
			<Text>Gokil</Text>
		</View>
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
