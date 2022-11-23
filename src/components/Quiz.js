import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Quiz = () => {

    const quiz = useLoaderData();
    const quizQuestions = quiz.data.questions;
    console.log(quiz.data);
    return (
        <div>
            <h1 className='text-2xl'>Quiz of {quiz.data.name} </h1>

            {
                quizQuestions.map(question => console.log(question))
            }

        </div>
    );
};

export default Quiz;