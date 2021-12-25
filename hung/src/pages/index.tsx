import {
	Box,
	Container,
	Flex,
	Heading,
	useColorModeValue,
} from '@chakra-ui/react';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

const Index: React.FC<{}> = ({}) => (
	<Flex flexDirection="column">
		<Navbar path="/" />
		<Container maxW="container.sm" centerContent>
			<Box
				mt={20}
				mb={6}
				p={3}
				borderRadius="xl"
				textAlign="center"
				bg={useColorModeValue('#8a9ea7', '#8d9b6a')}
			>
				Hi! I'm Hung Nguyen👋. I'm a full-stack developer!
			</Box>
		</Container>
		<Footer />
	</Flex>
);

export default Index;
