import React from 'react';
import  useCachedResources from '../hooks/useCachedResources';

type ContextProps = {
	theme: 'light' | 'dark';
	setTheme: (val: 'light' | 'dark') => void;
};

const ThemeContext = React.createContext<ContextProps>({
	theme: 'light',
	setTheme: (theme) => console.warn('no theme provider'),
});

const useTheme = () => React.useContext(ThemeContext);

const ThemeProvider: React.FC = (props) => {
	const [theme, setTheme] = React.useState<'light' | 'dark'>('light');
	const isLoadingComplete = useCachedResources();

	return (
		<ThemeContext.Provider value={{ theme: theme, setTheme }}>
			{!isLoadingComplete ? null : props.children}
		</ThemeContext.Provider>
	);
};

export { ThemeProvider, ThemeContext, useTheme, ContextProps };
