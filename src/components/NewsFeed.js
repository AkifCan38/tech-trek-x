import React from 'react';
import './NewsFeed.css';

const NewsFeed = () => {
    return (
        <div className="news-feed">
            <h2>Latest News on TechTrek X</h2>
            <ul>
                <li>Release Date Announced: The TechTrek X will be available from June 15, 2024.</li>
                <li>New Features Revealed: The TechTrek X will feature a foldable display and advanced multitasking capabilities.</li>
                <li>First Look: Early reviews praise the TechTrek X for its innovative design and seamless user experience.</li>
                <li>Pre-Order Now: Secure your TechTrek X with exclusive pre-order bonuses and discounts.</li>
                <li>TechTrek X Event: Join us for the live unveiling event on May 25, 2024.</li>
            </ul>
        </div>
    );
};

export default NewsFeed;
