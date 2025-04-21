import React from 'react';
import { Layout } from '../Layout';

export const CommunityPage: React.FC = () => {
    return (
        <Layout title="Canopy Systems Community">
            <div className="container mx-auto px-4 py-5 pt-20 mt-8 min-h-screen flex flex-col items-center justify-center flex-start">
                <h1 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl xl:test-6xl font-bold">
                    Community
                </h1>
                <br/>
                <h2 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl xl:test-6xl font-bold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 ml-2">Coming Soon!{""}</span>
                </h2>
                <div className="flex-grow"></div>
            </div>
        </Layout>
    )
}

export default CommunityPage;