import React,{useState,useEffect,useContext} from 'react'
import './Banner.css'
import {useHistory} from 'react-router-dom'
import axios from '../../axiosConfig'
import { API_KEY,image_url } from '../../constants/constants';
import Skeleton from '@mui/material/Skeleton';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {TrailerContext} from '../../store/Contexts'


function Banner() {
  const [Movie, setMovie] = useState()
  const [error,setError] = useState(false);
  const history = useHistory()
  const {setMovieData} = useContext(TrailerContext)

  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
       const movieArray = response.data.results
       const randomMovie = Math.floor(Math.random() * response.data.results.length)
        setMovie(movieArray[randomMovie])
      }).catch(err => {
        setError(true)
      })
  }, []);

  return (
    <> 
    {error && <Alert action={
      <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setError(false);
              }}
            >
            <CloseIcon/>
            </IconButton>} variant='filled' className='alert-internet' color='error' severity="error">
     <AlertTitle>Network Error</AlertTitle>
    Check your Internet Connection (Slow or not connected).</Alert>}
   {Movie ?( <div
      style={{
        backgroundImage: `url(${Movie ? image_url+Movie.backdrop_path : "Loading" })`,
      }}
      className="banner"
    >
      <div className="content">
          <h2 className="movie-title">{Movie ? `${Movie.title ? Movie.title : Movie.name}` : "Loading..." }</h2>
        <p className="description">{Movie ? Movie.overview : "Loading..."}</p>

        <div className="button-group">
            <button onClick={() => {
              setMovieData(Movie && Movie)
              history.push('/watch')
            }
            } className="play">Play</button>
          <button className="watch">&#43; Watch List</button>
        </div>
      </div>
      </div>
    ): (

    <Skeleton sx={{ height: 500,bgcolor: 'grey.900' }} animation="wave" variant="rectangular" />
 
    )}
    </>
  );
}

export default Banner
