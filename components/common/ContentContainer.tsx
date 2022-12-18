import React from 'react';
import styled from 'styled-components';

interface IChildren {
	children: React.ReactNode;
}

const ContentContainer: React.FC<IChildren> = ({ children }) => <Container>{children}</Container>;

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
