// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CollegeList from './components/CollegeList';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CollegeList />} />
            </Routes>
        </Router>
    );
}

export default App;
