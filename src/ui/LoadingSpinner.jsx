import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

const LoadingSpinner = ({children}) => {
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [location.pathname]);

    if (loading) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <span className="loading loading-bars loading-xl"></span>
            </div>
        );
    }

    return children;
};

export default LoadingSpinner;