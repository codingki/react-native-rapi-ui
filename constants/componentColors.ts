import theme from './theme.json';

export default {
	layout: {
		backgroundColor: theme.white100,
	},
	topNav: {
		backgroundColor: theme.white,
		borderColor: '#c0c0c0',
	},
	button: {
		disabledColor: '#d8d8d8',
		disabledTextColor: theme.gray100,
	},
	textInput: {
		backgroundColor: theme.white,
		borderColor: '#d8d8d8',
		onFocusborderColor: '#c0c0c0',
	},
	checkBox: {
		checkedColor: theme.primary,
		uncheckedColor: '#d8d8d8',
		disabledColor: '#d8d8d8',
	},
	picker: {
		backgroundColor: theme.white,
		borderColor: '#d8d8d8',
		iconColor: theme.gray300,
		placeholderColor: theme.gray300,
		labelColor: theme.black,
		closeIconColor: theme.danger,
		selectionBackgroundColor: theme.white,
	},
};
