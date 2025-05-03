import React, { useEffect } from 'react';
import Collaborate from '../components/Partnerships/Collaborate';
import Resellers from '../components/Partnerships/Resellers';
import Agents from '../components/Partnerships/Agents';

const Partnership = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
    return (
        <>
          <Collaborate/>
          <Resellers/>
          <Agents/>  
        </>
    );
};

export default Partnership;