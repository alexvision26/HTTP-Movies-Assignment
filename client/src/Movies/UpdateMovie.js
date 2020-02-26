import React from 'react';
import axios from 'axios';
import { Route, Link, useParams } from 'react-router-dom';

const initialItem = {
    title: '',
    director: '',
    metascore: '',
    stars: []
}

const UpdateMovie = props => {


    return (
        <div className='update-movie'>
        <h2>Update Movie</h2>

        <form>
            <input
                type='text'
                name='title'
                placeholder='Title..'
                />
            <div className='split'/>

            <input
                type='text'
                name='director'
                placeholder='Director..'
                />
            <div className='split'/>

            <input
                type='number'
                name='metascore'
                placeholder='Metascore Rating..'
                />
            <div className='split'/>

            <input
                type='text'
                name='stars'
                placeholder='Stars..'
                />
            <div className='split'/>

            <button>Update Movie</button>
                
        </form>
        </div>
    )
}

export default UpdateMovie;