import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import AppointmentCard from '../components/AppointmentCard';
import { getAppointments, deleteAppointments } from '../utility/utility';
import { Link } from 'react-router';
import AppointmentChart from '../components/AppointmentChart';

const showToast = (message, type = 'success') => {
    toast[type](message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
    });
};

const Bookings = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        setAppointments(getAppointments());
    }, []);

    const handleCancel = (id, name) => {
        deleteAppointments(id);
        setAppointments(getAppointments());
        showToast(`Appointment with ${name} cancelled!`, 'success');
    };

    return (
        <div>
            <div></div>
            {appointments.length === 0 ? (
                <div aria-label="No appointments" className='my-16'>
                    <h1 className="text-center font-extrabold text-2xl sm:text-3xl md:text-4xl">No Appointments Yet</h1>
                    <p className="text-center font-medium text-sm sm:text-base md:text-lg text-gray-700 my-4">
                        You haven't booked any appointments. Browse our doctors to find the right specialist for your needs.
                    </p>
                    <div className="flex justify-center mt-6 sm:mt-8">
                        <Link
                            to="/"
                            className="relative cursor-pointer items-center justify-center px-6 sm:px-8 py-2 sm:py-3 overflow-hidden font-medium transition-all bg-green-600 rounded-full hover:bg-white group inline-block"
                        >
                            <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                            <span className="relative text-white transition-colors duration-200 ease-in-out group-hover:text-green-600">
                                Book Appointment Now
                            </span>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className='space-y-8 py-8'>
                    <div className="flex justify-center w-full h-[400px] mb-16 border border-gray-200 rounded-xl">
                        <AppointmentChart appointments={appointments} />
                    </div>
                    <h1 className='text-center font-extrabold text-3xl md:text-4xl'>Today's Appointments</h1>
                    <p className='text-center text-gray-700'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
                    {appointments.map(app => (
                        <AppointmentCard
                            key={app.id}
                            appointments={app}
                            onCancel={handleCancel}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Bookings;