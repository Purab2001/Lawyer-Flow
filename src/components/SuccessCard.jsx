import React from 'react';
import CountUp from 'react-countup';

const SuccessCard = ({ image, alt, count, text, isVisible }) => {
    return (
        <div className='space-y-4 bg-[#F3F3F3] border border-gray-300 p-6 sm:p-8 rounded-xl'>
            <img src={image} alt={alt} loading='lazy' />
            <h2 className='font-extrabold text-3xl sm:text-4xl md:text-5xl'>
                {isVisible ? (<CountUp end={count} suffix='+' duration={4} />)
                    : (<span>0+</span>)}
            </h2>
            <p className='font-semibold text-lg sm:text-xl text-gray-600'>{text}</p>
        </div>
    );
};

export default SuccessCard;