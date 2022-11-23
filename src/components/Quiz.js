import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayQuiz from './DisplayQuiz';


const Quiz = () => {

    const quiz = useLoaderData();
    const quizQuestions = quiz.data.questions;
    // console.log(quiz.data);
    return (
        <div>
            <p className='text-4xl my-16 text-center text-green-800'>Quiz of {quiz.data.name} </p>

            {
                quizQuestions.map((question, i) => <DisplayQuiz
                    key={question.id}
                    question={question}
                    index={i}
                ></DisplayQuiz>)
            }

        </div>
    );
};

export default Quiz;