import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/animation.json';

const NoSearch = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return(
        <Lottie options={defaultOptions} height={400} width={450}/>
    );
};

export default NoSearch;
