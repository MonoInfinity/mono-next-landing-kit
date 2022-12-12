import * as React from 'react';
import { locales } from '../../locales';
import { CommonSeo, MainFooter } from '../components';
import { MainNavBar } from '../components/navbars';

interface HomeLayoutProps extends React.PropsWithChildren {
    locale: string;
}

export const HomeLayout: React.FunctionComponent<HomeLayoutProps> = ({ children, locale }) => {
    const data = React.useMemo(() => {
        if (locale === 'vi') {
            return locales.vi;
        }
        return locales.en;
    }, [locale]);

    return (
        <>
            <MainNavBar data={data} />
            <CommonSeo title="Mono Infinity" />
            {children}
            <MainFooter />
        </>
    );
};
