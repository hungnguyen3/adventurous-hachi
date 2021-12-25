import { Box, Heading } from '@chakra-ui/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const Hachi: React.FC<{}> = ({}) => (
	<Box>
		<Navbar path={'/hachi'} />
		<Box>
			<Heading>Hachi</Heading>
		</Box>
		<Footer />
	</Box>
);

export default Hachi;
