import React from 'react';
import { GetServerSideProps } from 'next';

import { IScheduleItem } from '../api/main';
import fetchScheduleItems from '../helpers/fetchScheduleItems';

import Layout from '../components/common/Layout';
import Home from '../components/Home/Home';

interface IProps {
	items: IScheduleItem[];
}

const revalidateInterval = 5;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	ctx.res.setHeader(
		'Cache-Control',
		`public, s-maxage=1, stale-while-revalidate=${revalidateInterval}`,
	);

	const items = await fetchScheduleItems();

	return {
		props: {
			items,
		},
	};
};

const HomePage: React.FC<IProps> = ({ items }) => {
	return (
		<Layout>
			<Home items={items} />
		</Layout>
	);
};

export default HomePage;
