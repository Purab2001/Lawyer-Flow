import React from 'react';

const Badge = ({ text, color }) => {
    const colorClasses = {
        'green-500': 'bg-[#09982F]/10 text-[#09982F]',
        'red-500': 'bg-red-500/10 text-red-500',
        '[#176AE5]': 'bg-blue-500/10 text-blue-500',
    };

    const badgeColorClass = colorClasses[color] || 'bg-gray-500/10 text-gray-500';

    return (
        <span className={`${badgeColorClass} py-1 px-2 rounded-full text-xs font-medium`}>
            {text}
        </span>
    );
};

export default Badge;