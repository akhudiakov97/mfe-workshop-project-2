import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import LandingApp from './components/LandingApp';

export const App = ()=>{
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <LandingApp/>
            </div>
        </BrowserRouter>
    )
}

export default App;