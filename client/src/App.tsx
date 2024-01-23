import './App.css'

import './styles/tailwind.css';
import Myview from './styles/scroll.tsx';
import Header from './Header';

import HikingSpotsList from './HikingSpotsList'
import Navbar from './Navbar'
import PreferenceForm from './PreferenceForm';



function App() {
  

  return (
    <>
    
    <Navbar />
    <Header />
    <Myview/>
    {/* if you call MyView show runtime error */}
   <HikingSpotsList/>
   
    </>
  )
}

export default App
