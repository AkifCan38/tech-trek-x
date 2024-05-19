import React from 'react';
import './ProductPage.css';
import productImage from '../assets/image.jpg';

const ProductPage = () => {
    return (
        <div className="product-page">
            <h1>TechTrek X Smartphone</h1>
            <p className="company-description">
                TechTrek is a leading innovative technology company. We specialize in developing and selling innovative gadgets and devices that make everyday life easier and more fun. Our team of inventors and engineers is constantly working to create new products that incorporate the latest technological advances to improve the lives of our customers.
            </p>
            <p>TechTrekX takes foldable technology to the top. Here are its prominent technical features:</p>
            <p>Foldable Design: Its slim and elegant design folds the huge 8-inch screen into a device that can easily fit in your pocket.</p>
            <p>Powerful Performance: Equipped with the latest generation processor and high-capacity RAM, it delivers ideal performance for any task.</p>
            <p>Advanced Camera: Equipped with high-resolution main camera and wide-angle lenses, it allows you to capture every moment with perfect frames.</p>
            <p>Security and Privacy: Protects your personal information at the highest level with fingerprint reader and facial recognition technology.</p>
            <p>Feel the future, take a step with TechTrekX!</p>
            <p>Introducing the new TechTrek X smartphone with cutting-edge technology...</p>
            <img src={productImage} alt="TechTrek X" className="product-image" /> {}


        </div>
    );
};

export default ProductPage;
