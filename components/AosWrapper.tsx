'use client'

import React, { useEffect } from 'react';
import aos from 'aos';
import 'aos/dist/aos.css';


const AosWrapper = ({ children }: { children: React.ReactNode }): JSX.Element => {
    useEffect(() => {
        aos.init();
    }, []);

    return <>{children}</>
};

export default AosWrapper;