import {
	Box,
	Container,
	Flex,
	Heading,
	Link,
	Stack,
	useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { DarkModeSwitch } from './DarkModeSwitch';

interface NavbarProps {
	path: string;
}

interface NavLinkProps {
	href: string;
	children: any;
	toggleOn: boolean;
}

const NavLink: React.FC<NavLinkProps> = (props): JSX.Element => {
	return (
		<NextLink href={props.href} passHref>
			<Link
				bg={props.toggleOn ? '#dab692' : undefined}
				color={props.toggleOn ? '#8f5b34' : undefined}
			>
				{props.children}
			</Link>
		</NextLink>
	);
};

export const Navbar: React.FC<NavbarProps> = (props): JSX.Element => {
	const path = props.path;

	return (
		<Box
			pos="fixed"
			as="nav"
			w="100%"
			zIndex={1}
			bg={useColorModeValue('#8d9b6a', '#8a9ea7')}
		>
			<Container
				maxW="xl"
				display="flex"
				align="center"
				wrap="wrap"
				justify="space-between"
				p={2}
				zIndex={1}
			>
				<Flex align="center" mr={5}>
					<Link href="/">
						<Heading as="h1" size="md">
							Hung Nguyen
						</Heading>
					</Link>
				</Flex>

				<Stack spacing="24px" direction={['row']}>
					<NavLink href={'/works'} toggleOn={props.path === '/works'}>
						Works
					</NavLink>
					<NavLink href={'/projects'} toggleOn={props.path === '/projects'}>
						Projects
					</NavLink>
					<NavLink href={'/posts'} toggleOn={props.path === '/posts'}>
						Posts
					</NavLink>
					<NavLink href={'/hachi'} toggleOn={props.path === '/hachi'}>
						Hachi
					</NavLink>
					<DarkModeSwitch />
				</Stack>
			</Container>
		</Box>
	);
};
