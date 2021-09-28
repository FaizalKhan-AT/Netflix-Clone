import React,{useState,useEffect} from 'react'
import './Cards.css'
import axios from '../../axiosConfig'
import { API_KEY, image_url } from '../../constants/constants'
import YouTube from 'react-youtube'
function Cards({url, title, isSmall}) {

  const [Trailer, setTrailer] = useState("");
 
  const [Posters, setPosters] = useState([])
  useEffect(() => {
    axios.get(`${url}`).then(response => {
      setPosters(response.data.results);
    })
  }, [url])

 function handlePlay(id) {
   axios
     .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
     .then((response) => {
       try {
         if (response.data.results !== null) {
          //  console.log(response.data.results)
           setTrailer(response.data.results[0].key);
         } 
         if(response.data.results === null) {
           alert("No Trailer Available.");
            // console.log("No Trailer Available");
           
         }
        }catch(err) {
         alert("No Trailer Available");
        //  console.log("No Trailer Available");
       }
       
     });
 }
     const opts = {
       height: "500",
       width: "100%",
       playerVars: {
         // https://developers.google.com/youtube/player_parameters
         autoplay: 1,
       },
  };
  
    return (
      <div className="Cards">
        <div className="title">{title}</div>
        <div className="card-container">
          {
            Posters.map((poster,index) => {
              return (
                <img key={index}
                  onClick={() => {
                    handlePlay(poster.id);
                  }}
                  className={isSmall ? "small-card" : "card"}
                  src={image_url + poster.poster_path}
                  alt="Posters"
                />
              );
            })
         }
         </div>
       { Trailer && <YouTube opts={opts} videoId={ Trailer}/>}
      </div>
    );
}

export default Cards
