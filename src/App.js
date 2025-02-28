
import './App.css';
import First from './components/first/first';
import Second from './components/second/second';
import Third from './components/third/third';
import ButtonEx from './components/ButtonEx/ButtonEx';
import Four from './components/four/four';
import Five from './components/five/five';
import  Counter from'./components/counter/counter';
import Menu from'./components/menu/menu';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     Welcome to Functional Components...Trainer Prasanna <br/>
     <First /> <br/>
     <Second /> <br/>
     <Third firstName="Ayusi" lastName="umbarkar" company="Wipro" /> <br/> 
     <Four />
     <ButtonEx /> <hr/>
     <Five />
     <br/>
     <Menu/>
<Counter/>
<BrowserRouter/>
<Routes/>
<Route path="/" element={<Menu />} />
<Route path="/first" element={<First />} />
<Route path="/second" element={<Second />} />
<Route path="/third" element={<Third firstName="Ajay" lastName="Kandagatla" company="Wipro" />} />
<Route path="/four" element={<Four />} />
<Route path="/five" element={<Five />} />
<Route path="/ButtonEx" element={<ButtonEx />} />
<Route path="/counter" element={<Counter/>} />
<BrowserRouter/>
<Routes/>
    </div>
  );
}

export default App;
