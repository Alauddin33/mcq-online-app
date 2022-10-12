import React, { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
const TopicContext = createContext([])

const Main = () => {
    return (
        <div>
            <TopicContext.Provider value={[]}>
                <Header></Header>
                <Outlet></Outlet>
            </TopicContext.Provider>
        </div>
    );
};

export default Main;