import './App.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import Footer from "./components/Footer/Footer"
import Resume from './components/Resume/Resume';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/team/:id' element={<Resume/>} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
