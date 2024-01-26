import {
	Box,
	Button,
	Center,
	Heading,
	Icon,
	ListItem,
	Stack,
	Text,
  Skeleton,
  Img,
	UnorderedList,
	useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';
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
      <Img
        src={'/CodingCat.png'}
        alt={'CoddingCat'}
        draggable="false"
        fallback={<Skeleton />}
			  borderRadius={useBreakpointValue({ base: 'md', md: 'xl' })}
      />
		</Box>
		<Box
			mb={6}
			p={3}
			borderRadius="xl"
			textAlign="center"
			bg={useColorModeValue('systemLightBlue', 'systemGreen')}
		>
			Hi! I'm Hung Nguyen👋 - Full Stack & DevOps developer!
		</Box>

		<Box mb={6}>
			<Heading>Overview</Heading>
			<Text p={2} style={{ textIndent: '20px' }}>
				I am a software engineer from Vancouver with 2+ years of experience and a bachelor in Computer
				Engineering at the{' '}
				<Link href="https://www.ubc.ca/">
					<Text as="i">University of British Columbia🎓. </Text>
				</Link>{' '}
				I am passionate about designing and building software applications to solve real-life problems.
			</Text>
			<Text p={2} as="b">
				Fun fact: my 🐈 is named Hachi - Spririted Away (Ha)ku & (Chi)hiro
			</Text>
      <br/>
      <br/>
			<Text p={2} as="b">
				I'm actively looking for a full-time position starting May 2024.
			</Text>
		</Box>

		<Box mb={6}>
			<Heading>Experience 💼</Heading>
			<UnorderedList mt={2} ml={10}>
				<ListItem>
					SAP, Software Engineer Intern
					<br />
					(Sep 2023 - April 2024)
				</ListItem>
				<br />
				<ListItem>
					Copperleaf Technologies, Software Engineer Intern
					<br />
					(Jan 2022 - Aug 2022)
				</ListItem>
				<br />
				<ListItem>
					DYNE Technologies, Software Engineer Intern
					<br />
					(Sep 2021 - Dec 2021)
				</ListItem>
				<br />
				<ListItem>
					Vecima Networks Inc, Software QA Engineer Intern
					<br />
					(Jan 2021 - Aug 2021)
				</ListItem>
			</UnorderedList>
		</Box>
		<Box mb={6}>
			<Heading>Community 🙌</Heading>
			<UnorderedList mt={2} ml={10}>
				<ListItem>
					UBC Launch Pad, Software Engineer
					<br />
					(Sep 2021 - May 2023)
				</ListItem>
				<br />
				<ListItem>
					UBC AgroBot, Software Engineer
					<br />
					(Sep 2021 - Dec 2021)
				</ListItem>
			</UnorderedList>
		</Box>
		<Box>
			<Heading>Find me</Heading>
			<Center style={{ width: '100%' }}>
				<Stack mt={2} mb={6} display="flex" flexDirection="column" spacing="2" style={{ width: '80%' }}>
					<Link href="mailto:hunglnl01@gmail.com">
						<Button
							variant="outline"
							color={useColorModeValue('systemLightBlue', 'systemGreen')}
							borderColor={useColorModeValue('systemLightBlue', 'systemGreen')}
							border="2px"
							isFullWidth={true}
						>
							<Icon as={AiFillMail} /> hunglnl01@gmail.com
						</Button>
					</Link>
					<Link href="https://github.com/hungnguyen3">
						<Button
							variant="outline"
							color={useColorModeValue('systemLightBlue', 'systemGreen')}
							borderColor={useColorModeValue('systemLightBlue', 'systemGreen')}
							border="2px"
							isFullWidth={true}
						>
							<Icon as={FaGithub} /> hungnguyen3
						</Button>
					</Link>
					<Link href="https://www.linkedin.com/in/hungnguyen7/">
						<Button
							variant="outline"
							color={useColorModeValue('systemLightBlue', 'systemGreen')}
							borderColor={useColorModeValue('systemLightBlue', 'systemGreen')}
							border="2px"
							isFullWidth={true}
						>
							<Icon as={FaLinkedin} /> hungnguyen7
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
							<Icon as={FaInstagram} /> adventurous_hachi 💚
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
							<Icon as={FaInstagram} /> hung_xd
						</Button>
					</Link>
				</Stack>
			</Center>
		</Box>
	</Layout>
);

export default Index;
