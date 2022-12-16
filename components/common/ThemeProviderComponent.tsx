import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../styles/global';

const ThemeProviderComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default ThemeProviderComponent;
