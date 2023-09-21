import React from 'react';
import {Hero} from "widgets/Hero";
import {ServiceList} from "widgets/ServiceList";
import {Navbar} from "widgets/Navbar";
import {PopularServices} from "widgets/PopularServices";
import {MapSection} from "widgets/MapSection";
import {PhotoSection} from "widgets/PhotoSection";
import {Footer} from "widgets/Footer";

const MainPage = () => {
    return (
        <>
            <Navbar />
            <Hero/>
            <PopularServices/>
            <MapSection/>
            <PhotoSection/>
            <Footer/>
        </>
    );
};

export default MainPage;