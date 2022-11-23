import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TopicContext } from './Main';


const Topics = () => {
    const { data } = useContext(TopicContext);

    return (

        <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 my-16'>
            {
                data.map(d =>
                    <div
                        key={d.id}
                    ><div className="max-w-xs  mx-auto p-3 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50 border">
                            <img src={d.logo} alt="" className=" bg-zinc-700 object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                            <div className='flex flex-row items-center justify-between'>
                                <div className="mt-6 mb-2">
                                    <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">No of Quiz: {d.total} </span>
                                    <h2 className="text-xl font-semibold tracking-wide">{d.name}</h2>
                                </div>
                                <div>
                                    <Link to={`/quiz/${d.id}`}><button className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 font-medium text-white rounded-3xl">Start Practice</button></Link>
                                </div>
                            </div>

                        </div>
                    </div>
                )
            }
        </div>

    );
};

export default Topics;