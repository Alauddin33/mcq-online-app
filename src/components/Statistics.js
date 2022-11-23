import React, { useContext } from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { TopicContext } from './Main';

const Statistics = () => {
    const { data } = useContext(TopicContext);

    return (
        <div className=' w-full md:w-1/2 mx-auto my-24'>
            <LineChart width={500} height={400} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                <Tooltip></Tooltip>
            </LineChart>

            <p className='text-center py-10 '>Graph: Quiz Statistics Chart</p>
        </div>
    );
};

export default Statistics;