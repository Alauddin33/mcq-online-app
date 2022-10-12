import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Main from "../components/Main";
import Statistics from "../components/Statistics";
import Blog from "../components/Blog"
import Quiz from "../components/Quiz";
import ErrorPage from '../components/ErrorPage'




export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/home', element: <Home></Home>
            },
            {
                path: '/statistics', element: <Statistics></Statistics>
            },
            {
                path: '/blog', element: <Blog></Blog>
            },
            {
                path: '/quiz',
                element: <Quiz></Quiz>
            }
        ]
    }
])