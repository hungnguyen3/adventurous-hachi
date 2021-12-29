import { Box, Text } from '@chakra-ui/react';
import { Layout } from '../components/Layout';

const Posts: React.FC<{}> = ({}) => (
	<Layout path={'/posts'}>
		<Box>
			<Text>Posts</Text>
		</Box>
	</Layout>
);

export default Posts;
