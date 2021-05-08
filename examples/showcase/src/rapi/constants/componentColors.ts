import themeColor from "./theme.json";

export default {
  light: {
    statusBar: {
      color: "#fcfcfc",
    },
    section: {
      backgroundColor: themeColor.white,
    },
    text: {
      color: themeColor.black,
    },
    layout: {
      backgroundColor: themeColor.white100,
    },
    topNav: {
      backgroundColor: themeColor.white,
      borderColor: "#c0c0c0",
    },
    button: {
      disabledColor: "#d8d8d8",
      disabledTextColor: themeColor.gray100,
      inverseColor: themeColor.white,
    },
    textInput: {
      backgroundColor: themeColor.white,
      borderColor: "#d8d8d8",
      color: themeColor.black,
      onFocusborderColor: "#c0c0c0",
      placeholderTextColor: themeColor.gray300,
    },
    checkBox: {
      checkedColor: themeColor.primary,
      uncheckedColor: "#d8d8d8",
      disabledColor: "#d8d8d8",
    },
    picker: {
      backgroundColor: themeColor.white,
      borderColor: "#d8d8d8",
      iconColor: themeColor.gray300,
      placeholderColor: themeColor.gray300,
      labelColor: themeColor.black,
      closeIconColor: themeColor.danger,
      selectionBackgroundColor: themeColor.white,
    },
  },
  dark: {
    statusBar: {
      color: "#21232e",
    },
    section: {
      backgroundColor: "#262834",
    },
    text: {
      color: themeColor.white,
    },
    layout: {
      backgroundColor: "#191921",
    },
    topNav: {
      backgroundColor: "#262834",
      borderColor: "#383b4d",
    },
    button: {
      disabledColor: "#42465a",
      disabledTextColor: "#191921",
      inverseColor: "#262834",
    },
    textInput: {
      backgroundColor: "#262834",
      color: themeColor.white,
      borderColor: "#60647e",
      onFocusborderColor: "#c0c0c0",
      placeholderTextColor: "#7f84a0",
    },
    checkBox: {
      checkedColor: themeColor.primary,
      uncheckedColor: "#d8d8d8",
      disabledColor: "#d8d8d8",
    },
    picker: {
      backgroundColor: "#262834",
      borderColor: "#60647e",
      iconColor: themeColor.gray300,
      placeholderColor: "#7f84a0",
      labelColor: themeColor.white,
      closeIconColor: themeColor.danger,
      selectionBackgroundColor: "#262834",
    },
  },
};
