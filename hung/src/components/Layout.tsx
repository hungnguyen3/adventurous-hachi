import { Container, Flex } from '@chakra-ui/react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

interface LayoutProps {
	path: string;
	children: JSX.Element[] | JSX.Element;
}

export const Layout: React.FC<LayoutProps> = (props): JSX.Element => (
	<Flex flexDirection="column">
		<Navbar path={props.path} />
		<Container maxW="container.sm">{props.children}</Container>
		<Footer />
	</Flex>
);
