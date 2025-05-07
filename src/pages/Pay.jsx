import React, { useEffect } from 'react';
import PayBanner from '../components/Services/Pay/PayBanner';
import PaymentMethod from '../components/Services/Pay/PaymentMethod';
import Turnaround from '../components/Services/Pay/Turnaround';
import Minimize from '../components/Minimize';

const Pay = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
      }, []);
    return (
        <>
            {/* <PayBanner/> */}
            <PaymentMethod/>
            <Turnaround/>
            {/* <Minimize/> */}
        </>
    );
};

export default Pay;