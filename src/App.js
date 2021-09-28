import './App.css';
import Banner from './Components/Banner/Banner';
import Cards from './Components/Cards/Cards';
import { action, comedy, documentaries, horror, orginals, romance, trending }   from './urls'
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner/>
      <Cards url={orginals} title='Netflix Orginals' />
      <Cards url={trending} title='Trending Now' isSmall />
      <Cards url={action} title='Action Movies' isSmall/>
      <Cards url={romance} title='Romance Movies' isSmall/>
      <Cards url={horror} title='Horror Movies' isSmall/>
      <Cards url={comedy} title='Comedy Movies' isSmall/>
      <Cards url={documentaries} title='Documentaries' isSmall/>
    </div>
  );
}

export default App;
