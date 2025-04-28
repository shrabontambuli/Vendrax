import React, { useEffect } from 'react';
import SubmitReferralForm from '../components/Partnership/SubmitReferral/SubmitReferralForm';

const SubmitReferral = () => {
    useEffect(() => {
            window.scrollTo({ top: 0, behavior: "auto" });
          }, []);
    return (
        <>
          <SubmitReferralForm/>  
        </>
    );
};

export default SubmitReferral;