import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../styles/global';

// const colors: IColors = {
// 	ZableVilot: '#3E0F3F',
// 	BackgroundCream: '#F9F8F4',
// 	LightCream: '#FBFAF6',
// 	MedicalBlue: '#A8EEF0',
// 	SoftBlueGrey: '#D4DFDF',
// 	MedicalGrey: '#F1F3F5',
// 	HighlightBlue: '#31f5e5',
// 	BurntOrange: '#D53E01',
// 	Orange: '#FF4F01',
// 	MedicalGreen: '#008489',
// 	MidnightGreen: '#032825',
// 	NaturalGreen: '#386A1E',
// 	PaleNaturalGreen: '#D9E7CC',
// 	LightNaturalGreen: '#F3F7E9',
// 	Black: '#25292b',

const ThemeProviderComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default ThemeProviderComponent;
