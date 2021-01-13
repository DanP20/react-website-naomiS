import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Some of Naomi's services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Gong sound therapy'
              label='Relax'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Massage'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Meditation'
              label='Spiritual'
              path='/services'
            />
            <CardItem
              src='images/img-1.jpg'
              text='Yoga'
              label='Body and mind'
              path='/products'
            />
            <CardItem
              src='images/img-home.jpg'
              text='Hot Stone massage and massage therapy'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
