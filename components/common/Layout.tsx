import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

interface IChildren {
	children: React.ReactNode;
}

const Layout: React.FC<IChildren> = ({ children }) => (
	<>
		<Header />
		<Main>{children}</Main>
		<Footer />
	</>
);

const Main = styled.main`
	width: 100%;
	height: 100%;
	flex: 1;
`;

export default Layout;
