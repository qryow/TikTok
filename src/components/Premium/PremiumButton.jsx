import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PremiumStyles/PremiumButton.css';

const PremiumButton = () => {
    const navigate = useNavigate();

    return (
        <div class="center">
        <h1>Daily UI 002: Credit Card Checkout</h1>
        <div class="wrapper">
            <button class="checkout" onClick={() => navigate('/premium')}>Checkout</button>
            <div class="card-wrap">
            <div class="card">
                [[[https://codepen.io/alexzaworski/pen/b8db19494e266b36923ed9231645a6a5]]]
            </div>
            </div>
        </div>
</div>
    );
};

export default PremiumButton;