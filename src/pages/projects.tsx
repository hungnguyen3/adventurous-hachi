import { Container, Heading } from '@chakra-ui/react';
import { Layout } from '../components/Layout';
import { WorkGrid } from '../components/works/WorkGrid';
import { ProjectCard } from '../components/projects/ProjectCard';
import { projects } from '../components/projects/_data';

const Projects: React.FC<{}> = ({}) => (
	<Layout path={'/projects'}>
		<Heading>Works</Heading>
		<Container mt={8} centerContent>
			<WorkGrid>
				{projects.map(project => (
					<ProjectCard key={project.id} project={project} />
				))}
			</WorkGrid>
		</Container>
	</Layout>
);

export default Projects;
