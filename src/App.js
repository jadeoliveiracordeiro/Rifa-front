import { Route, Routes, BrowserRouter as Router} from "react-router-dom"

import './App.css';

import Header from './components/Header/Index';
import Produto from './Produto/Index';
import Rifas from './Rifas';


function App() {
  return (
    <main>
      <Header/>
      <Produto />
      <Rifas />
    </main>
  );
}

export default App;
