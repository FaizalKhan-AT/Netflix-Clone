import React,{useContext} from 'react'
import { image_url } from '../../constants/constants'
import {useHistory} from 'react-router-dom'
import {TrailerContext} from "../../store/Contexts"
import './details.css'
function DetailsBanner({post,genre}) {
	const history = useHistory();
	const {setMovieData,setGenre} = useContext(TrailerContext);
	return (
		<>
			<div className="details-banner" >
				<div className="details-container" style={{backgroundImage:`url(${post ? image_url + post.backdrop_path : ''})`}}>
					<div className="addition-details">
						<h2 className="movie-title movie-title-size">{post && `${post.title ? post.title : post.name}`}</h2>
        				<div className='rating-bar'><span style={{color:'gold',fontSize:'18px'}}>&#x2605;</span> {post ? post.vote_average : '0'}</div>
        				<div className='desc-container'>
        					<p className="description">{post ? post.overview : "Loading..."}</p>
        				</div>
        				<button className="play-btn" onClick={()=>{
        					setMovieData(post)
        					setGenre(genre)
        					history.push('/watch')
        				}}>Play</button>
					</div> 
					<div className='details-image' >
						<img className='post-image'src={post ? image_url + post.poster_path : ''} alt="unable to load poster" />
					</div>					
				</div>
			</div>
		</>
	) 
}

export default DetailsBanner