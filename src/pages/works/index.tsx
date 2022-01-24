import React from 'react';
import { Box, Container, Heading, Image, Text } from '@chakra-ui/react';
import { Layout } from '../../components/Layout';
import { data } from '../../public/works/workDetails';
import { WorkGrid } from '../../components/works/WorkGrid';
import { WorkCard } from '../../components/works/WorkCard';
import { works } from '../../components/works/_data';

var months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

interface WorkPositionProps {
	companyName: string;
	positionName: string;
	startDate: Date;
	endDate?: Date;
	image: string;
	description: string[];
}

const WorkPosition: React.FC<WorkPositionProps> = (props): JSX.Element => {
	const startDate = `${
		months[props.startDate.getMonth()]
	} ${props.startDate.getFullYear()}`;

	const endDate = props.endDate
		? `${months[props.endDate.getMonth()]} ${props.endDate.getFullYear()}`
		: 'Present';

	return (
		<Box p={3} mb={6}>
			<Image src={props.image}></Image>
			<Text>{props.companyName}</Text>
			<Text>
				({startDate} - {endDate})
			</Text>

			<Text>{props.positionName}</Text>
			{props.description.map(element => {
				<Text>{element}</Text>;
			})}
		</Box>
	);
};

const Works: React.FC<{}> = ({}) => (
	<Layout path={'/works'}>
		<Heading>Works</Heading>
		<Container centerContent>
			{data.map(element => {
				return (
					<WorkPosition
						companyName={element.companyName}
						positionName={element.positionName}
						startDate={element.startDate}
						endDate={element.endDate}
						image={element.image}
						description={element.description}
					/>
				);
			})}
			<WorkGrid>
				{works.map(work => (
					<WorkCard key={work.id} work={work} />
				))}
			</WorkGrid>
		</Container>
	</Layout>
);

export default Works;
