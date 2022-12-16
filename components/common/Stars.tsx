import styled from 'styled-components';

interface IStar {
	size?: string;
	rating?: number;
}

const Stars: React.FC<IStar> = ({ size = '30px', rating = 0 }) => (
	<StarsWrap size={size}>
		<WhiteStars />
		<YellowStars rating={rating} />
	</StarsWrap>
);

const StarsWrap = styled.div<{ size: string }>`
	display: inline-block;
	font-size: ${({ size }) => size};
	line-height: 1;
	position: relative;
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
const YellowStars = styled.div<{ rating: number }>`
	position: relative;
	z-index: 1;
	width: calc(${({ rating }) => rating} / 5 * 100%);
	overflow: hidden;

	&::before {
		content: '★★★★★';
		letter-spacing: 3px;
		background-clip: text;
		-webkit-text-fill-color: ${({ theme }) => theme.colors.Blue};
	}
`;

export default Stars;
