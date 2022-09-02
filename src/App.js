import Footer from './components/Footer';
import Nav from './components/Nav';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Instructors from './pages/Instructors';
// import NotFound from './pages/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InstructorDetail from './pages/InstructorDetail';
import { Navigate } from 'react-router-dom';
import Paths from './pages/Paths';
import FullStack from './pages/FullStack';
import Aws from './pages/Aws';
import PrivateRouter from './pages/PrivateRouter';



function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="instructors" element={<Instructors />} />
          <Route path="instructors/:id" element={<InstructorDetail />} />

          {/* Nested Route */}
          <Route path="paths" element={<Paths />}>
            <Route index element={<FullStack />} />
            <Route path="fullstack" element={<FullStack />} />
            <Route path="aws" element={<Aws />} />
          </Route>

          <Route path="contact" element={<PrivateRouter />}>
            <Route path="" element={<Contact />} />
          </Route>

          {/*
          <Route path="*" element={<NotFound />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
