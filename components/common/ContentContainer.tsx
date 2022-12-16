import styled from 'styled-components';

interface IChildren {
	children: React.ReactNode;
}

const ContentContainer: React.FC<IChildren> = ({ children }) => (
	<Main>
		<Container>{children}</Container>
	</Main>
);

const Main = styled.main`
	width: 100%;
	height: 100%;
	flex: 1;
	background: ${({ theme }) => theme.colors.White};
`;

export const Container = styled.div`
	max-width: 1200px;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	padding: 0 24px;
	flex: 1;

	@media (max-width: 767px) {
		padding: 0 16px;
	}
`;

export default ContentContainer;
