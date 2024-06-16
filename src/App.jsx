import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Home from './Pages/Home'
import About from './Pages/About'
import TaskManagement from './Pages/Projects/TaskManagement'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PreviousPortfolio from './Pages/Projects/PreviousPortfolio'
import MobileApp from './Pages/Projects/MobileApp'
import Gallery from './Pages/Projects/Gallery'

function App() {
  return (
    <Router>
      <div className='w-full h-full bg-slate-50 flex flex-col items-center font-avernir'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/projects/taskmanagement" element={<TaskManagement />}/>
          <Route path="/projects/previousportfolio" element={<PreviousPortfolio />}/>
          <Route path="/projects/mobileapp" element={<MobileApp />}/>
          <Route path="/projects/gallery" element={<Gallery />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App