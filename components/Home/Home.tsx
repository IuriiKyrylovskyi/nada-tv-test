import React, { useState } from 'react';
import styled from 'styled-components';

import { IScheduleItem, IShow } from '../../api/main';
import ContentContainer from '../common/ContentContainer';

import Cards from './Cards';

const Home: React.FC<{ items: IScheduleItem[] }> = ({ items }) => {
	const [scheduleItems, setScheduleItems] = useState<IScheduleItem[]>(items);

	return (
		<>
			<Section>
				<Wrap>
					<ContentContainer>
						<InfoBlock>
							<Text>TV Show and web series database</Text>
							<Text>
								Create personalised schedules. Episode guide, cast, crew and
								character information
							</Text>
						</InfoBlock>
					</ContentContainer>
				</Wrap>
			</Section>
			<Cards items={scheduleItems} setScheduleItems={setScheduleItems} />
		</>
	);
};

export const Section = styled.section``;

const Wrap = styled.div`
	background-color: ${({ theme }) => theme.colors.Yellow};
`;

const InfoBlock = styled.div`
	padding: 50px 0 100px;
	font-size: 26px;
	max-width: 600px;

	@media (max-width: 1024px) {
		padding: 40px 0 80px;
	}
	@media (max-width: 767px) {
		padding: 20px 0 50px;
		font-size: 22px;
	}
`;
const Text = styled.p`
	font-size: 20px;
	line-height: 1.5;

	@media (max-width: 767px) {
		font-size: 18px;
	}
`;

export default Home;
