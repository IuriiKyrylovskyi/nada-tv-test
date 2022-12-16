import Link from 'next/link';
import styled from 'styled-components';

import { Container } from './ContentContainer';

const Header: React.FC = () => (
	<HeaderWrap>
		<Link href={'/'}>
			<Container>TV Bland</Container>
		</Link>
	</HeaderWrap>
);

const HeaderWrap = styled.header`
	width: 100%;
	height: 100%;
	padding: 40px 0;
	font-size: 20px;
	font-weight: 600;
`;

export default Header;
