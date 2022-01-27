import React, { useEffect } from 'react';
import {
	Box,
	Container,
	Heading,
	ListItem,
	Stack,
	Text,
	UnorderedList,
} from '@chakra-ui/react';
import { Layout } from '../../components/Layout';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { works } from '../../components/works/_data';

const Work = ({}) => {
	const router = useRouter();

	// Janky workaround
	var currentWork = router.query.workId
		? works[parseInt(router.query.workId as string)]
		: undefined;

	useEffect(() => {
		currentWork = router.query.workId
			? works[parseInt(router.query.workId as string)]
			: undefined;
	}, [router]);

	return (
		<Layout path={'/works'}>
			<Container mt={20}>
				<Breadcrumb
					spacing="8px"
					separator={<ChevronRightIcon color="gray.500" />}
				>
					<BreadcrumbItem>
						<BreadcrumbLink href="/works">Works</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbItem>
						<Text>{currentWork?.name}</Text>
					</BreadcrumbItem>
				</Breadcrumb>
				<Box mt={8}>
					<Box>
						<Heading as="h4" size="md">
							About:
						</Heading>
						<Text style={{ textIndent: '20px' }}>
							{currentWork?.description}
						</Text>
					</Box>

					<Box mt={8}>
						<Heading as="h4" size="md">
							Duties:
						</Heading>
						<UnorderedList ml={10}>
							{currentWork?.duties.map((duty: String, index: number) => (
								<ListItem key={index}>{duty}</ListItem>
							))}
						</UnorderedList>
					</Box>

					<Box mt={8}>
						<Heading as="h4" size="md">
							Tech stack:
						</Heading>
						<UnorderedList ml={10}>
							{currentWork?.techStack.map((tech: String, index: number) => (
								<ListItem key={index}>{tech}</ListItem>
							))}
						</UnorderedList>
					</Box>
				</Box>
			</Container>
			<Container centerContent></Container>
		</Layout>
	);
};

export default Work;
