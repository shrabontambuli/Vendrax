import React, { useEffect } from 'react';
import ResellerBanner from '../components/Partnership/Reseller/ResellerBanner';

const Reseller = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
      }, []);
    return (
        <>
          <ResellerBanner/>  
        </>
    );
};

export default Reseller;