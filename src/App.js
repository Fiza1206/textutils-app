import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
//import Practise from './components/Practise';
function App() {

    const [mode, setmode] = useState('light')
    const [alert, setalert] = useState(null)
    const showalert=(message,type)=>{
  setalert({
    msg: message,
   type: type
  })
  setTimeout(() => {
    setalert(null)
  }, 1500);
    }
    const tooglemode=()=>{
      if(mode === 'light'){
        setmode('dark')
        document.body.style.backgroundColor='#042453';
        showalert("Dark mode has been enabled","success")
        document.title="TextUtils- Dark Mode"
      }
      else{
        setmode('light')
        document.body.style.backgroundColor='white'
        showalert("Light mode has been enabled","success")
        document.title="TextUtils-Light Mode"
      }
    }
    const tooglemod=()=>{
      const mode = 'light'; 
        setmode('dark')
        document.body.style.backgroundColor='#20021f';
        showalert("Dark Pink mode has been enabled","success")
        document.title="TextUtils-DarkPink Mode"
    }
    const tooglered=()=>{
      {
      const  mode = 'light'
        setmode('dark')
        document.body.style.backgroundColor='#560202';
        showalert("Dark Red mode has been enabled","success")
        document.title="TextUtils-DarkRed Mode"
      }
     
    }
    const tooglegreen=()=>{
      const mode = 'light';
        setmode('dark')
        document.body.style.backgroundColor='#194001';
        showalert("Dark Green mode has been enabled","success")
        document.title="TextUtils-DarkGreen Mode"
      
    }
  return (
    <>
    {/* <Router> */}
    {/*<Navbar title="TextUtils" abouttext="About TextUtils" mode={mode} tooglemode={tooglemode} tooglemod={tooglemod} tooglered={tooglered} tooglegreen={tooglegreen} />*/}
    <Navbar title="TextUtils"   mode={mode} tooglemode={tooglemode} tooglemod={tooglemod} tooglered={tooglered} tooglegreen={tooglegreen} />
    <Alert alert={alert}></Alert>
    <div className="container my-3">
    {/* <Routes>
              <Route exact path="/about" element={<About />} >
                
              </Route> */}
              {/* <Route exact path="/" element={<Textform showalert={showalert} heading="Enter the text to analyze" mode={mode}/>}> */}
              <Textform showalert={showalert} heading="Enter the text to analyze" mode={mode}/>
              {/* </Route>
            </Routes> */}
    
    {/*<About/>*/}
    {/*<Practise heading="Text Analyzer"/>*/}
    
    </div>
     {/*</Router>*/}
       </>
  );
}

export default App;
