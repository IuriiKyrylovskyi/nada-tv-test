/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';

import ThemeProviderComponent from '../../components/common/ThemeProviderComponent';

import Show from '../../components/Show/Show';

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

describe('The show page', () => {
	it('Show page renders show correctly by checking its id', () => {
		const { getByTestId } = render(
			<ThemeProviderComponent>
				<Show show={TEST_SHOW} />
			</ThemeProviderComponent>,
		);

		const showItem = getByTestId(`name-${TEST_SHOW.id}`);

		expect(showItem.textContent).toEqual(TEST_SHOW.name);
	});

	it('Check show rating number calculation and its correct display', () => {
		const correctRating = +(TEST_SHOW.rating.average / 2).toFixed(1);

		const { getByTestId } = render(
			<ThemeProviderComponent>
				<Show show={TEST_SHOW} />
			</ThemeProviderComponent>,
		);

		const showItemRating = getByTestId(`rating-${TEST_SHOW.rating.average}`);

		expect(showItemRating.textContent).toEqual(`${correctRating}/5`);
	});
});
