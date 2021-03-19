import React from 'react';
import { View, ViewProps, Image } from 'react-native';
import { theme } from '../../constants/colors';

interface Props extends ViewProps {
	children?: React.ReactNode;
	backgroundColor?: string;

	borderRadius?: number;
}

const Section: React.FC<Props> = ({
	backgroundColor = theme.white,
	borderRadius = 10,
	children,
	style,
	...rest
}) => {
	return (
		<View
			{...rest}
			style={[
				style,
				{
					flexDirection: 'column',
					backgroundColor: backgroundColor,
					borderRadius: borderRadius,
					overflow: 'hidden',
				},
			]}
		>
			{children}
		</View>
	);
};

export default Section;
