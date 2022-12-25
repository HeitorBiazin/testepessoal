import React from 'react';

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [intervalId, setIntervalId] = React.useState(null);

  React.useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex(i => (i + 1) % images.length);
    }, 5000);
    setIntervalId(id);
    return () => clearInterval(intervalId);
  }, [currentIndex, images.length, intervalId]);

  const handleMouseEnter = () => {
    clearInterval(intervalId);
  };

  const handleMouseLeave = () => {
    setIntervalId(setInterval(() => {
      setCurrentIndex(i => (i + 1) % images.length);
    }, 5000));
  };

  const handlePreviousClick = () => {
    setCurrentIndex(i => (i + images.length - 1) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex(i => (i + 1) % images.length);
  };

  return (
    <div className="carousel" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
       
       <button className="previous btn-pv" onClick={handlePreviousClick}>
            <img src="images/arrow-bar-left.svg" alt="Próxima"/>
       </button>
            <img src={images[currentIndex]} alt="Imagem do carousel" />
      <button className="next btn-nx" onClick={handleNextClick}>
            <img className='btn-nx' src="images/arrow-bar-right.svg" alt="Anterior"/>
      </button>
    </div>
  );
}


export default Carousel;


