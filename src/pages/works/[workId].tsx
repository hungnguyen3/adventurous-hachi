import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import { Layout } from '../../components/Layout';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { works } from '../../components/works/_data';

const Work: React.FC<{}> = ({}) => {
	const router = useRouter();
	const currentWork = works[parseInt(router.query.workId[0])];

	return (
		<Layout path={'/works'}>
			<Container mt={20}>
				<Breadcrumb
					spacing="8px"
					separator={<ChevronRightIcon color="gray.500" />}
				>
					<BreadcrumbItem>
						<BreadcrumbLink href="#">Works</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbItem>
						<BreadcrumbLink href="#">{currentWork.name}</BreadcrumbLink>
					</BreadcrumbItem>
				</Breadcrumb>
			</Container>
			<Container centerContent></Container>
		</Layout>
	);
};
export default Work;
