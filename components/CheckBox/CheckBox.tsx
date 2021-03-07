import React from 'react';
import {
	ColorValue,
	TextInput,
	TextInputProps,
	TouchableOpacity,
	View,
	ViewStyle,
} from 'react-native';
import { component, theme } from '../../constants/colors';
import { Ionicons } from '@expo/vector-icons';

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

const Checkbox: React.FC<Props> = ({
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
				borderRadius: style?.borderRadius || 4,
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
			<Ionicons
				name="md-checkmark"
				size={size - 2}
				color={disabled ? inverseColor : value ? inverseColor : uncheckedColor}
			/>
		</TouchableOpacity>
	);
};

export default Checkbox;
