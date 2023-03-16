import './App.css';
import InfoCards from './components/InfoCards/InfoCards';
import Navbar from './components/Nav/Navbar/Navbar';
import CommonUse from './CommonUse';
import ForBusiness from './ForBusiness';


function App() {
  console.log(CommonUse);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <InfoCards infoList={CommonUse} />
        <InfoCards infoList={ForBusiness} />
      </section>
    </>
  );
}

export default App;
