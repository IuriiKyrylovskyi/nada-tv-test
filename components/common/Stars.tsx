import React from 'react';
import styled from 'styled-components';

interface IStar {
	size?: string;
	rating: number;
	isBlue?: boolean;
}

const Stars: React.FC<IStar> = ({ size = '30px', rating, isBlue = false }) => {
	const calcRating = !!rating ? +(rating / 2).toFixed(1) : 0;

	return (
		<StarsWrap size={size}>
			<WhiteStars />
			<ColoredStars rating={calcRating} isBlue={isBlue} />
		</StarsWrap>
	);
};

const StarsWrap = styled.div<{ size: string }>`
	display: inline-block;
	font-size: ${({ size }) => size};
	line-height: 1;
	position: relative;

	@media (max-width: 767px) {
		font-size: 16px;
	}
`;

const WhiteStars = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	&::before {
		content: '★★★★★';
		letter-spacing: 3px;
		background-clip: text;
		-webkit-text-fill-color: #ffffff;
	}
`;
const ColoredStars = styled.div<{ rating: number; isBlue: boolean }>`
	position: relative;
	z-index: 1;
	width: calc(${({ rating }) => rating} / 5 * 100%);
	overflow: hidden;

	&::before {
		content: '★★★★★';
		letter-spacing: 3px;
		background-clip: text;
		-webkit-text-fill-color: ${({ theme, isBlue }) =>
			isBlue ? theme.colors.Blue : theme.colors.Yellow};
	}
`;

export default Stars;
