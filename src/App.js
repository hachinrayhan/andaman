import './App.css';
import Navbar from './components/Navbar';
import BookScuba from './components/BookScuba';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <section className='grid sm: grid-cols-1 lg:grid-cols-3 lg:mx-12'>
        <div className='col-span-2'>
          <BookScuba></BookScuba>
          <Slider></Slider>
        </div>
        <div>
          <h2>column 2adokfsasjdkflkasfjalksdfjaslkdfjaslkfjdsaklfjasdklfjasdkl</h2>
        </div>
      </section>
    </div>
  );
}

export default App;
