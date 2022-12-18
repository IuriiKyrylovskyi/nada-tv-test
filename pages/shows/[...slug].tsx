import React from 'react';
import { GetStaticProps, NextPage } from 'next';

import fetchShow from '../../helpers/fetchShow';
import { IShow } from '../../api/main';

import Layout from '../../components/common/Layout';
import Meta from '../../components/common/Meta';
import Show from '../../components/Show/Show';

interface IProps {
	show: IShow;
}

export const getStaticProps: GetStaticProps = async (context) => {
	const revalidateInterval = 600;

	const showId = context.params!.slug as string;

	const show = await fetchShow(showId);

	if (!show) {
		return {
			notFound: true,
			revalidate: revalidateInterval,
		};
	}

	return {
		props: {
			show,
		},
		revalidate: revalidateInterval,
	};
};

export const getStaticPaths = async () => {
	return {
		fallback: 'blocking',
		paths: [],
	};
};

const ShowPage: NextPage<IProps> = ({ show }) => {
	return (
		<>
			<Meta title={show.name} />
			<Layout>
				<Show show={show} />
			</Layout>
		</>
	);
};

export default ShowPage;
