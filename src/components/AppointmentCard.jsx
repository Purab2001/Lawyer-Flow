import React from 'react';

const AppointmentCard = ({ appointments, onCancel }) => (
    <div className="rounded-2xl p-6 sm:p-8 md:p-10 space-y-5 border border-gray-200">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
                <h3 className="font-bold text-lg sm:text-xl">{appointments.lawyerName}</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                    {appointments.lawyerSpeciality}
                </p>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
                Appointment Fee: {appointments.fee} + Vat
            </p>
        </div>
        <div className="border-b-2 border-dashed border-gray-300"></div>
        <button
            onClick={() => onCancel(appointments.id, appointments.lawyerName)}
            className="relative cursor-pointer w-full items-center justify-center px-4 sm:px-5 py-2 sm:py-3 overflow-hidden font-medium transition-all bg-red-600 rounded-full hover:bg-white group"
            aria-label={`Cancel appointment with ${appointments.lawyerName}`}
        >
            <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
            <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-red-600">
                Cancel Appointment
            </span>
        </button>
    </div>
);

export default AppointmentCard;