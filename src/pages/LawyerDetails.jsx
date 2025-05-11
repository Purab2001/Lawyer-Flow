import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { PiTrademarkRegistered } from "react-icons/pi";
import Badge from '../ui/Badge';
import BookAppointment from '../components/BookAppointment';

const LawyerDetails = () => {
    const data = useLoaderData();
    const { license_number } = useParams();
    const lawyer = data.find(lawyer => lawyer.license_number === license_number);

    if (!lawyer) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="text-center space-y-4">
                    <h2 className="text-2xl font-bold text-gray-800">Lawyer Not Found</h2>
                    <p className="text-gray-600">The lawyer with license number {license_number} could not be found.</p>
                </div>
            </div>
        );
    }

    const { image, name, speciality, experience, availability, fee } = lawyer;

    return (
        <div className='space-y-8 py-8'>
            {/* Header section */}
            <div className="bg-[#f3f3f3] rounded-xl border border-gray-200 py-6 px-6 sm:py-8 sm:px-8 md:py-16 md:px-22 text-center space-y-5">
                <h1 className="font-extrabold text-2xl md:text-3xl">Lawyer's Profile Details</h1>
                <p className="font-medium text-base text-gray-700">Our lawyer profiles provide comprehensive information about each professional's expertise, experience, and availability. Review the details below to learn more about this attorney's qualifications, specialties, and schedule before making your appointment.</p>
            </div>
            {/* Lawyer details section */}
            <div className="relative flex flex-col md:flex-row w-full border border-gray-200 rounded-lg">
                <div className="relative p-6 md:w-2/5 shrink-0 overflow-hidden">
                    <img
                        src={image}
                        alt={`${name}'s profile`}
                        className="h-64 lg:h-96 w-full rounded-md md:rounded-lg object-contain shadow-lg"
                    />
                </div>
                <div className="p-6 flex flex-col justify-center space-y-3 lg:space-y-6">
                    <div>
                        <Badge text={`${experience}+ Experience`} color="[#176AE5]" />
                    </div>
                    <h4 className="font-bold text-2xl md:text-3xl">
                        {name}
                    </h4>
                    <div className='flex'>
                        <p className='font-medium text-gray-600 mr-6'>{speciality}</p>
                        <p className='font-medium text-gray-600 flex items-center'><PiTrademarkRegistered size={20} className='mr-2' /> License No: {license_number}</p>
                    </div>
                    <div className="text-gray-700 flex items-center">
                        <span className="mr-2 text-base font-bold">Availability:</span>
{typeof availability === 'string' && availability.length > 0 ? (
    <div className="flex flex-wrap gap-2">
        {availability.split(/,|\s*[-&]\s*|\s+/).map(day => (
            day && <Badge key={day} text={day} color="green-500" />
        ))}
    </div>
) : (
    <Badge text="Not available" color="red-500" />
)}
                    </div>
                    <p className='text-gray-700 font-bold'>Consultation Fee: <span className='text-[#0EA106]'>{fee}</span></p>
                </div>
            </div>
            {/* Book Appointment button */}
            <BookAppointment lawyer={lawyer} />
        </div>
    );
};

export default LawyerDetails;
