import React, { useMemo, useRef } from 'react';
import styled, { css } from 'styled-components';
import LoaderDots from './LoaderDots';

interface Props {
	maxPaginationPage: number;
	currentPage: number;
	setCurrentPage: (currentPage: number) => void;
	handlePagin: (currentPage: number) => void;
	isLoading: boolean;
}

const Pagination: React.FC<Props> = ({
	maxPaginationPage,
	currentPage,
	setCurrentPage,
	handlePagin,
	isLoading,
}) => {
	const firstRef = useRef(null);
	const lastRef = useRef(null);
	const prevFirstRef = useRef(null);
	const prevLastRef = useRef(null);

	const isLeftArrowActive = useMemo(
		() => currentPage > 1 && !isLoading,
		[currentPage, isLoading],
	);
	const isRightArrowActive = useMemo(
		() => maxPaginationPage > currentPage && !isLoading,
		[currentPage, isLoading, maxPaginationPage],
	);

	const handleArrowLeftClick = () => {
		if (isLeftArrowActive && !isLoading) {
			setCurrentPage(currentPage - 1);
			handlePagin(currentPage - 1);
		}
	};

	const handleArrowRightClick = () => {
		if (isRightArrowActive && !isLoading) {
			setCurrentPage(currentPage + 1);
			handlePagin(currentPage + 1);
		}
	};

	const handleEdgePaginClick = (edgeRef: React.RefObject<HTMLDivElement>) => {
		if (edgeRef.current && !isLoading) {
			const page = +edgeRef.current?.innerText;
			setCurrentPage(page);
			handlePagin(page);
		}
	};

	return (
		<PaginationStyled>
			<ArrowBox>
				{isLoading ? (
					<LoadingBox>
						<LoaderDots />
					</LoadingBox>
				) : (
					<ArrowsWrap>
						<ArrowLeft isActive={isLeftArrowActive} onClick={handleArrowLeftClick} />
					</ArrowsWrap>
				)}
			</ArrowBox>
			<Wrap>
				{currentPage !== 1 && (
					<>
						<PaginItem isDisabled={isLoading}>
							<Text ref={firstRef} onClick={() => handleEdgePaginClick(firstRef)}>
								1
							</Text>
						</PaginItem>
						{currentPage > 3 && <Text>...</Text>}
					</>
				)}
				{currentPage > 2 && (
					<PaginItem isDisabled={isLoading}>
						<Text ref={prevFirstRef} onClick={() => handleEdgePaginClick(prevFirstRef)}>
							{currentPage - 1}
						</Text>
					</PaginItem>
				)}
				<PaginItem isDisabled isActive>
					<Text>{currentPage}</Text>
				</PaginItem>
				{currentPage < maxPaginationPage - 1 && (
					<PaginItem isDisabled={isLoading}>
						<Text ref={prevLastRef} onClick={() => handleEdgePaginClick(prevLastRef)}>
							{currentPage + 1}
						</Text>
					</PaginItem>
				)}
				{currentPage !== maxPaginationPage && (
					<>
						{currentPage < maxPaginationPage - 2 && <Text>...</Text>}
						<PaginItem isDisabled={isLoading}>
							<Text ref={lastRef} onClick={() => handleEdgePaginClick(lastRef)}>
								{maxPaginationPage}
							</Text>
						</PaginItem>
					</>
				)}
			</Wrap>
			<ArrowBox>
				{isLoading ? (
					<LoadingBox>
						<LoaderDots />
					</LoadingBox>
				) : (
					<ArrowsWrap>
						<ArrowRight isActive={isRightArrowActive} onClick={handleArrowRightClick} />
					</ArrowsWrap>
				)}
			</ArrowBox>
		</PaginationStyled>
	);
};

const ArrowsWrap = styled.div`
	display: flex;
	align-items: center;
	column-gap: 10px;
`;

const LoadingBox = styled.div`
	display: flex;
	align-items: center;

	& > div > div {
		width: 6px;
		height: 6px;
		margin: 1px;
	}
`;

const PaginationStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	min-width: 128px;
	min-height: 38px;
	padding: 10px 0 0;
`;

const ArrowBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: 40px;
`;

const ArrowLeft = styled.span<{ isActive: boolean }>`
	width: 0;
	height: 0;
	border-top: 10px solid transparent;
	border-bottom: 10px solid transparent;

	border-right: 15px solid ${({ isActive }) => (isActive ? '#0066FF' : '#8b8b8b')};
	cursor: ${({ isActive }) => (isActive ? 'pointer' : 'default')};
`;

const ArrowRight = styled.span<{ isActive: boolean }>`
	width: 0;
	height: 0;
	border-top: 10px solid transparent;
	border-bottom: 10px solid transparent;

	border-left: 15px solid ${({ isActive }) => (isActive ? '#0066FF' : '#D9D9D9')};
	cursor: ${({ isActive }) => (isActive ? 'pointer' : 'default')};
`;

const Text = styled.div`
	font-size: 14px;
	line-height: 20px;
	text-align: center;
`;

const Wrap = styled.div`
	padding: 0px 15px;
	min-width: 100px;
	display: flex;
`;

const PaginItem = styled.div<{ isDisabled?: boolean; isActive?: boolean }>`
	flex: 1 0 auto;
	min-width: 20px;
	margin: 0 3px;
	padding: 0 3px;
	border: 1px solid ${({ theme }) => theme.colors.Grey};
	border-radius: 3px;
	background: ${({ theme }) => theme.colors.White};

	${({ isDisabled }) =>
		!isDisabled &&
		css`
			@media (hover: hover) {
				transition: all 0.3s ease;
				cursor: pointer;
				&:hover {
					background: ${({ theme }) => theme.colors.Blue};
					color: ${({ theme }) => theme.colors.White};
				}
			}
		`}

	${({ isActive }) =>
		isActive &&
		css`
			background: ${({ theme }) => theme.colors.Blue};
			color: ${({ theme }) => theme.colors.White};
		`}
`;

export default Pagination;
