import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from "@docusaurus/Link";

type FeatureItem = {
    title: string;
    image: string;
    link: string;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'BedWars1058',
        image: '/img/plugins/bedwars/logo_square.png',
        link: '/docs/BedWars1058/',
        description: (
            <>
                The most famous Minecraft Java Edition Plug-in for BedWars. Born in 2017 and maintained by me and the
                community.
            </>
        ),
    },
    {
        title: 'BedWarsProxy',
        image: '/img/plugins/bedwars/logo_square.png',
        link: '/docs/BedWarsProxy',
        description: (
            <>
                Scale your bedwars server by using multiple BedWars1058 nodes and lobbies. This is a Java Edition
                Plug-in for large servers.
            </>
        ),
    }
];

function Feature({title, image, description, link}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <Link to={link}>
                <div className="text--center">
                    <img className={styles.featureSvg} alt={title} src={image}/>
                </div>
            </Link>
            <div className="text--center padding-horiz--md">
                <Link to={link}><h3>{title}</h3></Link>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
