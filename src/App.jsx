import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Home from './Pages/Home'
import About from './Pages/About'
import TaskManagement from './Pages/Projects/TaskManagement'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PreviousPortfolio from './Pages/Projects/PreviousPortfolio'
import MobileApp from './Pages/Projects/MobileApp'
import Gallery from './Pages/Projects/Gallery'
import ShoppingCart from './Pages/Projects/ShoppingCart'

function App() {
  return (
    <Router>
      <div className='w-full h-full bg-slate-50 flex flex-col items-center font-avernir'>
        <NavBar />
        <Routes>
          <Route path="/PortfolioV2/" element={<Home />}/>
          <Route path="/PortfolioV2/about" element={<About />}/>
          <Route path="/PortfolioV2/projects/taskmanagement" element={<TaskManagement />}/>
          <Route path="/PortfolioV2/projects/previousportfolio" element={<PreviousPortfolio />}/>
          <Route path="/PortfolioV2/projects/mobileapp" element={<MobileApp />}/>
          <Route path="/PortfolioV2/projects/gallery" element={<Gallery />}/>
          <Route path="/PortfolioV2/projects/shoppingcart" element={<ShoppingCart />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App