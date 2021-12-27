import React from 'react';
import { Box, Container, Heading, Image, Text } from '@chakra-ui/react';
import { Layout } from '../../components/Layout';
import randomImage from '../public/works/randomImage.jpg';

interface WorkPositionProps {
	companyName: string;
	positionName: string;
	startDate: Date;
	endDate?: Date;
	image: string;
	description: string[];
}

const WorkPosition: React.FC<WorkPositionProps> = (props): JSX.Element => (
	<Box p={3} mb={6}>
		<Image src={props.image}></Image>
		<Text>{props.companyName}</Text>
		<Text>{props.positionName}</Text>
		{props.description.map(element => {
			<Text>{element}</Text>;
		})}
	</Box>
);

const Works: React.FC<{}> = ({}) => (
	<Layout>
		<Heading>Works</Heading>
		<Container centerContent>
			<WorkPosition
				companyName={'Copperleaf Technologies'}
				positionName={'Software Developer'}
				image={
					'https://s28.q4cdn.com/726611857/files/design/CopperleafLogo_Horizontal_JPG.jpg'
				}
				startDate={new Date()}
				endDate={new Date()}
				description={[]}
			></WorkPosition>
			<WorkPosition
				companyName={'Nero Global Tracking'}
				positionName={'Software Quality Developer'}
				image={
					'https://neroglobal.com/wp-content/uploads/2017/06/LP_laptop_phone-900x544.png'
				}
				startDate={new Date()}
				endDate={new Date()}
				description={[]}
			></WorkPosition>
			<WorkPosition
				companyName={'Dyne Technologies Inc'}
				positionName={'Software Developer'}
				image={'https://dyneapp.files.wordpress.com/2021/09/frame-7167.png'}
				startDate={new Date()}
				endDate={new Date()}
				description={[]}
			></WorkPosition>
			<WorkPosition
				companyName={'UBC Launch Pad'}
				positionName={'Software Developer'}
				image={'https://ubclaunchpad.com/img/landing.77f06a83.png'}
				startDate={new Date()}
				endDate={new Date()}
				description={[]}
			></WorkPosition>
		</Container>
	</Layout>
);

export default Works;
