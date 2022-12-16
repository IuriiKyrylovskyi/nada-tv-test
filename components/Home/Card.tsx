import React from 'react';
import Image from 'next/image';

import styled from 'styled-components';

import { IScheduleItem } from '../../api/main';
import imageLoader from '../../helpers/imageLoader';

import DefaultImage from '../common/DefaultImage';
import MarkdownComponent from '../common/MarkdownComponent';
import Link from 'next/link';

const Card: React.FC<{ item: IScheduleItem }> = ({ item: { show } }) => {
	console.log(show);

	return (
		<Link href={show.url}>
			<Wrap>
				<ImageBlock>
					{show.image?.original ? (
						<Image
							loader={imageLoader}
							src={show.image.original}
							alt={show.name}
							fill
							sizes='(max-width: 768px) 200px,
              (max-width: 1200px) 200px,
              200px'
							blurDataURL={imageLoader({
								src: show.image.original,
								quality: 15,
							})}
							placeholder='blur'
						/>
					) : (
						<DefaultImage />
					)}
				</ImageBlock>
				<InfoBlock>
					<Stars></Stars>
					<Title>{show.name}</Title>
					<Info>
						<MarkdownComponent data={show.summary} />
					</Info>
				</InfoBlock>
			</Wrap>
		</Link>
	);
};

const Wrap = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	cursor: pointer;
	box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
	border-radius: 3px;
	overflow: hidden;
	transition: all 0.5s ease;

	@media (max-width: 767px) {
	}
	@media (hover: hover) {
		&:hover {
			box-shadow: 0 0 25px rgba(0, 0, 0, 0.4);
		}
	}
`;

const ImageBlock = styled.div`
	width: 100%;
	position: relative;
	overflow: hidden;
	aspect-ratio: 2/3;

	& img {
		transition: all 0.5s ease;
	}

	& img:hover {
		transform: scale(1.1);
	}
`;

const InfoBlock = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px 10px;
	font-size: 14px;
`;

const Stars = styled.div``;
const Title = styled.h3`
	flex: 1;
`;
const Info = styled.div`
	flex: 1;
`;

export default Card;
