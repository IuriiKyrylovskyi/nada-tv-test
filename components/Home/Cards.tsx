import React, { Fragment } from 'react';
import styled from 'styled-components';

import { IScheduleItem } from '../../api/main';
import ContentContainer from '../common/ContentContainer';

import Card from './Card';
import { Section } from './Home';

const Cards: React.FC<{ items: IScheduleItem[] }> = ({ items }) => {
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
