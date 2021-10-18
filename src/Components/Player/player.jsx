import React,{useContext,useState,useEffect} from 'react'
import Youtube from 'react-youtube'
import axios from 'axios';
import {TrailerContext} from '../../store/Contexts'
import { API_KEY,base_Url } from '../../constants/constants';
import './player.css'

function Player() {
	const {movieData} = useContext(TrailerContext);
	const [movieInfo,setMovieInfo] = useState()
	const [trailerVal,setTrailerVal] = useState('');
	const handlePlay = (id) => { 
	    axios.get(`${base_Url}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
	      try {
	        if (response.data.results !== null) {
	          const key = response.data.results[0].key
	          setTrailerVal(key)    
	        }	      
	      } catch (err) {
	        alert('No Trailer Available')
	       }    
	    })
	}
	useEffect(() => {
		setMovieInfo(movieData)
		handlePlay(movieData && movieData.id)
	},[movieData])
 const opts = {
    height: '500',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }
	return (
		<>
			<div className='player'>		
				<div className="top-bar"></div>	
				<Youtube opts={opts} videoId={trailerVal && trailerVal}/> 
				<div className="player-movie-details-container">
					<h2>{movieInfo && `${movieInfo.title ? movieInfo.title : movieInfo.name}` }</h2>
        	<div className='rating-bar'><span style={{color:'gold',fontSize:'18px'}}>&#x2605;</span> {movieInfo ? movieInfo.vote_average : '0'}</div>					
					<p className="description-movie">
						{movieInfo ? movieInfo.overview : 'no description'}
					</p>
				</div>
			</div>
		</>
	)
}

export default Player