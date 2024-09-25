import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'


function App() {
  return <div className="portfolio-app">
    <>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </>
  </div>
}

export default App;
