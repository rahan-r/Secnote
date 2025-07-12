import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import CreateNote from './Pages/CreateNote';
import ViewNote from './Pages/ViewNote';
import AboutPage from './Pages/About';
import NotFound from './Pages/NotFound';
import Privacy from './Pages/Privacy';
import Terms from './Pages/Terms';
import Contact from './Pages/Contact';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateNote/>} />
          <Route path="/v/:id" element={<ViewNote/>} />
          <Route path="/privacy" element={<Privacy/>} />
          <Route path="/terms" element={<Terms/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </>
  )
}

export default App
