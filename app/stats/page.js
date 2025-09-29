"use client";

import React, { useEffect } from "react";
import "./stats.css";

const StatsPage = () => {

    useEffect(() => {
        // Smooth scroll for anchor links
        const handleSmoothScroll = (e) => {
            if (e.target.hash) {
                e.preventDefault();
                const target = document.querySelector(e.target.hash);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        };
        // Add event listeners to all anchor links
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        anchorLinks.forEach(link => {
            link.addEventListener('click', handleSmoothScroll);
        });

        return () => {
            anchorLinks.forEach(link => {
                link.removeEventListener('click', handleSmoothScroll);
            });
        };
    }, []);

    const submitButton  = () => {
        alert("API req sent");
        const apiKey = document.querySelector(".API-input").ariaValueMax;
        console.log(`API key entered: ${apiKey}`);
    }


    return (
        <div className="appContainer">
            <header>
                <h1 id="title">✝Welcome to AntiSin - The first app to help you be a better Christian on Internet✝</h1>
            </header>
            <h2 className="subtitle">Our official data report!</h2>
        
            <div id="desc-div">
                <ul id="desc-list">
                    <li id="desc-item1" className="feature-card">
                        <h3>Daily activity</h3>
                        <p></p>
                    </li>
                    <li id="desc-item2" className="feature-card">
                        <h3>📈 Progress Analytics</h3>
                        <p></p>
                    </li>
                    <li id="desc-item3" className="feature-card">
                        <h3>👥 100% transparency</h3>
                        <p></p>
                    </li>
                </ul>
            </div>
            <h2 className="subtitle"> Our API's keys to retrieve specific data!</h2>
            <div id="container-specified-api-keys">
                <ul id="desc-list">
                    <li id="desc-item1" className="feature-card">
                        <h3>Monthly users</h3>
                        <p>key:  coming soon</p>
                    </li>
                    <li id="desc-item2" className="feature-card">
                        <h3>Daily Users</h3>
                        <p>key: coming soon</p>
                    </li>
                    <li id="desc-item3" className="feature-card">
                        <h3>average user per country</h3>
                        <p>key: coming soon</p>
                    </li>
                </ul>
            </div>
            <div className="API-input-container">
                <input type="text" placeholder="Enter your API key" className="API-input" />
                <button className="API-button" onClick={submitButton}>Submit</button>
            </div>
        </div>
    )
}

export default StatsPage;