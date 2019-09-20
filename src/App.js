import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import Header from './blocks/header/Header';
import Sidebar from './blocks/sidebar/Sidebar';
import Profile from './pages/profile/Profile';
import DialoguesContainer from "./pages/dialogues/DialoguesContainer";


const App = () => {
    debugger
    return (
        <div className="app-wrapper">
            <Header />
            <Sidebar />
                <div className="app-wrapper__content">
                    <Route exact path="/" render={
                        () => <Profile
                        />
                    }/>
                    <Route path="/profile" render={
                        () => <Profile/>
                    }/>
                    <Route path="/dialogues" render={
                        () => <DialoguesContainer/>
                    } />
                </div>
        </div>
    )
}
export default App;
