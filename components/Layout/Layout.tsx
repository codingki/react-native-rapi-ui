import React from 'react';
import { component } from '../../constants/colors';
import {
	SafeAreaView,
	SafeAreaViewProps,
} from 'react-native-safe-area-context';

interface Props extends SafeAreaViewProps {
	backgroundColor?: string;
}

const Layout: React.FC<Props> = (props: Props) => {
	return (
		<SafeAreaView
			{...props}
			style={[
				props.style,
				{
					flex: 1,
					backgroundColor:
						props.backgroundColor || component.layout.backgroundColor,
				},
			]}
		>
			{props.children}
		</SafeAreaView>
	);
};

export default Layout;
