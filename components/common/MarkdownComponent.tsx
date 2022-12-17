import React from 'react';
import styled, { css } from 'styled-components';
import removeTags from '../../helpers/removeTags';

interface IMarkdownComponent {
	data: string;
	isEllipsis?: boolean;
}

const MarkdownComponent: React.FC<IMarkdownComponent> = ({ data, isEllipsis = false }) => {
	let htmlString: string;

	if (isEllipsis) {
		htmlString = removeTags(data);
	} else {
		htmlString = data;
	}

	return (
		<Container
			id='truncateme'
			isEllipsis={isEllipsis}
			dangerouslySetInnerHTML={{
				__html: `${htmlString}`,
			}}
		/>
	);
};

const Container = styled.div<{ isEllipsis: boolean }>`
	${({ isEllipsis }) =>
		isEllipsis &&
		css`
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 4;
			line-clamp: 4;
			-webkit-box-orient: vertical;
		`}

	& h1 {
		font-size: 34px;
		line-height: 1.2;
		font-weight: bold;
		color: ${({ theme }) => theme.colors.Black};

		@media (max-width: 767px) {
			font-size: 24px;
		}
	}

	& h2 {
		font-size: 32px;
		line-height: 1.2;
		font-weight: 600;
		color: ${({ theme }) => theme.colors.Black};
		margin: 62px 0 30px;

		@media (max-width: 767px) {
			font-size: 24px;
		}
	}

	& h3 {
		font-size: 24px;
		line-height: 1.4;
		font-weight: 600;
		color: ${({ theme }) => theme.colors.Black};
		margin: 30px 0;

		@media (max-width: 767px) {
			font-size: 21px;
		}
	}

	& h4 {
		font-size: 24px;
		line-height: 1.4;
		font-weight: 600;
		color: ${({ theme }) => theme.colors.Black};
		margin: 25px 0;
		@media (max-width: 767px) {
			font-size: 16px;
		}
	}

	& h5 {
		font-size: 20px;
		line-height: 1.4;
		font-weight: 600;
		color: ${({ theme }) => theme.colors.Black};
		margin: 18px 0;
	}

	& ul {
		list-style-type: none;
		margin: 10px 0px 20px 20px;

		& li {
			position: relative;
			line-height: 1.5;
			padding-left: 15px;

			&::before {
				content: '';
				position: absolute;
				top: 10px;
				left: 0;
				width: 5px;
				height: 5px;
				border-radius: 50%;
				background-color: ${({ theme }) => theme.colors.Black};
			}
		}
	}

	& p {
		font-weight: 300;
		font-size: 16px;
		color: ${({ theme }) => theme.colors.Black};
		line-height: 1.5;
		margin: 10px 0;

		@media (max-width: 1024px) {
			font-size: 14px;
			line-height: 1.2;
		}

		& a {
			color: ${({ theme }) => theme.colors.Blue};
			margin: 0 2px;
			transition: all 0.3s ease;
			text-decoration: underline;

			&:hover {
				color: ${({ theme }) => theme.colors.Black};
				text-decoration: none;
			}
		}
	}

	& strong {
		font-weight: 600;
	}

	& td,
	th {
		padding-right: 10px;
		padding-bottom: 10px;
	}
`;

export default MarkdownComponent;
