import React from 'react';
import {
	Pressable,
	TextStyle,
	View,
	ViewProps,
	TouchableOpacity,
} from 'react-native';
import colors from '../../constants/componentColors';
import { Text } from '../Text';

interface Props extends ViewProps {
	height?: number;
	backgroundColor?: string;
	borderColor?: string;
	leftAction?: VoidFunction;
	middleAction?: VoidFunction;
	rightAction?: VoidFunction;
	leftContent?: string | React.ReactNode;
	rightContent?: string | React.ReactNode;
	middleContent?: string | React.ReactNode;
	leftTextStyle?: TextStyle;
	rightTextStyle?: TextStyle;
	middleTextStyle?: TextStyle;
}

const TopNav: React.FC<Props> = (props: Props) => {
	return (
		<View
			style={{
				height: props.height || 64,
				flexDirection: 'row',
				justifyContent: 'space-between',
				backgroundColor: props.backgroundColor || colors.topNav.backgroundColor,
				alignItems: 'center',
				borderColor: props.borderColor || colors.topNav.borderColor,
				borderBottomWidth: 1,
			}}
		>
			<TouchableOpacity
				onPress={props.leftAction}
				style={{
					flex: 1,
					alignItems: 'flex-start',
				}}
			>
				<View
					style={{
						flex: 1,
						paddingHorizontal: 20,
						alignItems: 'flex-start',
						justifyContent: 'center',
					}}
				>
					{typeof props.leftContent == 'string' ? (
						<Text style={props.leftTextStyle} fontWeight="bold" size="lg">
							{props.leftContent}
						</Text>
					) : (
						props.leftContent
					)}
				</View>
			</TouchableOpacity>
			<Pressable
				onPress={props.middleAction}
				style={{
					flex: 4,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<View
					style={{
						flex: 1,
						paddingHorizontal: 20,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					{typeof props.middleContent == 'string' ? (
						<Text style={props.middleTextStyle} fontWeight="bold" size="lg">
							{props.middleContent}
						</Text>
					) : (
						props.middleContent
					)}
				</View>
			</Pressable>
			<TouchableOpacity
				onPress={props.rightAction}
				style={{
					flex: 1,
					alignItems: 'flex-end',
				}}
			>
				<View
					style={{
						flex: 1,
						paddingHorizontal: 20,
						alignItems: 'flex-end',
						justifyContent: 'center',
					}}
				>
					{typeof props.rightContent == 'string' ? (
						<Text style={props.rightTextStyle} fontWeight="bold" size="lg">
							{props.rightContent}
						</Text>
					) : (
						props.rightContent
					)}
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default TopNav;
