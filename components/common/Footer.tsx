import styled from 'styled-components';

import { Container } from './ContentContainer';

const Footer: React.FC = () => (
	<FooterWrap>
		<Container>Created by Lambda Team</Container>
	</FooterWrap>
);

const FooterWrap = styled.footer`
	width: 100%;
	height: 100%;
`;

export default Footer;
