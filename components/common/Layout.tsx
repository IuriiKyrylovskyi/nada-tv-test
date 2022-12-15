import ContentContainer from './ContentContainer';
import Footer from './Footer';
import Header from './Header';

interface IChildren {
	children: React.ReactNode;
}

const Layout: React.FC<IChildren> = ({ children }) => (
	<>
		<Header />
		<ContentContainer>{children}</ContentContainer>
		<Footer />
	</>
);

export default Layout;
