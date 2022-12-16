import React from 'react';
import styled from 'styled-components';

const DefaultImage: React.FC = () => {
	return <DefaultProfile />;
};

const DefaultProfile = styled.div`
	width: 100%;
	height: 100%;
	background: radial-gradient(#a1a3ae, #b4b8c3);
	background-repeat: no-repeat;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({ theme }) => theme.colors.White};
	font-size: 36px;
	font-weight: 600;
`;

export default DefaultImage;
