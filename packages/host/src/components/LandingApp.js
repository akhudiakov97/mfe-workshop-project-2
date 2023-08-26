import {mount} from 'landing/LandingApp';

import React, {useRef, useEffect} from 'react';

export const LandingApp = ()=> {
    const ref = useRef(null);

    useEffect(()=>{
        mount(ref.current);
    }, []);

    return <div ref={ref}/>
}

export default LandingApp;