import { Box, Heading } from '@chakra-ui/react';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

const Projects: React.FC<{}> = ({}) => (
	<Box>
		<Navbar path={'/projects'} />
		<Box>
			<Heading>Projects</Heading>
		</Box>
		<Footer />
	</Box>
);

export default Projects;
