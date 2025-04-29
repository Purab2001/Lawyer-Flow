import React, { useEffect, useRef, useState } from 'react';
import successLawyer from '../assets/success-lawyer.png';
import successReview from '../assets/success-review.png';
import successClients from '../assets/success-clients.png';
import successStaffs from '../assets/success-staffs.png';
import SuccessCard from './SuccessCard';

const Success = () => {
    const [isInViewport, setIsInViewport] = useState(false);
    const sectionRef = useRef(null);

    const successStats = [
        { image: successLawyer, count: 199, text: "Total Lawyers", alt: "Lawyer icon" },
        { image: successReview, count: 467, text: "Total Reviews", alt: "Review icon" },
        { image: successClients, count: 1900, text: "Clients", alt: "Clients icon" },
        { image: successStaffs, count: 300, text: "Total Staffs", alt: "Staff icon" }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInViewport(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div ref={sectionRef} className='pb-6 md:pb-8 lg:pb-16 space-y-5' aria-labelledby="success-heading">
            <h1 id="success-heading" className='text-center font-extrabold text-3xl md:text-4xl'>We Provide Best Law Services</h1>
            <p className='text-center font-medium text-xs sm:text-sm md:text-base text-gray-700'>
                Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. 
            </p>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                {successStats.map((stat, index) => (
                    <SuccessCard
                        key={index}
                        image={stat.image}
                        alt={stat.alt}
                        count={stat.count}
                        text={stat.text}
                        isVisible={isInViewport}
                    />
                ))}
            </div>
        </div>
    );
};

export default Success;