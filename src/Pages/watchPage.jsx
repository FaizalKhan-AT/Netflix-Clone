import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Player from '../Components/Player/player';
import Posts from '../Components/Posts/Post';

function watchPage() {
	return (
		<>
			<Navbar/>
			<Player/>
			<Posts/>
			<Footer/>	
		</>
	)
}

export default watchPage