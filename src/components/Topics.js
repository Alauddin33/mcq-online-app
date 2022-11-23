import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/mcq-pref-format.png';
import { TopicContext } from './Main';




const Topics = () => {
    const { data } = useContext(TopicContext);

    return (

        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100 mt-10 ">
                <div className="flex flex-col mx-auto lg:flex-row">
                    <img src={img} alt="" className=" lg:w-1/2" />
                    <div className="flex flex-col items-center justify-center w-full lg:w-1/2 pl-5 mt-10 ">
                        <h2 className=" text-3xl font-semibold leading-none bg-violet-300 p-3 justify-center">Importance of perticipating quiz:</h2>
                        <p className="mt-4 mb-8 text-md bg-green-200 p-3">Online quizzes are a great way of assessing your knowledge. Various platforms conduct online quizzes related to several subjects and verticals. Quizzing is always engaging for anyone, irrespective of their age. It is an engaging way to gain knowledge. Therefore, quizzes must be included in the assessment schedule of every student.</p>
                    </div>
                </div>
            </section>

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
        </div>
    );
};

export default Topics;