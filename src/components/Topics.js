import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/mcq-pref-format.png';
import { TopicContext } from './Main';

const Topics = () => {
    const { data } = useContext(TopicContext);
    console.log(data);

    return (

        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col mx-auto lg:flex-row">
                    <img src={img} alt="" className=" lg:w-1/2" />
                    <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
                        <h2 className="text-3xl font-semibold leading-none bg-violet-300 p-3">Importance of perticipating quiz:</h2>
                        <p className="mt-4 mb-8 text-md bg-green-200 p-3">Online quizzes are a great way of assessing your knowledge. Various platforms conduct online quizzes related to several subjects and verticals. Quizzing is always engaging for anyone, irrespective of their age. It is an engaging way to gain knowledge. Therefore, quizzes must be included in the assessment schedule of every student.</p>
                    </div>
                </div>
            </section>
            {
                data.map(d =>
                    <div key={d.id}>
                        <div className='mt-6'>
                            <div className="max-w-xs  mx-auto p-3 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50 border">
                                <img src={d.logo} alt="" className=" bg-zinc-700 object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                                <div className='flex flex-row items-center justify-between'>
                                    <div className="mt-6 mb-2">
                                        <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">No of Quiz: {d.total} </span>
                                        <h2 className="text-xl font-semibold tracking-wide">{d.name}</h2>
                                    </div>
                                    <div>
                                        <Link to={`/quiz/${d.id}`}><button className=" bg-green-500 self-start px-5 py-3 text-lg font-medium rounded-3xl dark:bg-violet-400 dark:text-gray-900">Start Practice</button></Link>
                                    </div>
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