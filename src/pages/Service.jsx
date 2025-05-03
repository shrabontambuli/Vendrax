import React, { useEffect } from 'react';
import Tailored from '../components/Service/Tailored';
import Restaurant from '../components/Service/Restaurant';
import Mobile from '../components/Service/Mobile';
import Desktop from '../components/Service/Desktop';

const Service = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
      }, []);
    return (
        <>
            <Tailored/>
            <Restaurant/>
            <Mobile/>
            <Desktop/>
        </>
    );
};

export default Service;