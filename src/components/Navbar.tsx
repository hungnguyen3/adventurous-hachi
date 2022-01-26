import { HamburgerIcon } from '@chakra-ui/icons';
import {
	Box,
	Container,
	Flex,
	Heading,
	IconButton,
	Link,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
	Stack,
	useBreakpointValue,
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
				p={2}
				borderRadius="md"
			>
				{props.children}
			</Link>
		</NextLink>
	);
};

interface NavigationMenuProps {
	path: string;
}

const NavigationMenu: React.FC<NavigationMenuProps> = (props): JSX.Element => {
	return (
		<Menu>
			<MenuButton
				as={IconButton}
				aria-label="Options"
				icon={<HamburgerIcon />}
				variant="outline"
			/>
			<MenuList>
				<MenuItem>
					<NavLink href={'/works'} toggleOn={props.path === '/works'}>
						Works
					</NavLink>
				</MenuItem>
				<MenuItem>
					<NavLink href={'/projects'} toggleOn={props.path === '/projects'}>
						Projects
					</NavLink>
				</MenuItem>
				<MenuItem>
					<NavLink href={'/posts'} toggleOn={props.path === '/posts'}>
						Posts
					</NavLink>
				</MenuItem>
				<MenuItem>
					<NavLink href={'/hachi'} toggleOn={props.path === '/hachi'}>
						Hachi
					</NavLink>
				</MenuItem>
				<MenuDivider />
				<MenuItem>
					<DarkModeSwitch />
				</MenuItem>
			</MenuList>
		</Menu>
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
			bg={useColorModeValue('systemGreen', 'systemFoggyBlue')}
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

				<Stack
					direction={{ base: 'column', md: 'row' }}
					display={{ base: 'none', md: 'flex' }}
					spacing="20px"
					alignItems="center"
				>
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

				<Box flex={1} align="right">
					<Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
						<NavigationMenu path={props.path} />
					</Box>
				</Box>
			</Container>
		</Box>
	);
};
