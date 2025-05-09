export const getAppointments = () => {
    return JSON.parse(localStorage.getItem('appointments') || []);
}

export const saveAppointments = (appointments) => {
    const existingAppointments = getAppointments();
    localStorage.setItem('appointments', JSON.stringify([...existingAppointments, appointments]));
}

export const deleteAppointments = (appointmentId) => {
    const existingAppointments = getAppointments();
    const updatedAppointments = existingAppointments.filter(appointment => appointment.id !== appointmentId);
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
}

export const createAppointment = (lawyer) => {
    return {
        id: Date.now(),
        lawyerLicense: lawyer?.license_number,
        lawyerName: lawyer?.name,
        lawyerExperience: lawyer?.experience,
        lawyerSpeciality: lawyer?.speciality,
        fee: lawyer?.fee,
        date: new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }),
        time: new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        }),
        bookedOn: new Date().toISOString(),
    }
}