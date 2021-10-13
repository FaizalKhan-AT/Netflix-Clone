import React,{useState,useEffect} from 'react'
import Slider from 'react-elastic-carousel';
import axios from '../../axiosConfig'
import {image_url } from '../../constants/constants'
import DetailsBanner from '../DetailsBanner/DetailsBanner'
import Skeleton from '@mui/material/Skeleton';
import './Cards.css'


function Cards({url, title, isSmall}) {


 const breakpoints = [
  { width: 1, itemsToShow: 1 },
  { width: 300, itemsToShow: 2, itemsToScroll: 2 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: isSmall ? 6 : 5 },
  { width: 2560, itemsToShow: isSmall ? 8 : 7 }]


  const LoadingArray = [1,2,3,4,5,6]
  const [Loading, setLoading] = useState(false)
  const [Posters, setPosters] = useState([])
  const [post,setPost] = useState()
  useEffect(() => {
    try {
      setLoading(true)
      axios.get(`${url}`).then(response => {
        setPosters(response.data.results);
        setLoading(false)
      })
    }catch (err) {
      setLoading(true)
    }
  }, [url])

   const handleClick = (post) => {
    setPost(post)
   }

    return (
      <div className="Cards">
        <div className="title">{title}</div>
        <div className="card-container">
            <Slider breakPoints={breakpoints}
             renderPagination={({ pages }) => {
              return (
                <div>
                  {pages.map((page) => {
                    return null;
                  })}
                </div>
              );
              }}>{
              Posters && Posters.map((poster,index) => {
                return (
                    <img key={index}
                      onClick={() => {
                        handleClick(poster);
                      }}
                      className={isSmall ? "small-card" : "card"}
                      src={image_url + poster.poster_path}
                      alt="Posters"
                    />
                );
              })          
           }
            {Loading &&  LoadingArray.map((index) => {
              return <Skeleton style={{marginLeft:"20px"}} key={index}  sx={{ height: 300,width:isSmall ? 250: 290,bgcolor: 'grey.900' }} animation="wave" variant="rectangular" />  
            })}
           </Slider> 
         </div>
        {post && <DetailsBanner genre={url} post={post}/>}
      </div>
    );
}

export default Cards
