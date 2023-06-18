import React ,{ useEffect} from 'react'; 
import Image from 'next/image';
import { useSnapCarousel } from 'react-snap-carousel';

const CarouselExpended = ({ photos ,setMainPhoto }) => {

useEffect(()=>{
  
})

  const { scrollRef, pages, activePageIndex, next, prev, goTo } = useSnapCarousel();
  return (
    <>
      <ul className='gallery-wrapper'
          ref={scrollRef}
          style={{ scrollSnapType: "x mandatory"}}
      >
        {Object.values(photos).map((photo, i) => (     
          <li key={i} className='gallery-item'>
            <Image loading='lazy' src={photo} height={250} width={250}  alt=""  onClick={()=>setMainPhoto(photo)}/>
          </li>
        ))}
      </ul>
  
      <div className='img-list' >
        {activePageIndex + 1} / {pages.length}
      </div>
   { /*  
      <button className='extnded-button' onClick={() => prev()}>Prev</button>
       <button className='extnded-button' onClick={() => next()}>Next</button>

    */}
      <div className='b-list' >
        {pages.map((_, i) => (

          <div key={i} >
            <button className='b-lise-i' onClick={() => goTo(i)}>
              {i + 1}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default CarouselExpended;
