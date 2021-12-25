import { Box, Heading } from '@chakra-ui/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const Posts: React.FC<{}> = ({}) => (
	<Box>
		<Navbar path={'/posts'} />
		<Box>
			<Heading>Posts</Heading>
		</Box>
		<Footer />
	</Box>
);

export default Posts;
