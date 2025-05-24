"use client"

import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import ScrollToTop from "./components/ScrollToTop"

// Pages
import Home from "./pages/Home"
import About from "./pages/About"
// import Classes from "./pages/Workouts"
// import Trainers from "./pages/Trainers"
// import Pricing from "./pages/Pricing"
// import Schedule from "./pages/Schedule"
import Blog from "./pages/Blog"
import BlogPost from "./pages/BlogPost"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import Workouts from "./pages/Workouts"

function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Workouts" element={<Workouts />} />
          {/* <Route path="/trainers" element={<Trainers />} /> */}
          {/* <Route path="/pricing" element={<Pricing />} /> */}
          {/* <Route path="/schedule" element={<Schedule />} /> */}
          <Route path="/classes" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
