import React from 'react';
import styled from 'styled-components';

import { IScheduleItem } from '../../api/main';

import Cards from './Cards';

const Home: React.FC<{ items: IScheduleItem[] }> = ({ items }) => {
	return (
		<>
			<Section>
				<InfoBlock>
					<Text>TV Show and web series database</Text>
					<Text>
						Create personalised schedules. Episode guide, cast, crew and character
						information
					</Text>
				</InfoBlock>
			</Section>
			<Cards items={items} />
		</>
	);
};

export const Section = styled.section`
	margin: 0px 40px 0px;

	@media (max-width: 767px) {
		margin: 10px;
	}
`;

const InfoBlock = styled.div``;
const Text = styled.p`
	font-size: 20px;
	line-height: 1.5;
`;

export default Home;
