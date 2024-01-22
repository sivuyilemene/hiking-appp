import './App.css'

import './styles/tailwind.css';
import Myview from './styles/scroll';
import Header from './assets/Header';

import HikingSpotsList from './HikingSpotsList'
import Navbar from './assets/Navbar'
import PreferenceForm from './PreferenceForm';



function App() {
  

  return (
    <>
    
    <Navbar />
    <Header />
    <Myview/>


    <HikingSpotsList/>
    </>
  )
}

export default App
