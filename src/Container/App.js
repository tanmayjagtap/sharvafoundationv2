import React, {Component} from 'react';
import Navigation from '../Component/Navigation/Navigation.js';
import Slider from '../Component/Slider/Slider.js';
import Logo from '../Image/Logo.png';
import './App.css';

import Counter from '../Component/CounterUp/counter.jsx';
import '../Component/CounterUp/counterUp.css'

import Testimonial from '../Component/Testimonial/Testimonial';
import AboutUs from '../Component/AboutUs/AboutUs.js';
import RecentPost from '../Component/RecentPost/RecentPost.js';
class App extends Component {
  render() {
    return(
      <div className="App">
        <Navigation src = {Logo}/>
<<<<<<< HEAD
        <Slider />
=======
        <AboutUs/>
        <Counter />
        <Testimonial/>
        <RecentPost/>
>>>>>>> c351edb57dc60a754fd427dc8ab08615ced7fcc4
      </div>
    );
  }
}

export default App;
