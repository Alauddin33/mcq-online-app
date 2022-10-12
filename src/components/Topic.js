import React from 'react';
import { Link } from 'react-router-dom';

const topic = ({ topic }) => {
    console.log(topic)
    const { name, logo, total, id } = topic
    return (
        <div className='mt-6'>
            <div className="max-w-xs  mx-auto p-3 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50 border">
                <img src={logo} alt="" className=" bg-zinc-700 object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">No of Quiz: {total} </span>
                    <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
                    <Link to='/quiz' rel="noopener noreferrer" aria-label="Back to homepage" className="flex items-center px-6 text-3xl text-violet-800 py2 bg-blue-200 rounded-sm">Start Practice </Link>
                </div>

            </div>
        </div>
    );
};

export default topic;