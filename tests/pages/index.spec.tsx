/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';

import { IScheduleItem } from '../../api/main';

import HomePage from '../../pages/index';
import ThemeProviderComponent from '../../components/common/ThemeProviderComponent';

// Mock sheduleItem for home page
const TEST_SHOW = {
	id: 49059,
	name: '90 Day Pillow Talk: Happily Ever After?',
	genres: ['Comedy'],
	status: 'Running',
	schedule: {
		time: '23:00',
		days: ['Sunday'],
	},
	rating: { average: 7.7 },
	webChannel: { name: 'BBC' },
	image: {
		medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/405/1013172.jpg',
		original: 'https://static.tvmaze.com/uploads/images/original_untouched/405/1013172.jpg',
	},
	summary:
		"<p>Your 90 Day favorites invite you into their homes as they watch last night's episode of Happily Ever After?</p>",
};
// Mock sheduleItem for home page
const TEST_SCHEDULE_ITEM = {
	id: 2442684,
	show: TEST_SHOW,
};

describe('The home page', () => {
	it('Home page renders schedules correctly by checking its title', () => {
		const TEST_SCHEDULES: IScheduleItem[] = [TEST_SCHEDULE_ITEM];

		const { getByTestId } = render(
			<ThemeProviderComponent>
				<HomePage items={TEST_SCHEDULES} />
			</ThemeProviderComponent>,
		);

		TEST_SCHEDULES.forEach(({ show }) => {
			const showItemName = getByTestId(`item-title-${show.id}`);

			expect(showItemName.textContent).toContain(show.name);
		});
	});
});
