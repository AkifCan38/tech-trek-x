import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductPage from './components/ProductPage';
import OrderForm from './components/OrderForm';
import NewsFeed from './components/NewsFeed';
import Contact from './components/Contact';
import backgroundImage from './assets/background-body.jpg';

import './App.css';

function App() {
    const appStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        margin: 0,
        padding: 0,
        fontFamily: 'Arial, sans-serif',
    };

    return (
        <Router>
            <div style={appStyle}> {}
                <Navbar />
                <Routes>
                    <Route path="/" element={<ProductPage />} />
                    <Route path="/order" element={<OrderForm />} />
                    <Route path="/news" element={<NewsFeed />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
