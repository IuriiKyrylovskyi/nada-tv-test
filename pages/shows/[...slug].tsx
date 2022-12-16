import { GetStaticProps, NextPage } from 'next';
import Image from 'next/legacy/image';
import styled from 'styled-components';

import fetchShow from '../../helpers/fetchShow';
import imageLoader from '../../helpers/imageLoader';
import { ICast, IShow } from '../../api/main';

import Layout from '../../components/common/Layout';
import DefaultImage from '../../components/common/DefaultImage';
import MarkdownComponent from '../../components/common/MarkdownComponent';
import Stars from '../../components/common/Stars';
import ContentContainer from '../../components/common/ContentContainer';
import Meta from '../../components/common/Meta';

interface IProps {
	show: IShow;
	cast: ICast[];
}

export const getStaticProps: GetStaticProps = async (context) => {
	const revalidateInterval = 600;

	const showId = context.params!.slug as string;

	const show = await fetchShow(showId);

	if (!show) {
		return {
			notFound: true,
			revalidate: revalidateInterval,
		};
	}

	return {
		props: {
			show,
		},
		revalidate: revalidateInterval,
	};
};

export const getStaticPaths = async () => {
	return {
		fallback: 'blocking',
		paths: [],
	};
};

const ShowPage: NextPage<IProps> = ({ show }) => {
	const rating = !!show?.rating?.average ? (show.rating.average / 2).toFixed(1) : 0;

	return (
		<>
			<Meta title={show.name} />
			<Layout>
				<TopWrap>
					<ContentContainer>
						<TopBlock>
							<ImageWrap>
								{show.image?.original ? (
									<Image
										loader={imageLoader}
										src={show.image.original}
										alt={show.name}
										layout='fill'
										objectFit='cover'
										blurDataURL={imageLoader({
											src: show.image.original,
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
									<Stars rating={+rating} isBlue />
									<Rate>{`${rating}/5`}</Rate>
								</Rating>
								<Title>{show.name}</Title>
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
						{show._embedded.cast?.length > 0 && (
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
			</Layout>
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
	flex: 0 0 20%;
	width: 20%;
	min-width: 230px;
	position: relative;
	aspect-ratio: 2/3;
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

export default ShowPage;
