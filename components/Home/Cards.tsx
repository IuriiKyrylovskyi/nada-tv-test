import React, { Fragment } from 'react';
import styled from 'styled-components';

import { IScheduleItem } from '../../api/main';

import Card from './Card';
import { Section } from './Home';

const Cards: React.FC<{ items: IScheduleItem[] }> = ({ items }) => {
	return (
		<Section>
			<InfoBlock>
				<Title>Last added shows</Title>
			</InfoBlock>
			<CardsBlock>
				{items.length > 0
					? items.map((item) => (
							<Fragment key={item.id}>
								<Card item={item} />
							</Fragment>
					  ))
					: 'nothing is scheduled today ('}
			</CardsBlock>
		</Section>
	);
};

const InfoBlock = styled.div``;
const Title = styled.h1`
	text-transform: capitalize;
`;
const CardsBlock = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	column-gap: 20px;
	row-gap: 30px;

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
