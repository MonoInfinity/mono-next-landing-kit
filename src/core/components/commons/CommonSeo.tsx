import { NextSeo } from 'next-seo';
import * as React from 'react';

interface CommonSeoProps {
    title: string;
}

export const CommonSeo: React.FC<CommonSeoProps> = ({ title }) => {
    return (
        <NextSeo
            title={title}
            description="Mono Infinity is software development company that provides software development services, web development, mobile app development, and digital marketing services"
            openGraph={{
                title,
                url: 'https://monoinfinity.net',
                description:
                    'Mono Infinity is software development company that provides software development services, web development, mobile app development, and digital marketing services',
                images: [
                    {
                        url: '/assets/images/banner.png',
                        width: 800,
                        height: 600,
                        alt: `${title}`,
                        type: 'image/png',
                    },
                ],
            }}
            twitter={{
                handle: '@handle',
                site: '@site',
                cardType: 'summary_large_image',
            }}
        />
    );
};
