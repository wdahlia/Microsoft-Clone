import './App.css';
import InfoCards from './components/InfoCards/InfoCards';
import Navbar from './components/Nav/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import CommonUse from './CommonUse';
import ForBusiness from './ForBusiness';
import CarouselInfo from './CarouselInfo';
import ImageInfo from './ImageInfo';
import ImageCard from './components/ImageCard/ImageCard';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <header>
          <Carousel carouselList={CarouselInfo}/>
        </header>
        <article className='article'>
          <InfoCards infoList={CommonUse} />
          <ImageCard carouselItem={ImageInfo} />
          <h1 className='title'>비즈니스용</h1>
          <InfoCards infoList={ForBusiness} />
        </article>
      </section>
    </>
  );
}

export default App;
