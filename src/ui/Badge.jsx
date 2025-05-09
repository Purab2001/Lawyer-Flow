import React from 'react';

const Badge = ({ text, color, className }) => {
    const colorClasses = {
        'green-500': 'bg-[#09982F]/10 text-[#09982F] border-[#09982F]/20',
        'red-500': 'bg-red-500/10 text-red-500 border-red-500/20',
        '[#176AE5]': 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    };

    const badgeColorClass = colorClasses[color] || 'bg-gray-500/10 text-gray-500 border-gray-500/20';

    return (
        <span className={`${badgeColorClass} py-1 px-2 rounded-full text-xs font-medium border ${className}`}>
            {text}
        </span>
    );
};

export default Badge;