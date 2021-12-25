import { Box, Center, Container, Flex, Spacer, Text } from '@chakra-ui/react';

export const Footer: React.FC<{}> = () => {
	return (
		<Center py="2rem" opacity={0.4} fontSize="sm">
			<Text>
				&copy; {new Date().getFullYear()} Hung Nguyen. All Rights Reserved.
			</Text>
		</Center>
	);
};
