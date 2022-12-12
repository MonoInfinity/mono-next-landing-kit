import * as React from 'react';
import { HomeLayout } from '../src/core/layout/HomeLayout';
import { Home } from '../src/screens/home';
import { locales } from '../src/locales';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
    return (
        <HomeLayout locale="en">
            <Home data={locales.en} />
        </HomeLayout>
    );
};

export default HomePage;
