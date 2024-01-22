import './App.css'

import './styles/tailwind.css';
import Myview from './styles/sroll';
import Header from './assets/Header';

import HikingSpotsList from './HikingSpotsList'
import Navbar from './assets/Navbar'
import PreferenceForm from './PreferenceForm';



function App() {
  

  return (
    <>
    
    <Navbar />
    <Header />
    {/* if you call MyView show runtime error */}


    <HikingSpotsList/>
    </>
  )
}

export default App
