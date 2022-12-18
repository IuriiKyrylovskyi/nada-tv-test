import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { Container } from './ContentContainer';

const Header: React.FC = () => (
	<HeaderWrap>
		<Container>
			<Link href={'/'}>TV Bland</Link>
		</Container>
	</HeaderWrap>
);

const HeaderWrap = styled.header`
	width: 100%;
	height: 100%;
	padding: 40px 0;
	font-size: 20px;
	font-weight: 600;
	background-color: ${({ theme }) => theme.colors.Yellow};

	@media (max-width: 1024px) {
		padding: 25px 0;
	}
	@media (max-width: 767px) {
		padding: 15px 0;
	}
`;

export default Header;
