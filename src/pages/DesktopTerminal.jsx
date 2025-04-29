import React, { useEffect } from 'react';
import DesktopTerminalBanner from '../components/Services/DesktopTerminal/DesktopTerminalBanner';
import TerminalMachines from '../components/Services/DesktopTerminal/TerminalMachines';
import Minimize from '../components/Minimize';

const DesktopTerminal = () => {
     useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
      }, []);
    return (
        <>
            <DesktopTerminalBanner/>
            <TerminalMachines/>
            <Minimize/>
        </>
    );
};

export default DesktopTerminal;