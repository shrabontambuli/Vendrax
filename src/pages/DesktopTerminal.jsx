import React, { useEffect } from 'react';
import DesktopTerminalBanner from '../components/Services/DesktopTerminal/DesktopTerminalBanner';

const DesktopTerminal = () => {
     useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
      }, []);
    return (
        <>
            <DesktopTerminalBanner/>
        </>
    );
};

export default DesktopTerminal;