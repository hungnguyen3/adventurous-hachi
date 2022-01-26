import {
	Box,
	Button,
	Heading,
	Icon,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import { Layout } from '../components/Layout';

const Index: React.FC<{}> = ({}) => (
	<Layout path={'/'}>
		<Box
			mt={20}
			mb={6}
			p={3}
			borderRadius="xl"
			textAlign="center"
			bg={useColorModeValue('systemLightBlue', 'systemGreen')}
		>
			Hi! I'm Hung Nguyen👋. I'm a full-stack developer!
		</Box>

		<Box mb={6}>
			<Heading>Overview:</Heading>
			<Text p={3}>
				I am a full-stack developer from Vancouver, Canada. I am currently
				pursuing a bachelor degree in Computer Engineering at the{' '}
				<Link href="https://www.ubc.ca/">
					<Text as="i">University of British Columbia🎓. </Text>
				</Link>
				I am passionate about designing and building software applications to
				solve real-life problems.
			</Text>
		</Box>

		<Box mb={6}>
			<Heading>💼 Experience:</Heading>
			<Text p={3}>
				- Copperleaf Technologies Inc, Software Developer
				<br />
				(Jan 2022 - August 2022)
			</Text>
			<Text p={3}>
				- UBC Launch Pad, Software Developer
				<br />
				(September 2021 - Present)
			</Text>
			<Text p={3}>
				- Vecima Networks Inc, Software Quality Assurance Developer
				<br />
				(May 2021 - Dec 2021)
			</Text>
			<Text p={3}>
				- DYNE Technologies Inc, Software Developer
				<br />
				(May 2021 - Present)
			</Text>
		</Box>

		<Stack mb={6} display="flex" flexDirection="column">
			<Heading>Find me:</Heading>
			<Link href="https://github.com/hungnguyen3">
				<Button
					variant="outline"
					color={useColorModeValue('systemLightBlue', 'systemGreen')}
					borderColor={useColorModeValue('systemLightBlue', 'systemGreen')}
					border="2px"
					isFullWidth={true}
				>
					<Icon as={FaGithub} /> @hungnguyen3
				</Button>
			</Link>
			<Link href="https://www.linkedin.com/in/hung-nguyen-se/">
				<Button
					variant="outline"
					color={useColorModeValue('systemLightBlue', 'systemGreen')}
					borderColor={useColorModeValue('systemLightBlue', 'systemGreen')}
					border="2px"
					isFullWidth={true}
				>
					<Icon as={FaLinkedin} /> @hung-nguyen-se
				</Button>
			</Link>
			<Link href="https://www.instagram.com/adventurous_hachi/">
				<Button
					variant="outline"
					color={useColorModeValue('systemLightBlue', 'systemGreen')}
					borderColor={useColorModeValue('systemLightBlue', 'systemGreen')}
					border="2px"
					isFullWidth={true}
				>
					<Icon as={FaInstagram} /> @adventurous_hachi 💚
				</Button>
			</Link>
			<Link href="https://www.instagram.com/hung_xd/">
				<Button
					variant="outline"
					color={useColorModeValue('systemLightBlue', 'systemGreen')}
					borderColor={useColorModeValue('systemLightBlue', 'systemGreen')}
					border="2px"
					isFullWidth={true}
				>
					<Icon as={FaInstagram} /> @hung_xd
				</Button>
			</Link>
		</Stack>
	</Layout>
);

export default Index;
