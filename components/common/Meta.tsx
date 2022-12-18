import React from 'react';
import Head from 'next/head';

const defaultTitle = 'Nada Test LambdaTeam';

const Meta: React.FC<{ title?: string }> = ({ title = defaultTitle }) => (
	<Head>
		<title>{title}</title>
		<meta name='description' content='Nada Test LambdaTeam' />
		<meta name='viewport' content='width=device-width, initial-scale=1' />
		<link rel='icon' href='/favicon.ico' />
	</Head>
);

export default Meta;
