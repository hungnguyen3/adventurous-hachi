import { Box, Button, Container, Heading, Image, Text } from '@chakra-ui/react';
import { Layout } from '../components/Layout';
import { data } from '../public/projects/projectDetails';
import { FaGithub, FaInfoCircle } from 'react-icons/fa';
interface ProjectProps {
	name: string;
	image: string;
	about: string;
	description: string[];
	languages: string[];
	tools: string[];
}

const Project: React.FC<ProjectProps> = (props): JSX.Element => (
	<Box p={3} mb={6} display="flex" flexDirection="column">
		<Image boxSize="200px" src={props.image}></Image>
		<Text mt={2} fontSize={20}>
			{props.name}
		</Text>
		<Text>{props.about}</Text>
		{props.description.map(element => {
			<Text>{element}</Text>;
		})}
		<Box>
			<Button>
				<FaInfoCircle />
				Learn more
			</Button>
			<Button>
				<FaGithub />
				View Code
			</Button>
		</Box>
	</Box>
);

const Projects: React.FC<{}> = ({}) => (
	<Layout path={'/projects'}>
		<Heading>Works</Heading>
		<Box display="flex" flexDirection="row">
			{data.map(element => {
				return (
					<Project
						name={element.name}
						image={element.image}
						about={element.about}
						description={element.description}
						languages={element.languages}
						tools={element.tools}
					/>
				);
			})}
		</Box>
	</Layout>
);

export default Projects;
