import React from 'react';
import Image from 'next/legacy/image';

import styled from 'styled-components';

import { IScheduleItem } from '../../api/main';
import imageLoader from '../../helpers/imageLoader';

import DefaultImage from '../common/DefaultImage';
import MarkdownComponent from '../common/MarkdownComponent';
import Link from 'next/link';
import Stars from '../common/Stars';

const Card: React.FC<{ item: IScheduleItem }> = ({ item: { show } }) => {
	return (
		<Link href={`/shows/${show.id}`}>
			<Wrap>
				<ImageBlock>
					{show.image?.original ? (
						<Image
							loader={imageLoader}
							src={show.image.original}
							alt={show.name}
							objectFit='cover'
							layout='fill'
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
					<Rating>
						<Stars size='10' rating={show.rating.average} />
					</Rating>
					<Title>{show.name}</Title>
					<Summary>
						<MarkdownComponent data={show.summary} isEllipsis />
					</Summary>
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
	background: ${({ theme }) => theme.colors.White};
	overflow: hidden;
	transition: all 0.3s ease;

	@media (hover: hover) {
		&:hover {
			box-shadow: 0 0 25px rgba(0, 0, 0, 0.4);
			transform: scale(1.05);
		}
	}
`;

const ImageBlock = styled.div`
	width: 100%;
	position: relative;
	overflow: hidden;
	aspect-ratio: 2/3;

	& img {
		transition: all 0.3s ease;
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
	/* max-height: 200px; */
`;

const Rating = styled.div`
	margin: 0 0 10px 0;
`;
const Title = styled.h3`
	flex: 1;
`;
const Summary = styled.div`
	flex: 1;
`;

export default Card;
