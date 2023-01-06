import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

const defaultTitle = 'Nada Test LambdaTeam';
const gtHeadScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5H4GP3N');`;

const Meta: React.FC<{ title?: string }> = ({ title = defaultTitle }) => (
	<>
		<Head>
			<title>{title}</title>
			<meta name='description' content='Nada Test LambdaTeam' />
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<link rel='icon' href='/favicon.ico' />
		</Head>
		<Script id='google-tag-manager' strategy='afterInteractive'>
			{gtHeadScript}
		</Script>
	</>
);

export default Meta;
