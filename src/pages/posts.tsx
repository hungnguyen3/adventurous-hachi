import { Box, Container, Text } from '@chakra-ui/react';
import { Layout } from '../components/Layout';

const Posts: React.FC<{}> = ({}) => (
	<Layout path={'/posts'}>
		<Container mt={20} centerContent>
			<Text>Page is under development!</Text>
		</Container>
	</Layout>
);

export default Posts;
