import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Reviews from '../reviews/Reviews';

const Hero = ({movies}) => {

    const navigate = useNavigate();
    function reviews(movieId){
        navigate(`/Reviews/${movieId}`);
    }

  return (
    <div className='movie-carousel-container'>
        <Carousel>
            {
                movies?.map((movie) =>{ // error occurs w/o conditional '?' due to rendering too early aka empty array
                    return(
                        <Paper> 
                            <div className = 'movie-card-container'>
                                <div className='movie-card' style={{"--img": `url(${movie.backdrops[0]})`}}>
                                    <div className='movie-detail'>
                                        <div className='movie-poster'>
                                            <img src={movie.poster} alt="" />
                                        </div>
                                        <div className='movie-title'>
                                            <h4>{movie.title}</h4>
                                        </div>
                                        <div className='movie-review-button-container'>
                                            <Button variant="info" onClick={() => reviews(movie.imdbId)}>Reviews</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    )
                })
            }
        </Carousel>
    </div>
  )
}

export default Hero