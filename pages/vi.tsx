import * as React from 'react';
import { HomeLayout } from '../src/core/layout/HomeLayout';
import { locales } from '../src/locales';
import { Home } from '../src/screens/home';

interface HomeVNPageProps {}

const HomeVNPage: React.FunctionComponent<HomeVNPageProps> = () => {
    return (
        <HomeLayout locale="vi">
            <Home data={locales.vi} />
        </HomeLayout>
    );
};

export default HomeVNPage;
