import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import footer from './components/footer';
import react , {useState} from 'react';
function App() {
  const [mode, setMode]= useState("light")//Whether dark mode is enabled or not
  const toggleMode = ()=> {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
    }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
  }
}
  return (
    <>
      {/* <Navbar title= "My App" aboutText="About us"/> */}
      {/* <Navbar/> */}
      <Navbar title= "My App" mode ={mode} toggleMode={toggleMode} />
      <div className="container my-3">
      <TextForm heading="Enter the text to analyze below" mode ={mode}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;