import React from 'react'
import { image_url } from '../../constants/constants'
import './details.css'
function DetailsBanner({post}) {
	console.log(post)
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
        				<button className="play-btn">Play</button>
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