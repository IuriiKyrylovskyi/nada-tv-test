import React from 'react';
import Image from 'next/legacy/image';
import styled from 'styled-components';

import imageLoader from '../../helpers/imageLoader';
import { IShow } from '../../api/main';

import DefaultImage from '../../components/common/DefaultImage';
import MarkdownComponent from '../../components/common/MarkdownComponent';
import Stars from '../../components/common/Stars';
import ContentContainer from '../../components/common/ContentContainer';

interface IProps {
	show: IShow;
	id?: number;
}

const Show: React.FC<IProps> = ({ show }) => {
	const image = show?.image?.original || show?.image?.medium;

	return (
		<>
			<TopWrap>
				<ContentContainer>
					<TopBlock>
						<ImageWrap>
							{!!image ? (
								<Image
									loader={imageLoader}
									src={image}
									alt={show.name}
									layout='fill'
									objectFit='cover'
									blurDataURL={imageLoader({
										src: image,
										quality: 15,
									})}
									placeholder='blur'
								/>
							) : (
								<DefaultImage />
							)}
						</ImageWrap>
						<TitleWrap>
							<Rating>
								<Stars rating={show.rating.average || 0} isBlue />
								<Rate data-testid={`rating-${show.rating.average}`}>{`${
									show.rating.average ? (show.rating.average / 2).toFixed(1) : 0
								}/5`}</Rate>
							</Rating>
							<Title data-testid={`name-${show.id}`}>{show.name}</Title>
							<Summary>
								<MarkdownComponent data={show.summary} />
							</Summary>
						</TitleWrap>
					</TopBlock>
				</ContentContainer>
			</TopWrap>
			<ContentContainer>
				<InfoBlock>
					<Column>
						<BlockTitle>Show Info</BlockTitle>
						{show.webChannel?.name && (
							<Row>
								<Label>Streamed on</Label> <Text>{show.webChannel.name}</Text>
							</Row>
						)}
						{show.schedule?.days?.length > 0 && (
							<Row>
								<Label>Schedule</Label>
								<Text>{show.schedule.days.join(', ')}</Text>
							</Row>
						)}
						{show.status && (
							<Row>
								<Label>Status</Label> <Text>{show.status}</Text>
							</Row>
						)}
						{show.genres?.length > 0 && (
							<Row>
								<Label>Genres</Label>
								<Text>{show.genres.join(', ')}</Text>
							</Row>
						)}
					</Column>
					{show._embedded && show._embedded.cast?.length > 0 && (
						<Column>
							<BlockTitle>Starring</BlockTitle>
							{show._embedded.cast.map(({ person, character }) => (
								<Row key={person.id}>
									<ProfileImage>
										{person.image?.medium ? (
											<Image
												loader={imageLoader}
												src={person.image?.medium}
												alt={person.name}
												layout='fill'
												objectFit='cover'
												blurDataURL={imageLoader({
													src: person.image?.medium,
													quality: 15,
												})}
												placeholder='blur'
											/>
										) : (
											<DefaultImage />
										)}
									</ProfileImage>
									<MobColumn>
										<Label>{person.name}</Label>
										<Text>{character.name}</Text>
									</MobColumn>
								</Row>
							))}
						</Column>
					)}
				</InfoBlock>
			</ContentContainer>
		</>
	);
};

const TopWrap = styled.div`
	background-color: ${({ theme }) => theme.colors.Yellow};
`;
const TopBlock = styled.div`
	display: flex;

	@media (max-width: 767px) {
		flex-direction: column;
	}
`;
const InfoBlock = styled.div`
	display: flex;
	gap: 40px;
	margin: 60px 0 120px;

	@media (max-width: 1100px) {
		flex-direction: column;
	}

	@media (max-width: 767px) {
		margin: 30px 0 60px;
	}
`;
const ImageWrap = styled.div`
	flex: 0 0 25%;
	width: 25%;
	min-width: 230px;
	position: relative;
	aspect-ratio: 2/3;
	max-height: 450px;
	overflow: hidden;
	transform: translateY(25px);

	@media (max-width: 767px) {
		transform: translateY(0px);
		flex: 0 0 100%;
		width: 100%;
	}
`;
const TitleWrap = styled.div`
	padding: 40px;

	@media (max-width: 767px) {
		padding: 20px 10px;
	}
`;
const Rating = styled.div`
	display: flex;
	align-items: center;
`;
const Title = styled.h1`
	margin: 20px 0 40px;

	@media (max-width: 767px) {
		font-size: 20px;
		margin: 20px 0;
	}
`;
const Summary = styled.div`
	display: flex;
	gap: 40px;
`;
const Column = styled.div`
	flex: 0 0 calc(50% - 20px);
`;
const Row = styled.div`
	display: flex;
	border-bottom: 1px solid ${({ theme }) => theme.colors.Black};
	padding: 10px 0;
	min-height: 72px;
`;
const MobColumn = styled.div`
	display: flex;

	@media (max-width: 500px) {
		flex-direction: column;
		justify-content: center;
	}
`;
const BlockTitle = styled.p`
	font-size: 22px;
	margin: 10px 0;

	@media (max-width: 767px) {
		font-size: 20px;
		margin: 0px 0 10px;
	}
`;
const Label = styled.div`
	flex: 0 0 200px;
	width: 200px;
	font-weight: 600;
	display: flex;
	align-items: center;
	margin-right: 20px;

	@media (max-width: 767px) {
		flex: 0 0 auto;
		width: auto;
		min-width: 100px;
	}
`;
const Text = styled.p`
	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.colors.Grey};
`;

const ProfileImage = styled.div`
	flex: 0 0 50px;
	width: 50px;
	aspect-ratio: 1/1;
	border-radius: 50%;
	overflow: hidden;
	position: relative;
	margin-right: 20px;
`;

const Rate = styled.p`
	font-size: 22px;
	padding-top: 5px;
	margin-left: 15px;

	@media (max-width: 767px) {
		font-size: 14px;
	}
`;

export default Show;
