import React from 'react';
import home1 from '../img/home1.png'

const AboutSection = () => {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We Work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>Your <span>Dreams</span> come</h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                </div>
                <p>Contact us for any photography or video idea that you have. We have professionals with great skills to get the job done</p>
                <button>Contact us</button>
            </div>
            <div className="image">
                <img src={home1} alt="Some dude with a camera"/>
            </div>
        </div>
    )
}

export default AboutSection;