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
import { FaGithub, FaInfoCircle } from 'react-icons/fa';
import { months } from '../Months';
import { Project } from './_data';

interface Props {
	project: Project;
	rootProps?: StackProps;
}

// Chakra ui sample code snippet
export const ProjectCard = (props: Props) => {
	const { project, rootProps } = props;
	const { name, imageUrl } = project;

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
				<Box>
					<Button>
						<FaInfoCircle />
						Learn more
					</Button>
					<Button>
						<FaGithub />
						View Code
					</Button>
				</Box>
			</Stack>
		</Stack>
	);
};
