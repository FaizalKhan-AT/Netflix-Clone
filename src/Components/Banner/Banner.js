import React,{useState,useEffect} from 'react'
import './Banner.css'
import Youtube from 'react-youtube'
import axios from '../../axiosConfig'
import { API_KEY,image_url } from '../../constants/constants'
function Banner() {
  const [Movie, setMovie] = useState()
  const [Trailer, setTrailer] = useState('')
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
       const movieArray = response.data.results
       const randomMovie = Math.floor(Math.random() * response.data.results.length)
        setMovie(movieArray[randomMovie])
        // console.log(randomMovie)
      }).catch(err => {
        alert('Network error')
      })
  }, [])
  function handlePlay(id) { 
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
      try {
        if (response.data.results !== null) {
          setTrailer(response.data.results[0].key)
        }
      
      } catch (err) {
        alert('No Trailer Available')
        
    }
      
    })
  }
  // console.log(Movie)
  
  const opts = {
    height: '500',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }
  return (
    <>
    <div
      style={{
        backgroundImage: `url(${Movie ? image_url+Movie.backdrop_path : "Loading" })`,
      }}
      className="banner"
    >
      <div className="content">
          <h2 className="movie-title">{Movie ? Movie.title : "Loading..." }</h2>
        <p className="description">{Movie ? Movie.overview : "Loading..."}</p>

        <div className="button-group">
            <button onClick={() => {
              handlePlay(Movie.id)
            }
            } className="play">Play</button>
          <button className="watch">&#43; Watch List</button>
        </div>
      </div>
      </div>
      {Trailer && <Youtube videoId={Trailer} opts={opts }/> }
    </>
  );
}

export default Banner
