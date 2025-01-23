import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import { store } from '@/store';
import { theme } from '@/styles/theme';
import { GlobalStyle } from '@/styles/global';
import { AppRoutes } from '@/routes';

export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <HelmetProvider>
                    <ThemeProvider theme={theme}>
                        <GlobalStyle />
                        <AppRoutes />
                    </ThemeProvider>
                </HelmetProvider>
            </BrowserRouter>
        </Provider>
    );
};