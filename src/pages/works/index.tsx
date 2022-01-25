import React from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
import { Layout } from '../../components/Layout';
import { WorkGrid } from '../../components/works/WorkGrid';
import { WorkCard } from '../../components/works/WorkCard';
import { works } from '../../components/works/_data';

interface WorkPositionProps {
	companyName: string;
	positionName: string;
	startDate: Date;
	endDate?: Date;
	image: string;
	description: string[];
}

const Works: React.FC<{}> = ({}) => (
	<Layout path={'/works'}>
		<Heading>Works</Heading>
		<Container mt={8} centerContent>
			<WorkGrid>
				{works.map(work => (
					<WorkCard key={work.id} work={work} />
				))}
			</WorkGrid>
		</Container>
	</Layout>
);

export default Works;
