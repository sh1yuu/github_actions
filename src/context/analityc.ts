import { createContext } from 'react';
type AnalyticState = {
	yandexId?: number;
	googleId?: string;
};

export const Analytic = createContext<AnalyticState>({});
Analytic.displayName = 'AnalyticContext';
