import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Invite from './components/pages/Invite'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invitation" element={<Invite />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

