import React, { useContext, useState } from 'react';
import img from '../assets/mcq-pref-format.png';
import { TopicContext } from './Main';
import Topic from '../components/Topic';


const Home = () => {
    const data = useContext(TopicContext)
    const topics = data[0].data;
    // console.log(topics)



    const handleStartPracticeBtn = (topic) => {
        console.log(topic);


    }


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
            <div className=' grid grid-cols-2 gap-4 w-4/5 mx-auto px-0'>
                {
                    topics.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                        handleStartPracticeBtn={handleStartPracticeBtn}
                    ></Topic>)
                }
            </div>


        </div>






    );
};

export default Home;