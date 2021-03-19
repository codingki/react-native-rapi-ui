import React from 'react';
import { useCachedResources } from './src/rapi';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigator from './src/navigation';
import { enableScreens } from 'react-native-screens';
export default function App() {
	enableScreens();

	const isLoadingComplete = useCachedResources();

	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<SafeAreaProvider>
				<Navigator />
			</SafeAreaProvider>
		);
	}
}
