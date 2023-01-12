import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints, mode } from '@chakra-ui/theme-tools';

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
	sm: '40em',
	md: '52em',
	lg: '64em',
	xl: '80em',
});

const styles = {
	global: props => ({
		body: {
			bg: mode('#f0e7db', '#1A202C')(props),
		},
	}),
};

const colors = {
	black: '#16161D',
	systemGreen: '#8d9b6a',
	systemBrown: '#8f5b34',
	systemFoggyBlue: '#8a9ea7',
	systemLightBlue: '#4299E1',
	systemLightBrown: '#c4a484',
};

// 2. Add your color mode config
const config = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

const theme = extendTheme({
	colors,
	fonts,
	breakpoints,
	styles,
	config,
});

export default theme;
