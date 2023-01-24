import {
	AspectRatio,
	Box,
	Button,
	HStack,
	Icon,
	Img,
	Link,
	Skeleton,
	Stack,
	StackProps,
	Text,
	useBreakpointValue,
	useColorModeValue,
} from '@chakra-ui/react';
import * as React from 'react';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import { Project } from './_data';

interface Props {
	project: Project;
	rootProps?: StackProps;
}

import styled from '@emotion/styled';

const TruncatedText = styled(Text)`
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
`;

// Chakra ui sample code snippet
export const ProjectCard = (props: Props) => {
	const { project, rootProps } = props;
	const { name, imageUrl, description, sourceCode, demo } = project;

	return (
		<Box
			borderWidth="1px"
			borderColor={useColorModeValue('systemGreen', 'systemLightBlue')}
			borderRadius={useBreakpointValue({ base: 'md', md: 'xl' })}
		>
			<Stack
				boxShadow="2xl"
				spacing={useBreakpointValue({ base: '4', md: '5' })}
				borderRadius={useBreakpointValue({ base: 'md', md: 'xl' })}
				p={2}
				h={'100%'}
				{...rootProps}
			>
				<Box position="relative">
					<AspectRatio ratio={4 / 3}>
						<Img
							src={imageUrl}
							alt={name}
							draggable="false"
							fallback={<Skeleton />}
							borderRadius={useBreakpointValue({ base: 'md', md: 'xl' })}
						/>
					</AspectRatio>
				</Box>

				<Stack spacing="1" align="center">
					<HStack align="center">
						<Text
							fontWeight="bold"
							color={useColorModeValue('gray.700', 'gray.400')}
						>
							{name}
						</Text>

						{demo ? (
							<Link href={demo}>
								<Box as="button">
									<Icon as={FaExternalLinkAlt} />
								</Box>
							</Link>
						) : null}

						{sourceCode ? (
							<Link href={sourceCode}>
								<Box as="button">
									<Icon as={FaGithub} />
								</Box>
							</Link>
						) : null}
					</HStack>
					<TruncatedText
						align="center"
						fontWeight="normal"
						color={useColorModeValue('gray.700', 'gray.400')}
					>
						{description}
					</TruncatedText>
				</Stack>
			</Stack>
		</Box>
	);
};
