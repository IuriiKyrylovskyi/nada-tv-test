import type { AppProps } from 'next/app';
import styled from 'styled-components';

import '../styles/globals.css';

import ThemeProviderComponent from '../components/common/ThemeProviderComponent';
import Meta from '../components/common/Meta';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProviderComponent>
			<Meta />
			<Bg />
			<Body>
				<Component {...pageProps} />
			</Body>
		</ThemeProviderComponent>
	);
}

const Body = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	min-height: 100vh;
`;

const Bg = styled.div`
	position: absolute;
	background-color: ${({ theme }) => theme.colors.Yellow};
	width: 100vw;
	height: 30vh;
	z-index: -1;
`;
