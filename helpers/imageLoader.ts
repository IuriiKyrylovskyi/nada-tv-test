const imageLoader = ({ src, width = 200 }: any) => {	
	return `${src}?w=${width}&`;
};

export default imageLoader;
