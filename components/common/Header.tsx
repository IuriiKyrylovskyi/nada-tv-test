import styled from 'styled-components';

import { Container } from './ContentContainer';

const Header: React.FC = () => (
	<HeaderWrap>
		<Container>TV Bland</Container>
	</HeaderWrap>
);

const HeaderWrap = styled.header`
	width: 100%;
	height: 100%;
`;

export default Header;
