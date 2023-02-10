import './App.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/vela-blue/theme.css';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import Footer from "./components/Footer/Footer"
import Resume from './components/Resume/Resume';
import About from './components/About/About';
import OrgChart from './components/OrgChart';
import Vision from './components/Vision';
import Navbar from './components/Home/Navbar';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vision' element={
          <>
            <Navbar/>
            <div className="text-700 text-center pr-6 pl-6 pb-6 pt-2">
              <img src="assets/logo2.png" className="img-fluid" alt='logo' width="300" />
              <Vision />
            </div>
          </>
        } />
        <Route path='/orgChart' element={<OrgChart />} />
        <Route path='/team/:id' element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
