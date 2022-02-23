import {
	Box,
	Button,
	Center,
	Heading,
	Icon,
	ListItem,
	Stack,
	Text,
	UnorderedList,
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
			<Heading>Overview</Heading>
			<Text p={2} style={{ textIndent: '20px' }}>
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
			<Heading>Experience 💼</Heading>
			<UnorderedList mt={2} ml={10}>
				<ListItem>
					Copperleaf Technologies Inc, Software Developer <br />
					(Jan 2022 - August 2022)
				</ListItem>
				<br />
				<ListItem>
					UBC Launch Pad, Software Developer
					<br />
					(September 2021 - Present)
				</ListItem>
				<br />
				<ListItem>
					Vecima Networks Inc, Software Quality Assurance Developer
					<br />
					(May 2021 - Dec 2021)
				</ListItem>
				<br />
				<ListItem>
					DYNE Technologies Inc, Software Developer
					<br />
					(May 2021 - Present)
				</ListItem>
			</UnorderedList>
		</Box>

		<Box>
			<Heading>Find me</Heading>
			<Center style={{ width: '100%' }}>
				<Stack
					mt={2}
					mb={6}
					display="flex"
					flexDirection="column"
					spacing="2"
					style={{ width: '80%' }}
				>
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
			</Center>
		</Box>
	</Layout>
);

export default Index;
