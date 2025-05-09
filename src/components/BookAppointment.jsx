import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { createAppointment, deleteAppointments, getAppointments, saveAppointments } from '../utility/utility';
import { toast } from 'react-toastify';
import Badge from '../ui/Badge';
import { FiAlertCircle } from 'react-icons/fi';

const BookAppointment = ({ lawyer }) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = daysOfWeek[new Date().getDay()];
    const navigate = useNavigate();
    const [isBooked, setIsBooked] = useState(false);
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchedAppointments = getAppointments();
        setAppointments(fetchedAppointments);

        const existingAppointments = fetchedAppointments.find(appointment => appointment.lawyerLicense === lawyer?.license_number);
        if (existingAppointments) {
            setIsBooked(true);
        }
    }, [lawyer?.license_number]);

    const handleBookAppointment = () => {
        const appointment = createAppointment(lawyer);
        saveAppointments(appointment);

        toast.success(`Appointment scheduled with ${lawyer?.name} successfully!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });

        setIsBooked(true);

        setTimeout(() => {
            navigate('/bookings');
        }, 1500);

    }

    const handleCancelAppointment = () => {
        const existingAppointments = appointments.find(appointment => appointment.lawyerLicense === lawyer?.license_number);
        if (existingAppointments) {
            deleteAppointments(existingAppointments.id);
            toast.success(`Appointment cancelled with ${lawyer?.name} successfully!`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            setIsBooked(false);
        }
    }

    const handleAppointmentToggle = () => {
        if (isBooked) {
            handleCancelAppointment();
        } else {
            handleBookAppointment();
        }
    }

    const isAvailableToday = lawyer?.availability?.includes(today);

    return (
        <div className='border border-gray-200 rounded-lg p-6 space-y-4'>
            <h1 className='text-xl md:text-2xl font-bold text-center'>Book an Appointment</h1>
            <div className='border-t-2 border-gray-200 border-dashed'></div>
            <div className='flex justify-between items-center'>
                <p className='text-lg font-bold'>Availability</p>
                <div>
                    {isAvailableToday ? (
                        <Badge text="Available Today" color="green-500" className="py-2 px-4 text-base" />
                    ) : (
                        <Badge text="Unavailable" color="red-500" />
                    )}
                </div>
            </div>
            <div className='border-t-2 border-gray-200'></div>
            <span className="flex items-center justify-center text-yellow-700 bg-[#FFA000]/10 p-1 rounded-full">
                <FiAlertCircle className="mr-2 text-xl text-yellow-500" />
                Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
            </span>
            <button
                onClick={handleAppointmentToggle}
                disabled={!isAvailableToday}
                className={`relative cursor-pointer block items-center justify-start py-2 overflow-hidden font-medium transition-all rounded-full group w-full
                    ${isAvailableToday ? 'bg-green-600 hover:bg-white' : 'bg-gray-300 text-gray-400 cursor-not-allowed'}
                `}
                aria-label="Book appointment"
            >
                <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                <span className={`relative w-full text-left transition-colors duration-200 ease-in-out text-lg
                    ${isAvailableToday ? 'text-white group-hover:text-green-600' : 'text-gray-400'}
                `}>
                    Book Appointment
                </span>
            </button>
        </div>
    );
};

export default BookAppointment;