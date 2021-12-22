import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/navbar';
import { About } from './components/About/About'
import {Education} from './components/Education/Education'
import {Contacts} from './components/Contacts/Contacts'
import { Projects } from './components/Projects/Projects'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/education' element={<Education />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
