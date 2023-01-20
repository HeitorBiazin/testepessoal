import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../images/EstiloBossBarbearia.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='colorlabel'><strong>EstiloBossBarbearia</strong></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../images/EstiloBossBarbearia.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='colorlabel'><strong>Estilo Boss Barbearia</strong></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../images/EstiloBossBarbearia.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='colorlabel'><strong>Estilo Boss Barbearia</strong></h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;