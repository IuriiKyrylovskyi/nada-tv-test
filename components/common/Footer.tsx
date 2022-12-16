import styled from 'styled-components';

import { Container } from './ContentContainer';

const Footer: React.FC = () => (
	<FooterWrap>
		<Container>TV Bland</Container>
	</FooterWrap>
);

const FooterWrap = styled.footer`
	width: 100%;
	height: 100%;
	padding: 10px 0;
	background: ${({ theme }) => theme.colors.Yellow};

	& > div {
		text-align: right;
	}
`;

export default Footer;
