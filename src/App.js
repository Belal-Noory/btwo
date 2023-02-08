import './App.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/fluent-light/theme.css';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import Footer from "./components/Footer/Footer"
import Resume from './components/Resume/Resume';
import { SpeedDial } from 'primereact/speeddial';
import About from './components/About/About';

function App() {
  const items = [
    {
      label: 'Facebook',
      icon: 'pi pi-facebook',
      command: () => {
      }
    },
    {
      label: 'Twitter',
      icon: 'pi pi-twitter',
      command: () => {
      }
    },
    {
      label: 'Contact',
      icon: 'pi pi-user',
      command: () => {
      }
    }
  ];

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/team/:id' element={<Resume />} />
      </Routes>
      <Footer />
      <SpeedDial model={items} radius={120} type="quarter-circle" direction="up-left" style={{ position:'fixed',right: 10, bottom: 10 }} showIcon="pi pi-users" buttonClassName="p-button-primary" />
    </div>
  );
}

export default App;
