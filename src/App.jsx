import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Project from './components/Project'
import About from './components/About'
import Contact from './components/Contact'
import Resume from './components/Resume'

function App() {
  return <div className="portfolio-app">
    <Router>
      <Header>
        <Nav />
      </Header>
      <Routes>
        <Route path="/" element={<Project />} errorElement={<Error />} />
        <Route path="/About" element={<About />} errorElement={<Error />} />
        <Route path="/Contact" element={<Contact />} errorElement={<Error />} />
        <Route path="/Resume" element={<Resume />} errorElement={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </div>
}

export default App;
