import styled from 'styled-components';

import Layout from '../components/common/Layout';

const HomePage = () => {
	return (
		<Layout>
			<Section>dhlfdshgsd</Section>
		</Layout>
	);
};

const Section = styled.section`
	margin: 80px 40px 100px;

	@media (max-width: 767px) {
		margin: 40px 10px 60px;
	}
`;

export default HomePage;
