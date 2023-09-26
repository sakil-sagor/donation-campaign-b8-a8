import React, { useState } from 'react';
import { useLoaderData } from "react-router-dom";
import { Cell, Pie, PieChart } from 'recharts';
import { getStoredData } from "../../utility/localStorage";


const Statistics = () => {

    const [cards, setCards] = useState([])
    const allCard = useLoaderData();
    const totaldonationCard = getStoredData();
    const totalDonationParcentage = ((totaldonationCard.length * 100) / allCard.data.length);
    const totalCard = 100 - totalDonationParcentage;
    console.log(totalCard, totalDonationParcentage)
    let data = [
        { name: 'Group A', value: totalCard },
        { name: 'Group B', value: totalDonationParcentage },
    ]
    const COLORS = ['#0088FE', '#00C49F',];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <div className='container mx-auto px-2 h-screen'>
            <div className="py-12 flex flex-col items-center">

                <PieChart width={375} height={375}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={160}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
                <div className='md:flex  md:space-x-6'>
                    <div className='flex mb-4'>
                        <span className='text-[#0088FE] font-bold mr-2'>Total Donation</span>
                        <div className='px-8 bg-[#0088FE] py-0 rounded'></div>
                    </div>
                    <div className='flex'>
                        <span className='text-[#00C49F] font-bold mr-2'>Your Donation</span>
                        <div className='px-8 bg-[#00C49F] py-0 rounded'></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Statistics;