import './App.css';
import Login from './pages/LoginForm';
import Signup from './pages/SignupForm';
import Home from './pages/Home';
import MainPage from './pages/MainPage';
import Contact from './pages/Contact';
import About from './pages/Testimonial';
import Prices from './pages/Prices';
import AdminDashboard from './pages/AdminDashboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from './pages/NotFound';
import PrivateRoutes from './PrivateRoutes';

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/admin" element={<AdminDashboard />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Prices />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
