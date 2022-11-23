import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import Statistics from "../components/Statistics";
import Blog from "../components/Blog"
import ErrorPage from '../components/ErrorPage'
import Quiz from "../components/Quiz";
import Topics from "../components/Topics";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        children: [
            {
                path: '/', element: <Topics></Topics>
            },
            {
                path: '/statistics', element: <Statistics></Statistics>
            },
            {
                path: '/blog', element: <Blog></Blog>
            },
            {
                path: '/quiz/:id',
                element: <Quiz></Quiz>,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
            }
        ]
    }
])