import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

const Works: React.FC<{}> = ({}) => (
	<Box>
		<Navbar path={'/works'} />
		<Box>
			<Heading>Works</Heading>
		</Box>
		<Footer />
	</Box>
);

export default Works;
