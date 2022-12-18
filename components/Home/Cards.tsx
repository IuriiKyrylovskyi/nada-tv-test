/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';

import { IScheduleItem } from '../../api/main';
import fetchSchedulePage from '../../helpers/fetchSchedulePage';
import formatDate from '../../helpers/formatDate';
import { Section } from './Home';

import ContentContainer from '../common/ContentContainer';
import Pagination from '../common/Pagination';
import Card from './Card';

interface ICards {
	items: IScheduleItem[];
	setScheduleItems: (key: IScheduleItem[] | any) => void;
}

const Cards: React.FC<ICards> = ({ items, setScheduleItems }) => {
	const [page, setPage] = useState(1);
	const [isLoading, setIsloading] = useState(false);
	const maxPaginationPage = 100; // api doesn't provide total number of items or pages

	const handlePagin = async (page: number) => {
		const today = new Date();
		const date = formatDate(today.setDate(today.getDate() - page + 1));

		setIsloading(true);

		const newItems = await fetchSchedulePage(date);

		setScheduleItems(newItems);
		setIsloading(false);
	};

	return (
		<Section>
			<InfoBlock>
				<ContentContainer>
					<Title>Last added shows</Title>
				</ContentContainer>
			</InfoBlock>
			<CardsWrap>
				<Bg />
				<ContentContainer>
					<Pagination
						currentPage={page}
						setCurrentPage={setPage}
						handlePagin={handlePagin}
						isLoading={isLoading}
						maxPaginationPage={maxPaginationPage}
					/>
					<CardsBlock>
						{items.length > 0
							? items.map((item) => (
									<Fragment key={item.id}>
										<Card item={item} />
									</Fragment>
							  ))
							: 'nothing is scheduled today ('}
					</CardsBlock>
				</ContentContainer>
			</CardsWrap>
		</Section>
	);
};

const InfoBlock = styled.div`
	background-color: ${({ theme }) => theme.colors.Yellow};

	@media (max-width: 767px) {
		background-color: transparent;
		padding-top: 30px;
	}
`;
const CardsWrap = styled.div`
	position: relative;
`;

const Bg = styled.div`
	position: absolute;
	width: 100%;
	height: 150px;
	background-color: ${({ theme }) => theme.colors.Yellow};
	z-index: -1;

	@media (max-width: 767px) {
		background-color: transparent;
	}
`;

const Title = styled.h1`
	text-transform: capitalize;

	@media (max-width: 767px) {
		font-size: 20px;
	}
`;
const CardsBlock = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 1fr);

	column-gap: 20px;
	row-gap: 30px;
	padding: 50px 0 150px;

	@media (max-width: 1200px) {
		grid-template-columns: repeat(5, 1fr);
		& > a {
			max-width: 175px;
		}
	}
	@media (max-width: 1000px) {
		grid-template-columns: repeat(4, 1fr);
	}
	@media (max-width: 800px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media (max-width: 767px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media (max-width: 500px) {
		grid-template-columns: repeat(2, 1fr);
		column-gap: 10px;
		row-gap: 15px;
	}
`;

export default Cards;
