
import './App.css';
import React, {useState} from 'react'
import NavBar from './components/Navbarr';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import{BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import './index.css';
const App=()=>{
  const pageSize=6;
  const[progress,setProgress]= useState(0)
    return (
      <div>
      <Router>
      <NavBar/>
      <LoadingBar
      height={3}
        color='#ffff'
        progress={progress}
      />
      <Routes>
        <Route exact path="/" element={< News setProgress={setProgress} key='general' pageSize={pageSize} country="in" category="general"/>}></Route>
        <Route exact path="/Business" element={ <News setProgress={setProgress}key='business'  pageSize={pageSize} country="in" category="business"/>}></Route>
        <Route exact path="/Entertainment" element={<News setProgress={setProgress}key='entertainment'  pageSize={pageSize} country="in" category="entertainment"/>}></Route>
        <Route exact path="/General" element={ <News setProgress={setProgress}key='general'  pageSize={pageSize} country="in" category="general"/>}></Route>
        <Route exact path="/Health" element={ <News setProgress={setProgress}key='health'  pageSize={pageSize} country="in" category="health"/>}></Route>
        <Route exact path="/Science" element={ <News setProgress={setProgress}key='science'  pageSize={pageSize} country="in" category="science"/>}></Route>
        <Route exact path="/Sports" element={ <News setProgress={setProgress}key='sports'  pageSize={pageSize} country="in" category="sports"/>}></Route>
        <Route exact path="/Technology" element={ <News setProgress={setProgress} key='technology}>' pageSize={pageSize} country="in" category="technology"/>}></Route>
      </Routes>
      </Router>
    </div>
    )
}
export default App

