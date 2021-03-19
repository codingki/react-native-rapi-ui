import React from 'react';
import {
	ColorValue,
	TextInput,
	TextInputProps,
	View,
	ViewStyle,
} from 'react-native';
import { component } from '../../constants/colors';

interface Props extends TextInputProps {
	containerStyle?: ViewStyle;
	leftContent?: React.ReactNode;
	rightContent?: React.ReactNode;
	backgroundColor?: ColorValue;
	borderColor?: ColorValue;
	borderWidth?: number;
	borderRadius?: number;
}

const StyledTextInput: React.FC<Props> = (props: Props) => {
	const {
		containerStyle,
		leftContent,
		rightContent,
		backgroundColor = containerStyle?.backgroundColor ||
			component.textInput.backgroundColor,
		borderColor = component.textInput.borderColor,
		borderWidth = containerStyle?.borderWidth || 1,
		borderRadius = containerStyle?.borderRadius || 8,

		...otherProps
	} = props;

	return (
		<View
			style={{
				...containerStyle,
				backgroundColor: backgroundColor,
				borderColor: borderColor,
				borderWidth: borderWidth,
				borderRadius: borderRadius,
				flexDirection: containerStyle?.flexDirection || 'row',
				paddingHorizontal: containerStyle?.paddingHorizontal || 20,
				alignItems: 'center',
				justifyContent: 'space-between',
			}}
		>
			{leftContent}
			<TextInput
				{...otherProps}
				style={{
					flex: 1,
					paddingVertical: containerStyle?.padding || 10,
					fontFamily: 'Ubuntu_400Regular',
					marginLeft: leftContent ? 5 : 0,
					marginRight: rightContent ? 5 : 0,
				}}
			/>
			{rightContent}
		</View>
	);
};
export default StyledTextInput;
