import React from 'react'
import Banner from '../Components/Banner/Banner';
import Cards from '../Components/Cards/Cards';
import Navbar from '../Components/Navbar/Navbar';
import { action, comedy, documentaries, horror, orginals, romance, trending }   from '../urls'

export default function Home() {
	return (
	    <>
	    	<Navbar />
		    <Banner/>
	        <Cards url={orginals} title='Netflix Orginals' />
		    <Cards url={trending} title='Trending Now' isSmall />
		    <Cards url={action} title='Action Movies' isSmall/>
		    <Cards url={romance} title='Romance Movies' isSmall/>
		    <Cards url={horror} title='Horror Movies' isSmall/>
		    <Cards url={comedy} title='Comedy Movies' isSmall/>
		    <Cards url={documentaries} title='Documentaries' isSmall/>
	    </>
    )
}