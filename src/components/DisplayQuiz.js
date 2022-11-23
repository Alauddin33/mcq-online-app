import React from 'react';
import { FaEye } from 'react-icons/fa';
import { toast } from 'react-toastify';

const DisplayQuiz = ({ question, index }) => {
    const { options } = question;
    console.log(question);

    const handleClick = () => {
        toast.dark(`Right answar is *** ${question.correctAnswer} ***`)
    }

    const handleRightOrWrong = (option) => {
        if (option === question.correctAnswer) {
            toast.success('Good job, this is right answar')
        }
        else {
            toast.error('Oops, this is wrong answar')
        }
    }


    return (
        <div className='w-2/3 mx-auto text-violet-900'>
            <p className='text-xl font-semibold'>Quiz {index + 1}.  {question.question}</p>
            <p onClick={handleClick} className='flex justify-end p-4'><FaEye></FaEye></p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pb-28'>
                {
                    options.map((option, i) => <div key={i} className="flex items-center pl-4 rounded border border-indigo-200">
                        <input onClick={() => handleRightOrWrong(option)} id="bordered-radio-1" type="radio" value="" name="option" className="w-4 h-4 text-blue-600" />
                        <label htmlFor="bordered-radio-1" className="py-4 ml-2 w-full text-sm font-medium   text-violet-900">{option}</label>
                    </div>)
                }

            </div>

        </div>
    );
};

export default DisplayQuiz;