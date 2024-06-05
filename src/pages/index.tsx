import React from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from '../components/HomepageFeatures';

export default function Home(): React.JSX.Element {
    //const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`andrei1058 wiki`}
            description="Documentation">
            {/*<HomepageHeader />*/}
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
