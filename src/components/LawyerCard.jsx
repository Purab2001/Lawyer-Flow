import React from 'react';
import { PiTrademarkRegistered } from "react-icons/pi";
import Badge from '../ui/Badge';
import { Link } from 'react-router';


const LawyerCard = ({ data }) => {
    const { image, name, speciality, experience, license_number, availability } = data;

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = daysOfWeek[new Date().getDay()];
    const isAvailableToday = availability && availability.includes(today);


    return (
        <div className="card lg:card-side rounded-2xl border border-gray-200">
            <div className='p-6 flex justify-center items-center'>
                <div className="w-[160px] h-[160px] flex-shrink-0">
                    <img
                        className="rounded-xl w-[160px] h-[160px] object-cover border border-gray-200 shadow-lg"
                        src={image}
                        alt={`${name}'s profile`} />
                </div>
            </div>
            <div className="p-6 flex flex-col justify-center w-full">
                <div className="mb-2 flex gap-2 flex-wrap">
                    {isAvailableToday ? (
                        <Badge text="Available" color="green-500" />
                    ) : (
                        <Badge text="Unavailable" color="red-500" />
                    )}
                    <Badge text={`${experience}+ Experience`} color="[#176AE5]" />
                </div>
                <h2 className="font-extrabold text-xl mb-1">{name}</h2>
                <p className='font-medium text-base text-gray-700'>{speciality}</p>
                <p className='font-medium text-sm text-gray-700 flex items-center gap-1'><PiTrademarkRegistered size={18} />
                    License No: {license_number}</p>
                <div className="mt-2 w-full">
                    <Link to={`/lawyer-details/${license_number}`} className="block w-full">
                        <button className="w-full rounded-full border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors duration-300 py-2 px-4 font-bold text-sm cursor-pointer">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LawyerCard;