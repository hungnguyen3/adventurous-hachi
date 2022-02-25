import { Collapse, Container, Flex, useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

interface LayoutProps {
	path: string;
	children: JSX.Element[] | JSX.Element;
}

export const Layout: React.FC<LayoutProps> = (props): JSX.Element => {
	const [transition, useTransition] = useState(false);
	const router = useRouter();

	// sketchy transition implementation
	useEffect(() => {
		useTransition(false);
		setTimeout(() => {
			useTransition(true);
		}, 1);
	}, [router.pathname]);

	return (
		<Flex flexDirection="column">
			<Navbar path={props.path} />
			<Collapse in={transition} animateOpacity startingHeight={50}>
				<Container maxW="container.sm">{props.children}</Container>
			</Collapse>
			<Footer />
		</Flex>
	);
};
