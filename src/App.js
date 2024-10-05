import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Header from './components/Header';
import TrainWithUs from './components/TrainWithUs';
import SuccessStories from './components/SuccessStories';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <TrainWithUs />
      <SuccessStories />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;