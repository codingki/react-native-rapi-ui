import React from 'react';
import { ScrollView } from 'react-native';
import { Layout, TopNav, theme } from '../rapi';
import TypograpnyCard from '../components/TypographyCard';
import { Ionicons } from '@expo/vector-icons';
import { MainStackParamList } from '../types/navigation';
import { StackScreenProps } from '@react-navigation/stack';

export default function ({
	navigation,
}: StackScreenProps<MainStackParamList, 'Typography'>) {
	return (
		<Layout>
			<TopNav
				leftContent={
					<Ionicons name="chevron-back" size={20} color={theme.black} />
				}
				leftAction={() => navigation.goBack()}
				middleContent="Typography"
			/>
			<ScrollView>
				<TypograpnyCard size="h1" />
				<TypograpnyCard size="h2" />
				<TypograpnyCard size="h3" />
				<TypograpnyCard size="xl" />
				<TypograpnyCard size="lg" />
				<TypograpnyCard size="md" />
				<TypograpnyCard size="sm" />
			</ScrollView>
		</Layout>
	);
}
