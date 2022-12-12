import * as React from 'react';
import { HomeLayout } from '../src/core/layout/HomeLayout';
import { locales } from '../src/locales';
import { Home } from '../src/screens/home';

interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = () => {
    return (
        <HomeLayout locale="en">
            <Home data={locales.en} />
        </HomeLayout>
    );
};

export default HomePage;
