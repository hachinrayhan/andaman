import './App.css';
import Navbar from './components/Navbar';
import BookScuba from './components/BookScuba';
import Slider from './components/Slider';
import Description from './components/Description';
import WhoCanDive from './components/WhoCanDive';
import FullSchedule from './components/FullSchedule';
import Testimonial from './components/Testimonial';
import Included from './components/Included';
import Excluded from './components/Excluded';
import WantToCarry from './components/WantToCarry';
import WhatHappens from './components/WhatHappens';
import CancPolicy from './components/CancPolicy';
import About from './components/About';
import Faq from './components/Faq';
import BookYourDive from './components/BookYourDive';
import DateExample from './components/Date';

function App() {
  return (
    <div class="App">
      <Navbar></Navbar>
      <section class="bg-base-200">
        <div class="flex flex-col md:flex-row">
          <div class="w-full md:w-2/3 md:mx-12">
            <BookScuba></BookScuba>
            <Slider></Slider>
            <Description></Description>
            <WhoCanDive></WhoCanDive>
            <FullSchedule></FullSchedule>
            <Testimonial></Testimonial>
            <Included></Included>
            <Excluded></Excluded>
            <WantToCarry></WantToCarry>
            <WhatHappens></WhatHappens>
            <CancPolicy></CancPolicy>
            <About></About>
            <Faq></Faq>
          </div>
          <div class="w-full md:w-1/3">
            <BookYourDive></BookYourDive>
            <DateExample class="w-full mt-8"></DateExample>
          </div>
        </div>
      </section>
    </div>

  );
}

export default App;
