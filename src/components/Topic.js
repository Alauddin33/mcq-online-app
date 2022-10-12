import React from 'react';


const topic = ({ topic, handleStartPracticeBtn }) => {
    // console.log(topic)
    const { name, logo, total, id } = topic

    return (
        <div className='mt-6'>
            <div className="max-w-xs  mx-auto p-3 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50 border">
                <img src={logo} alt="" className=" bg-zinc-700 object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className='flex flex-row items-center justify-between'>
                    <div className="mt-6 mb-2">
                        <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">No of Quiz: {total} </span>
                        <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
                    </div>
                    <div>
                        <button onClick={() => handleStartPracticeBtn(topic)} className=" bg-green-500 self-start px-5 py-3 text-lg font-medium rounded-3xl dark:bg-violet-400 dark:text-gray-900">Start Practice</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default topic;