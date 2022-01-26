import {
	AspectRatio,
	Box,
	Button,
	HStack,
	Icon,
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
import { Project } from './_data';

interface Props {
	project: Project;
	rootProps?: StackProps;
}

// Chakra ui sample code snippet
export const ProjectCard = (props: Props) => {
	const { project, rootProps } = props;
	const { name, imageUrl, description, sourceCode } = project;

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
			<Stack spacing="1" align="center">
				<Text
					fontWeight="medium"
					color={useColorModeValue('gray.700', 'gray.400')}
				>
					{name}
				</Text>
				<Text
					align="center"
					fontWeight="normal"
					color={useColorModeValue('gray.700', 'gray.400')}
				>
					{description}
				</Text>
			</Stack>
			{/* <Stack align="center">
				<Button
					variant="outline"
					color={useColorModeValue('systemLightBlue', 'systemGreen')}
					borderColor={useColorModeValue('systemLightBlue', 'systemGreen')}
					border="2px"
					isFullWidth={true}
				>
					<Icon as={FaInfoCircle} />
					Learn more
				</Button>

				<Link href={sourceCode}>
					<Button
						variant="outline"
						color={useColorModeValue('systemLightBlue', 'systemGreen')}
						borderColor={useColorModeValue('systemLightBlue', 'systemGreen')}
						border="2px"
						isFullWidth={true}
					>
						<Icon as={FaGithub} />
						View Code
					</Button>
				</Link>
			</Stack> */}
		</Stack>
	);
};
