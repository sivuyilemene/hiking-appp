
import '../App.css'
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css'
import image_1 from '../assets/image_1.jpg'
import image_2 from '../assets/Image_2.jpg'
import image_3 from '../assets/Image_3.jpg'
import image_4 from '../assets/image_4.jpg'
import image_5 from '../assets/image_5.jpg'
import image_6 from '../assets/image_6.jpg'
import image_7 from '../assets/image_7.jpg'
import image_8 from '../assets/image_8.jpg'
import image_9 from '../assets/image_9.jpg'
import image_10 from '../assets/image_10.jpg'
import image_11 from '../assets/image_11.jpg'
import image_12 from '../assets/image_12.jpg'
import image_13 from '../assets/image_13.jpg'
import image_14 from '../assets/image_14.jpg'
import image_15 from '../assets/image_15.jpg'
import image_16 from '../assets/image_16.jpg'
import image_17 from '../assets/image_17.jpg'
import image_18 from '../assets/image_18.jpg'
import image_19 from '../assets/image_19.jpg'
import image_20 from '../assets/image_20.jpg'
import image_21 from '../assets/image_21.jpg'
import image_22 from '../assets/image_22.jpg'
import image_23 from '../assets/image_23.jpg'
import logo  from '../assets/logo.png'

const MyView = () => {
  return(
  <>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh'}}>
        <div style={{ marginBottom: '10px'}}>
        <img src={logo} alt="lens logo" width={200}/>
        </div>
        <p style={{ fontFamily: 'monospace', fontSize: '20px'}}>
          Lets Explore Nature Sometime or LENS is a free to use Hiking Trail Recommend-er that provides users with the best hiking spots in and around Cape Town based on Ratings, Difficulty and the level of preparation needed.
        </p>
        <div style={{ width: "100%", height: "100%", margin: 'auto' }}>
          <AliceCarousel autoPlay autoPlayInterval={3000} infinite>
            <img src={image_1} alt="image_1" className='sliderimg'/>
            <img src={image_2} alt="image_2" className='sliderimg'/>
            <img src={image_3} alt="image_3" className='sliderimg'/>
            <img src={image_4} alt="image_4" className='sliderimg'/>
            <img src={image_5} alt="image_5" className='sliderimg'/>
            <img src={image_6} alt="image_6" className='sliderimg'/>
            <img src={image_7} alt="image_7" className='sliderimg'/>
            <img src={image_8} alt="image_8" className='sliderimg'/>
            <img src={image_9} alt="image_9" className='sliderimg'/>
            <img src={image_10} alt="image_10" className='sliderimg'/>
            <img src={image_11} alt="image_11" className='sliderimg'/>
            <img src={image_12} alt="image_12" className='sliderimg'/>
            <img src={image_13} alt="image_13" className='sliderimg'/>
            <img src={image_14} alt="image_14" className='sliderimg'/>
            <img src={image_15} alt="image_15" className='sliderimg'/>
            <img src={image_16} alt="image_16" className='sliderimg'/>
            <img src={image_17} alt="image_17" className='sliderimg'/>
            <img src={image_18} alt="image_18" className='sliderimg'/>
            <img src={image_19} alt="image_19" className='sliderimg'/>
            <img src={image_20} alt="image_20" className='sliderimg'/>
            <img src={image_21} alt="image_21" className='sliderimg'/>
            <img src={image_22} alt="image_22" className='sliderimg'/>
            <img src={image_23} alt="image_23" className='sliderimg'/>
          </AliceCarousel>
        </div>
      </div>
    </>
  );
};

  
export default MyView;