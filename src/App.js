import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import Contacts from './components/Contacts/Contacts';
import About from './components/About us/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import DialogPage from './components/Dialogs/DialogPage';

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <div className="site-content">
                    <Sidebar />
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Content />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contacts" element={<Contacts />} />
                            <Route path="/dialogs" element={<Dialogs dispatch={props.dispatch} dialogsData={props.dialogsData}/>} />
                            <Route path="/dialogs/1" element={<DialogPage title="asd" dialogMessages={props.dialogMessages} dispatch={props.dispatch}/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
