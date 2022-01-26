import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { Layout } from '../components/Layout';

const Hachi: React.FC<{}> = ({}) => (
	<Layout path={'/hachi'}>
		<Container mt={20} centerContent>
			<Text>Page is under development!</Text>
		</Container>
	</Layout>
);

export default Hachi;
