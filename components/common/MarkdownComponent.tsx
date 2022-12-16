import React from 'react';
import styled from 'styled-components';

interface IMarkdownComponent {
	data: string;
}

const MarkdownComponent: React.FC<IMarkdownComponent> = ({ data }) => {
	return (
		<Container
			dangerouslySetInnerHTML={{
				__html: `${data}`,
			}}
		/>
	);
};

const Container = styled.div`
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 4; /* number of lines to show */
	line-clamp: 4;
	-webkit-box-orient: vertical;

	@media (hover: hover) {
		&:hover {
			position: relative;
			overflow: initial;
			text-overflow: unset;
			-webkit-line-clamp: unset; /* number of lines to show */
			line-clamp: unset;
			max-height: 400px;
			overflow-y: auto;
		}
	}

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

		@media (max-width: 767px) {
			font-size: 16px;
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
