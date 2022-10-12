import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { Provider } from 'react-redux';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { store } from '../src/core/store';
import { AutoLoginWrapper, ProgressLoadingBar } from '../src/core/components';
import { ToastContainer } from 'react-toastify';
const queryClient = new QueryClient();

import { ProgressBarProvider } from '../src/core/contexts';
import { MainNavBar } from '../src/core/components/navbars';
import BackgroundLayout from '../src/core/components/layouts/BackgroundLayout';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FEMBDB700Z" />
            <Script type="text/javascript" src="/static/js/google.script.js" />
            <Provider store={store}>
                <AutoLoginWrapper>
                    <QueryClientProvider client={queryClient}>
                        <ToastContainer />
                        <ProgressBarProvider>
                            <BackgroundLayout>
                                <ProgressLoadingBar />
                                <MainNavBar />
                                <Component {...pageProps} />
                            </BackgroundLayout>
                        </ProgressBarProvider>
                    </QueryClientProvider>
                </AutoLoginWrapper>
            </Provider>
        </>
    );
}

export default MyApp;
