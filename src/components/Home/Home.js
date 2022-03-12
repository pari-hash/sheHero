// import React from "react";

// const Home = () => {
//     return (
//         <div>
//         <img src={require('./pexels-michal-marek-1768073.jpg')}/>
//         <img src={require('./pexels-photo-773471 (1).jpeg')}/>
//         <img src={require('./pexels-photo-4061517.jpeg')}/>
//         </div>
//     );
//   };
//   export default Home;

import React from 'react';
import './Home.css';

const Home=()=> {
        const urls = ['#385b66','#385b66', '#385b66'];
         const delay = 2500;
        const [index, setIndex] = React.useState(0);
       const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === urls.length-1? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
     <div className="slide show" ><img  src={require('./pexels-photo-1206059.jpeg')} alt="slide1"/>
          </div>
       <div className="slide show"><img  src={require('./pexels-photo-6925357.jpeg')}  alt="slide2"/>
          </div>
       <div className="slide show" ><img  src={require( './pexels-photo-10653957.jpeg')}  alt="slide3"/>
          </div>
      </div>

      <div className="slideshowDots">
        {urls.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Home;
