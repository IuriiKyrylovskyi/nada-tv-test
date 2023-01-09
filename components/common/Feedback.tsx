import React from 'react';
import styled from 'styled-components';
import MessagesIcon from '../icons/MessagesIcon';

const Feedback: React.FC = () => (
	<Wrap id='my_custom_link'>
		<Container>
			<MessagesIcon />
			<Text>Feedback</Text>
		</Container>
	</Wrap>
);

const Wrap = styled.div`
	position: fixed;
	top: 190px;
	right: -40px;
	width: 118px;
	height: 38px;
	padding: 12px 15px;
	background: #145dca;
	box-shadow: -10px 14px 34px rgba(3, 49, 75, 0.26);
	border-radius: 10px 10px 0px 0px;
	cursor: pointer;
	transition: all 0.3s ease;
	transform: rotate(-90deg);
	z-index: 100;

	@media (hover: hover) {
		&:hover {
			background: #306cc5;
		}
	}
`;

const Container = styled.div`
	display: flex;

	& svg {
		transform: rotate(90deg);
	}
`;

const Text = styled.p`
	font-weight: 500;
	font-size: 14px;
	line-height: 100%;
	letter-spacing: -0.03em;
	color: #ffffff;
	margin-left: 9px;
`;

export default Feedback;
