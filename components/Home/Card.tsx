import React from 'react';
import Link from 'next/link';
import Image from 'next/legacy/image';
import styled from 'styled-components';

import { IScheduleItem } from '../../api/main';
import imageLoader from '../../helpers/imageLoader';

import DefaultImage from '../common/DefaultImage';
import MarkdownComponent from '../common/MarkdownComponent';
import Stars from '../common/Stars';

const Card: React.FC<{ item: IScheduleItem }> = ({ item: { show } }) => {
	return (
		<Wrap>
			<Link href={`/shows/${show.id}`}>
				<ImageBlock>
					{show.image?.medium ? (
						<Image
							loader={imageLoader}
							src={show.image.medium}
							alt={show.name}
							objectFit='cover'
							layout='fill'
							blurDataURL={imageLoader({
								src: show.image.medium,
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
						<Stars size='10' rating={show.rating.average || 0} />
					</Rating>
					<Title data-testid={`item-title-${show.id}`}>{show.name}</Title>
					<Summary>
						<MarkdownComponent data={show.summary} isEllipsis />
					</Summary>
				</InfoBlock>
			</Link>
		</Wrap>
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
		max-width: 100%;
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

const Rating = styled.div`
	margin: 0 0 10px 0;
`;
const Title = styled.h3`
	flex: 1;
	margin-bottom: 10px;
`;
const Summary = styled.div`
	flex: 1;
`;

export default Card;
