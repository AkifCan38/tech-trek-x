import React, { useState } from 'react';
import './OrderForm.css';

const OrderForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [quantity, setQuantity] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Pre-order submitted!');
    };

    return (
        <form className="order-form" onSubmit={handleSubmit}>
            <h2>Pre-order TechTrek X</h2>
            <div className="form-group">
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
                <label>Quantity:</label>
                <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required min="1" />
            </div>
            <button type="submit">Pre-order</button>
        </form>
    );
};

export default OrderForm;
