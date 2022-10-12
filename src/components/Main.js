import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from './Header';
export const TopicContext = createContext([])

const Main = () => {
    const topics = useLoaderData()

    return (
        <div>
            <TopicContext.Provider value={[topics]}>
                <Header></Header>
                <Outlet></Outlet>
            </TopicContext.Provider>
        </div>
    );
};

export default Main;