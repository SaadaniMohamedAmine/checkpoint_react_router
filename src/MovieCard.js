import React,{useState} from 'react'
import StarRatingComponent from 'react-star-rating-component';
import {Link,Route} from 'react-router-dom'
import Details from './Details'

const MovieCard = ({movie}) => {
    
    return (
        <div  className="movie">
            <img src={movie.image} alt=''className="img" />
    <h4 className="movie-name">{movie.name}</h4>
    <StarRatingComponent 
          name="rate" 
          starCount={5}
          value={movie.rating}
          
        />
            <p>{movie.year}</p>
            <div>
                <Link to={`/moviesList/${movie.name}`}>more details</Link>
                <Route path={`/moviesList/${movie.name}`} render={()=><Details movie={movie}/> } />
               
        </div>
        </div>
    )
}

export default MovieCard ;

