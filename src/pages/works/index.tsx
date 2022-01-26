import React from 'react';
import { Container } from '@chakra-ui/react';
import { Layout } from '../../components/Layout';
import { WorkGrid } from '../../components/works/WorkGrid';
import { WorkCard } from '../../components/works/WorkCard';
import { works } from '../../components/works/_data';

const Works: React.FC<{}> = ({}) => (
	<Layout path={'/works'}>
		<Container mt={20} centerContent>
			<WorkGrid>
				{works.map(work => (
					<WorkCard key={work.id} work={work} />
				))}
			</WorkGrid>
		</Container>
	</Layout>
);

export default Works;
