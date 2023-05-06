import './App.css';
import Navbar from './components/Navbar';
import BookScuba from './components/BookScuba';
import Slider from './components/Slider';
import Description from './components/Description';
import WhoCanDive from './components/WhoCanDive';
import FullSchedule from './components/FullSchedule';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <section className='bg-[#F9F9F9]'>
        <div className='grid sm:grid-cols-1 lg:grid-cols-3 lg:mx-12'>
          <div className='col-span-2'>
            <BookScuba></BookScuba>
            <Slider></Slider>
            <Description></Description>
            <WhoCanDive></WhoCanDive>
            <FullSchedule></FullSchedule>
          </div>
          <div>
            <h2>column 2adokfsasjdkflkasfjalksdfjaslkdfjaslkfjdsaklfjasdklfjasdkl</h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
