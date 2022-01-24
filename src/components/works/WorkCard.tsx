import {
	AspectRatio,
	Box,
	Button,
	HStack,
	Image,
	Link,
	Skeleton,
	Stack,
	StackProps,
	Text,
	useBreakpointValue,
	useColorModeValue,
} from '@chakra-ui/react';
import * as React from 'react';
import { Work } from './_data';

interface Props {
	work: Work;
	rootProps?: StackProps;
}

// Chakra ui sample code snippet
export const WorkCard = (props: Props) => {
	const { work, rootProps } = props;
	const { name, imageUrl } = work;
	return (
		<Stack spacing={useBreakpointValue({ base: '4', md: '5' })} {...rootProps}>
			<Box position="relative">
				<AspectRatio ratio={4 / 3}>
					<Image
						src={imageUrl}
						alt={name}
						draggable="false"
						fallback={<Skeleton />}
						borderRadius={useBreakpointValue({ base: 'md', md: 'xl' })}
					/>
				</AspectRatio>
			</Box>
			<Stack>
				<Stack spacing="1">
					<Text
						fontWeight="medium"
						color={useColorModeValue('gray.700', 'gray.400')}
					>
						{name}
					</Text>
				</Stack>
			</Stack>
			<Stack align="center">
				<Button colorScheme="blue" isFullWidth>
					Learn more
				</Button>
				<Link
					textDecoration="underline"
					fontWeight="medium"
					color={useColorModeValue('gray.600', 'gray.400')}
				>
					Website
				</Link>
			</Stack>
		</Stack>
	);
};
