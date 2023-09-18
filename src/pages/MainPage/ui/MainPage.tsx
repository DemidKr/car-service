import React from 'react';
import {Hero} from "widgets/Hero";
import {ServiceList} from "widgets/ServiceList";
import {Navbar} from "widgets/Navbar";
import {PopularServices} from "widgets/PopularServices";
import {MapSection} from "widgets/MapSection";

const MainPage = () => {
    return (
        <>
            <Navbar />
            <Hero/>
            <PopularServices/>
            <MapSection/>
        </>
    );
};

export default MainPage;