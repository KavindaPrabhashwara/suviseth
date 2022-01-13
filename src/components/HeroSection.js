import React from 'react';
import { ButtonSignIn } from './ButtonSignIn';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-contatiner'>
            {/* <video src='../videos/video-2.mp4' autoPlay loop muted /> */ }
            <h1>LOVE, LAUGHTER AND HAPPILY EVER AFTER</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <ButtonSignIn className='btns' buttonStyle='btn--outine' buttonSize='btn-large'>
                    GET STARTED
                </ButtonSignIn>
            </div>
            <div className='hero-btns'>
                <ButtonSignIn className='btns' buttonStyle='btn--primary' buttonSize='btn-large'>
                    WATCH TRAILER <i className='far fa-play-circle' />
                </ButtonSignIn>
            </div>
        </div>
    )
}

export default HeroSection;
