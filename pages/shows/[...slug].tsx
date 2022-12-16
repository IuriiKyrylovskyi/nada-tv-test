import { GetStaticProps, NextPage } from 'next';
import Image from 'next/legacy/image';
import styled from 'styled-components';

import fetchShow from '../../helpers/fetchShow';
import imageLoader from '../../helpers/imageLoader';
import fetchCast from '../../helpers/fetchCast';
import { ICast, IShow } from '../../api/main';

import Layout from '../../components/common/Layout';
import DefaultImage from '../../components/common/DefaultImage';
import MarkdownComponent from '../../components/common/MarkdownComponent';
import Stars from '../../components/common/Stars';

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

	const cast = await fetchCast(showId);

	return {
		props: {
			show,
			cast,
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

const ShowPage: NextPage<IProps> = ({ show, cast }) => {
	const rating = !!show?.rating?.average ? (show.rating.average / 2).toFixed(1) : 0;

	return (
		<>
			<Layout>
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
							<Stars rating={+rating} />
							<Rate>{`${rating}/5`}</Rate>
						</Rating>
						<Title>{show.name}</Title>
						<Summary>
							<MarkdownComponent data={show.summary} />
						</Summary>
					</TitleWrap>
				</TopBlock>
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
					{cast?.length > 0 && (
						<Column>
							<BlockTitle>Starring</BlockTitle>
							{cast.map(({ person, character }) => (
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
									<Label>{person.name}</Label>
									<Text>{character.name}</Text>
								</Row>
							))}
						</Column>
					)}
				</InfoBlock>
			</Layout>
		</>
	);
};

const TopBlock = styled.div`
	display: flex;
`;
const InfoBlock = styled.div`
	display: flex;
	gap: 40px;
	margin: 60px 0 120px;
`;
const ImageWrap = styled.div`
	flex: 0 0 20%;
	width: 20%;
	position: relative;
	aspect-ratio: 2/3;
	overflow: hidden;
`;
const TitleWrap = styled.div`
	padding: 40px;
`;
const Rating = styled.div`
	display: flex;
	align-items: center;
`;
const Title = styled.h1`
	margin: 20px 0 40px;
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
`;

export default ShowPage;
