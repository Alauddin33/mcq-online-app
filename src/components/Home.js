import React from 'react';
import Topics from './Topics';
import img from '../assets/mcq-pref-format.png';

const Home = () => {
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

            <Topics></Topics>
        </div>
    );
};

export default Home;