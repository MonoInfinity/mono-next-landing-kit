import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { Provider } from 'react-redux';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { store } from '../src/core/store';
import { AutoLoginWrapper, MainFooter } from '../src/core/components';
const queryClient = new QueryClient();
import { ThemeProvider } from 'next-themes';
import { MainNavBar } from '../src/core/components/navbars';
import BackgroundLayout from '../src/core/components/layouts/BackgroundLayout';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-CWJBFB8XNE" />
            <Script type="text/javascript" src="/static/js/google.script.js" />
            <Provider store={store}>
                <AutoLoginWrapper>
                    <QueryClientProvider client={queryClient}>
                        <ThemeProvider attribute="class">
                            <BackgroundLayout>
                                <Component {...pageProps} />
                            </BackgroundLayout>
                        </ThemeProvider>
                    </QueryClientProvider>
                </AutoLoginWrapper>
                <ToastContainer />
            </Provider>
        </>
    );
}

export default MyApp;
