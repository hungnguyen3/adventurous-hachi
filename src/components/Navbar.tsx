import { HamburgerIcon } from '@chakra-ui/icons';
import {
	Box,
	Center,
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
	useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
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
				bg={props.toggleOn ? 'systemLightBrown' : undefined}
				color={props.toggleOn ? 'systemBrown' : undefined}
				p={2}
				borderRadius="md"
				// border={props.toggleOn ? '1px' : null}
				// borderColor={props.toggleOn ? 'systemBrown' : null}
				boxShadow={props.toggleOn ? 'lg' : null}
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
	const router = useRouter();

	return (
		<Menu autoSelect={false}>
			<MenuButton
				as={IconButton}
				aria-label="Options"
				icon={<HamburgerIcon />}
				variant="outline"
			/>
			<MenuList>
				<MenuItem onClick={() => router.push('/works')}>
					<NavLink href={'/works'} toggleOn={props.path === '/works'}>
						Works
					</NavLink>
				</MenuItem>
				<MenuItem onClick={() => router.push('/projects')}>
					<NavLink href={'/projects'} toggleOn={props.path === '/projects'}>
						Projects
					</NavLink>
				</MenuItem>
				{/* <MenuItem onClick={() => router.push('/posts')}>
					<NavLink href={'/posts'} toggleOn={props.path === '/posts'}>
						Posts
					</NavLink>
				</MenuItem>
				<MenuItem onClick={() => router.push('/hachi')}>
					<NavLink href={'/hachi'} toggleOn={props.path === '/hachi'}>
						Hachi
					</NavLink>
				</MenuItem> */}
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
					<NextLink href={'/'} passHref>
						<Link href="/">
							<Heading as="h1" size="md">
								Hung Nguyen
							</Heading>
						</Link>
					</NextLink>
				</Flex>

				<Stack
					direction="row"
					display={{ base: 'none', md: 'flex' }}
					width={{ base: 'full', md: 'auto' }}
					spacing="20px"
					flexGrow={1}
				>
					<NavLink href={'/works'} toggleOn={props.path === '/works'}>
						Works
					</NavLink>
					<NavLink href={'/projects'} toggleOn={props.path === '/projects'}>
						Projects
					</NavLink>
					{/* <NavLink href={'/posts'} toggleOn={props.path === '/posts'}>
						Posts
					</NavLink>
					<NavLink href={'/hachi'} toggleOn={props.path === '/hachi'}>
						Hachi
					</NavLink> */}
				</Stack>

				<Box flex={{ base: 1, md: 0 }} align="right">
					<Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
						<NavigationMenu path={props.path} />
					</Box>
				</Box>
				<Center display={{ base: 'none', md: 'flex' }}>
					<DarkModeSwitch />
				</Center>
			</Container>
		</Box>
	);
};
