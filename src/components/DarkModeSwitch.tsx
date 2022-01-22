import { useColorMode, Switch } from '@chakra-ui/react';

export const DarkModeSwitch: React.FC<{}> = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === 'dark';

	return (
		<Switch
			size="md"
			color="teal"
			isChecked={isDark}
			zIndex="0"
			onChange={toggleColorMode}
		/>
	);
};
