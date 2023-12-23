import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Slider from './Components/Slider';
import Schedules from './Components/Schedules';
import Feature from './Components/Feature';
import Funfact from './Components/Funfact';
import Whychoose from './Components/Whychoose';
import CalltoAction from './Components/CalltoAction';
import Portfolio from './Components/Portfolio';
import Pricingtable from './Components/Pricingtable';
import Service from './Components/Service';
import Blogarea from './Components/Blogarea';
import Clients from './Components/Clients';
import Appointment from './Components/Appointment';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <>
      <div>
      <div>
  {/* Preloader */}
   {/* <div className="preloader">
    <div className="loader">
      <div className="loader-outter" />
      <div className="loader-inner" />
      <div className="indicator"> 
        <svg width="16px" height="12px">
          <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6" />
          <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6" />
        </svg>
      </div>
    </div>
  </div>  */}
  {/* End Preloader */}
  {/* Get Pro Button */}
 
  {/* Header Area */}
  <Header/>
  {/* End Header Area */}
  {/* Slider Area */}
  <Slider/>
  {/*/ End Slider Area */}
  {/* Start Schedule Area */}
  <Schedules/>
  {/*/End Start schedule Area */}
  {/* Start Feautes */}
  <Feature/>
  {/*/ End Feautes */}
  {/* Start Fun-facts */}
 <Funfact/>
  {/*/ End Fun-facts */}
  {/* Start Why choose */}
 <Whychoose/>
  {/*/ End Why choose */}
  {/* Start Call to action */}
 <CalltoAction/>
  {/*/ End Call to action */}
  {/* Start portfolio */}
 <Portfolio/>
  {/*/ End portfolio */}
  {/* Start service */}
  <Service/>
  {/*/ End service */}
  {/* Pricing Table */}
  <Pricingtable/>
  {/*/ End Pricing Table */}
  {/* Start Blog Area */}
  <Blogarea/>
  {/* End Blog Area */}
  {/* Start clients */}
  <Clients/>
  {/*/Ens clients */}
  {/* Start Appointment */}
  <Appointment/>
  {/* End Appointment */}
  {/* Start Newsletter Area */}
 <Newsletter/>
  {/* /End Newsletter Area */}
  {/* Footer Area */}
 <Footer/>
  {/*/ End Footer Area */}
</div>

      </div>
      </>
    </div>
  );
}

export default App;
