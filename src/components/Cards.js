import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these Weddings!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem src='../images/img-1.jpg' text='Explore' label='Wedding' path='/services' />
                        <CardItem src='../images/img-2.jpg' text='Explore More' label='Wedding2' path='/services' />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem src='../images/img-1.jpg' text='Explore' label='Wedding' path='/services' />
                        <CardItem src='../images/img-2.jpg' text='Explore More' label='Wedding2' path='/services' />
                        <CardItem src='../images/img-8.jpg' text='Explore More2' label='Wedding3' path='/services' />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
