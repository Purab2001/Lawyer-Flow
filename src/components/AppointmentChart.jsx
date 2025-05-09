import React, { useMemo } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) =>
    `M${x},${y + height}
    C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width},${y + height}
    Z`;

const TriangleBar = ({ fill, x, y, width, height }) => (
    <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />
);

const AppointmentChart = ({ appointments }) => {
    const chartData = useMemo(
        () =>
            appointments.map((appointment) => ({
                name: appointment.lawyerName,
                fee: Number(
                    String(appointment.fee)
                        .replace(/[^0-9.]/g, '')
                ) || 0,
            })),
        [appointments]
    );

    if (chartData.length === 0) {
        return (
            <div className="bg-white rounded-xl p-6 w-full h-[400px] flex items-center justify-center">
                <p className="text-gray-500">No appointment data available</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl p-2 md:p-6 w-full h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={chartData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="fee" shape={<TriangleBar />}>
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

AppointmentChart.propTypes = {
    appointments: PropTypes.arrayOf(
        PropTypes.shape({
            lawyerName: PropTypes.string.isRequired,
            fee: PropTypes.number.isRequired,
        })
    ).isRequired,
};

AppointmentChart.defaultProps = {
    appointments: [],
};

export default AppointmentChart;