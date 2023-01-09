import React from 'react';

import { IIcon } from '../../interfaces/icon';

const MessagesIcon: React.FC<IIcon> = ({ width = '18', height = '18', color = 'white' }) => (
	<svg
		width={width}
		height={height}
		viewBox='0 0 18 18'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M6.75 5.25C9.6525 5.25 12 7.77 12 10.875L12.84 11.5725L13.335 11.985C13.755 12.3375 13.665 13.0125 13.1625 13.245L10.95 14.25C9.98998 15.615 8.4675 16.5 6.75 16.5C3.8475 16.5 1.5 13.98 1.5 10.875C1.5 8.61 2.75251 6.6525 4.55251 5.775C5.22001 5.4375 5.9625 5.25 6.75 5.25Z'
			stroke={color}
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.64522 1.49977C11.3627 1.49977 12.8852 2.38477 13.8452 3.74977L16.0577 4.75477C16.5602 4.98727 16.6577 5.66227 16.2302 6.01477L14.8952 7.12477C14.8952 8.93977 14.0927 10.5598 12.8402 11.5723L12.0002 10.8748C12.0002 7.76977 9.65273 5.24977 6.75023 5.24977C5.96273 5.24977 5.22023 5.43727 4.55273 5.77477C5.11523 3.32227 7.18522 1.49977 9.64522 1.49977Z'
			stroke={color}
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.75 12.75V9'
			stroke={color}
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);

export default MessagesIcon;
