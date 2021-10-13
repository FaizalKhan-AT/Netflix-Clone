import React,{useState} from 'react'
import './post.css'
import axios from 'axios'
import {TrailerContext} from "../../store/Contexts"
import {base_Url,image_url} from '../../constants/constants';
import {trending }  from '../../urls'


function Post() {
	const {genre} = React.useContext(TrailerContext)
	const [data,setData] = useState([])
	React.useEffect(() => {
		if(genre) {
			try {				
				axios.get(`${base_Url}/${genre}`).then(res => {
					setData(res.data.results)
					console.log(data)

				})
			}catch(err) {
				console.log(err)
			}
		}else {
			try {				
				axios.get(`${base_Url}/${trending}`).then(res => {
					setData(res.data.results)
					console.log(data)
				})
			}catch(err) {
				console.log(err)
			}
		}

	}, [])
	return (
		<>
			<h2 className='posts-title'>Related Movies</h2>
			<div className='posts-container' >
			{
				data.map(post => {
					return (
						<div key={post.id} className="post-card">
							<img className='card-image' src={post && image_url + post.poster_path} alt={post ? post.title : post.name} />
							<div className='post-card-details'>								
								<h4 className="post-title">
									{post && `${post.title ? post.title : post.name}`}
								</h4>
        						<div className='rating-bar-post'><span style={{color:'gold',fontSize:'18px'}}>&#x2605;</span> {post ? post.vote_average : '0'}</div>
								<p className='post-overview'>{post ? post.overview : 'description'}</p>
							</div>
						</div>
					)
				})
			}
				
			</div>
		</>
	)
}

export default Post