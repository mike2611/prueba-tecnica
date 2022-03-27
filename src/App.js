import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './TopBar';
import MainText from './MainText';
import ContactDetails from './ContactDetails';
import Services from './Services';
import Budget from './Budget';
import Review from './Review';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Router>
        <TopBar />
        <MainText />
        <Routes>
          <Route exact path="/" element={<ContactDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/review" element={<Review />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
