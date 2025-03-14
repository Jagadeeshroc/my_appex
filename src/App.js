import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './Components/Header'
import About from './Components/About'
import Contact from './Components/Contact'
import BlogsList from './Components/BlogsList'
import BlogItemDetails from './Components/BlogItemDetails'
import NotFound from './Components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<BlogsList />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blogs/:id" element={<BlogItemDetails />} />
      <Route path="*" element={<NotFound />} /> 
    </Routes>
  </BrowserRouter>
);

export default App;