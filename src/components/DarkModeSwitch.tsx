import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode, Box, Button } from '@chakra-ui/react';

export const DarkModeSwitch: React.FC<{}> = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === 'dark';

	return (
		<Box>
			<Button
				size={'sm'}
				colorScheme={isDark ? 'orange' : 'purple'}
				onClick={toggleColorMode}
			>
				{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
			</Button>
		</Box>
	);
};
