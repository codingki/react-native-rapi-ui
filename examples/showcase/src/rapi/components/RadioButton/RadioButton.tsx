import React from 'react';
import { ColorValue, TouchableOpacity, View, ViewStyle } from 'react-native';
import { component, theme } from '../../constants/colors';

interface Props {
	value: boolean;
	onValueChange?: (newValue: boolean) => void;
	checkedColor?: ColorValue;
	uncheckedColor?: ColorValue;
	inverseColor?: ColorValue;
	disabled?: boolean;
	style?: ViewStyle;
	size?: number;
}

const RadioButton: React.FC<Props> = ({
	value = false,
	onValueChange,
	checkedColor = component.checkBox.checkedColor,
	uncheckedColor = component.checkBox.uncheckedColor,
	inverseColor = theme.white,
	disabled = false,
	size = 24,
	style,
}) => {
	const handleChange = () => {
		if (onValueChange) {
			onValueChange(!value);
		}
	};

	return (
		<TouchableOpacity
			onPress={handleChange}
			style={{
				...style,
				width: size,
				height: size,
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: size / 2,
				borderColor: value ? checkedColor : uncheckedColor,
				backgroundColor: disabled
					? component.checkBox.disabledColor
					: value
					? checkedColor
					: 'transparent',
				borderWidth: 1,
			}}
			disabled={disabled}
		>
			{value && (
				<View
					style={{
						width: size - 4,
						height: size - 4,
						borderRadius: (size - 4) / 2,
						borderWidth: 4,
						borderColor: disabled
							? inverseColor
							: value
							? inverseColor
							: uncheckedColor,
						backgroundColor: disabled
							? component.checkBox.disabledColor
							: value
							? checkedColor
							: 'transparent',
					}}
				/>
			)}
		</TouchableOpacity>
	);
};

export default RadioButton;
