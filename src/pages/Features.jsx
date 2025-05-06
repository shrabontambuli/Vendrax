import React, { useEffect } from 'react';
import FeaturesBanner from '../components/Features/FeaturesBanner';
import VendraxOffers from '../components/Features/VendraxOffers';
import AcceptPayments from '../components/Features/AcceptPayments';
import Smartphone from '../components/Features/Smartphone';
import Minimize from '../components/Minimize';
import Comprehensive from '../components/Features/Comprehensive';

const Features = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
      }, []);
    return (
        <>
            {/* <FeaturesBanner/> */}
            {/* <VendraxOffers/> */}
            {/* <AcceptPayments/> */}
            <Smartphone/>
            {/* <Comprehensive/> */}
            {/* <Minimize/> */}
        </>
    );
};

export default Features;