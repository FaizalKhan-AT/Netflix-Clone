import {createContext,useState} from 'react'

export const TrailerContext = createContext(null);

function Contexts({children}) {
	const [movieData,setMovieData] = useState(null)
	const [genre,setGenre] = useState()
	return (
		<TrailerContext.Provider value={{movieData,setMovieData,genre,setGenre}}>
			{children}
		</TrailerContext.Provider>
	)
}

export default Contexts;