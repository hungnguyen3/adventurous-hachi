import { Container, Select, useColorModeValue } from '@chakra-ui/react';
import { Layout } from '../components/Layout';
import { WorkGrid } from '../components/works/WorkGrid';
import { ProjectCard } from '../components/projects/ProjectCard';
import { projects } from '../components/projects/_data';
import React from 'react';

const Projects: React.FC<{}> = ({}) => {
	const [selectedValue, setSelectedValue] = React.useState('mostRecent');
	const [filteredProjects, setFilteredProjects] = React.useState(projects);

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedValue(event.target.value);

		switch (event.target.value) {
			case 'mostProud':
				return setFilteredProjects(
					projects
						.filter(project => project.rating >= 8)
						.sort((a, b) => b.date.getTime() - a.date.getTime())
				);
			case 'mostRecent':
				return setFilteredProjects(
					projects.sort((a, b) => b.date.getTime() - a.date.getTime())
				);
			case 'Hardware':
				return setFilteredProjects(
					projects.filter(project => project.type.includes('Hardware'))
				);
			case 'Software':
				return setFilteredProjects(
					projects.filter(project => project.type.includes('Software'))
				);
			case 'MachineLearning':
				return setFilteredProjects(
					projects.filter(project => project.type.includes('MachineLearning'))
				);
			case 'GameDev':
				return setFilteredProjects(
					projects.filter(project => project.type.includes('GameDev'))
				);
			default:
				return projects;
		}
	};

	return (
		<Layout path={'/projects'}>
			<Container mt={20} centerContent>
				<Select
					borderColor={useColorModeValue('systemGreen', 'systemLightBlue')}
					_hover={{ cursor: 'pointer' }}
					boxShadow="md"
					value={selectedValue}
					onChange={handleChange}
					mb={8}
				>
					{/* <option value="mostProud">Most Proud</option> */}
					<option value="mostRecent">Most Recent</option>
					<option value="Hardware">Hardware</option>
					<option value="Software">Software</option>
					<option value="MachineLearning">Machine Learning</option>
					<option value="GameDev">Game Dev</option>
				</Select>
				<WorkGrid>
					{filteredProjects.map(project => (
						<ProjectCard key={project.id} project={project} />
					))}
				</WorkGrid>
			</Container>
		</Layout>
	);
};

export default Projects;
