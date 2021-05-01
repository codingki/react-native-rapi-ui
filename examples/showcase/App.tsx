import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigator from './src/navigation';
import { enableScreens } from 'react-native-screens';
import { ThemeProvider } from 'react-native-rapi-ui';

export default function App() {
	enableScreens();

	return (
		<ThemeProvider>
			<SafeAreaProvider>
				<Navigator />
			</SafeAreaProvider>
		</ThemeProvider>
	);
}
