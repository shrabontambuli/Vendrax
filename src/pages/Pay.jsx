import React, { useEffect } from 'react';
import PayBanner from '../components/Services/Pay/PayBanner';

const Pay = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
      }, []);
    return (
        <>
            <PayBanner/>
        </>
    );
};

export default Pay;