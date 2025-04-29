import React from 'react';
import Hero from '../components/Hero';
import LawyerContainer from '../components/LawyerContainer';
import Success from '../components/Success';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Hero></Hero>
            <LawyerContainer data={data}></LawyerContainer>
            <Success></Success>
        </div>
    );
};

export default Home;