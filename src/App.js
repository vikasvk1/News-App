import React, { useState } from 'react';
import NavBar from './components/Navbarr';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
const App = () => {
  const pageSize = 6;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar />
        <LoadingBar height={3} color="#0e7c7b" progress={progress} />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route path="/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business" />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
          <Route path="/general" element={<News setProgress={setProgress} key="general-page" pageSize={pageSize} country="in" category="general" />} />
          <Route path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="health" />} />
          <Route path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science" />} />
          <Route path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports" />} />
          <Route path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

