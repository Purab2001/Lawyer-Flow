import React, { useEffect, useState } from 'react';
import LawyerCard from './LawyerCard';

const LawyerContainer = ({data}) => {
    const [visibleLawyers, setVisibleLawyers] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        if (showAll) {
            setVisibleLawyers(data);
        } else {
            setVisibleLawyers(data.slice(0, 6));
        }
    }, [data, showAll]);

    const handleToggleLawyers = () => {
        setShowAll((prev) => !prev);
        if (!showAll) {
            window.scrollTo({
                top: 700,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className='py-24 space-y-5'>
            <h1 className='font-extrabold text-3xl md:text-4xl text-center'>Our Best Lawyers</h1>
            <p className='text-sm md:text-base text-center text-gray-700'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine <br /> checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-14 my-8'>
                    {visibleLawyers.map((data) => (<LawyerCard key={data.license_number} data={data} />))}
                </div>
                <div className="flex justify-center">
                    <button
                        onClick={handleToggleLawyers}
                        className="relative flex items-center justify-center px-5 py-3 overflow-hidden font-medium transition-all bg-green-600 rounded-full hover:bg-white group cursor-pointer"
                        aria-label={showAll ? 'Show less lawyers' : 'Show all lawyers'}
                    >
                        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                        <span className="relative text-white font-medium text-medium transition-colors duration-200 ease-in-out group-hover:text-green-600">
                            {showAll ? 'Show Less Lawyers' : 'Show All Lawyers'}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LawyerContainer;