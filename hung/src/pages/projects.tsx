import { Box, Container, Heading, Image, Text } from '@chakra-ui/react';
import { Layout } from '../components/Layout';

interface ProjectProps {
	name: string;
	image: string;
	description: string[];
	languages: string[];
	tools: string[];
}

const Project: React.FC<ProjectProps> = (props): JSX.Element => (
	<Box p={3} mb={6}>
		<Image src={props.image}></Image>
		<Text>{props.name}</Text>
		{props.description.map(element => {
			<Text>{element}</Text>;
		})}
	</Box>
);

const Projects: React.FC<{}> = ({}) => (
	<Layout path={'/projects'}>
		<Heading>Works</Heading>
		<Container centerContent>
			<Project
				name={'Lost Pets Finder'}
				image={
					'https://media.istockphoto.com/vectors/sample-sign-sample-square-speech-bubble-sample-vector-id1161352480?k=20&m=1161352480&s=612x612&w=0&h=uVaVErtcluXjUNbOuvGF2_sSib9dZejwh4w8CwJPc48='
				}
				description={[]}
				languages={['JavaScript']}
				tools={[
					'React Native',
					'Node.js',
					'MySQL',
					'AWS',
					'Firebase',
					'Jest',
					'Codacy',
					'Travis CI',
				]}
			></Project>
		</Container>
	</Layout>
);

export default Projects;
