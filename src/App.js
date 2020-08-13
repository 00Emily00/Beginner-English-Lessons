import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ContactUS from './containers/ContactUs';
import Post from './containers/Post';
import Greeting from './containers/Greeting';
import CommonPhrase from './containers/CommonPhrase';
import PhraseNav from './components/CommonPhraseNavbar';
import Food from './containers/Food';
import FoodNav from './components/FoodNavbar';
import People from './containers/People';
import PeopleNav from './components/PeopleNavbar';
// import Quizes from './Quizes/index.js';
import PhraseQ from './containers/PhraseQ/index.js';
import allQs from './containers/AllQuizes';
import GreetingNav from './components/GreetingNavbar';
import AlphabetNav from './components/Sidebar';
import FoodQ from './containers/FoodQ/index.js';
import GreetingQ from './containers/GreetingQ/index.js';
import PeopleQ from './containers/PeopleQ/index.js';
import AlphabetQ from './containers/AlphabetQ/index.js';


function App() {
 
  return (
    <Router>
    <div className="App">
      {/* <Header/> */}
      <Hero/>
      <Route path="/" exact component={Home}/>
      <Route path="/contact-us" component={ContactUS}/>
      <Route path="/post/:postId" component={Post}/>
      <Route path="/post/" component={AlphabetNav}/>
      <Route path="/alphabetQuiz" component={AlphabetQ}/>
      <Route path="/greeting/:postId" component={Greeting}/>
      <Route path="/greeting/" component={GreetingNav}/>
      <Route path="/greetingQuiz" component={GreetingQ}/>
      <Route path="/commonphrase/:postId" component={CommonPhrase}/>
      <Route path="/commonphrase/" component={ PhraseNav }/>
      <Route path="/food/:postId" component={Food}/>
      <Route path="/food/" component={FoodNav}/>
      <Route path="/foodQuiz" component={FoodQ}/>
      <Route path="/people/:postId" component={People}/>
      <Route path="/people/" component={ PeopleNav }/>
      <Route path="/peopleQuiz" component={ PeopleQ }/>
      {/* <Route path="/quizes" component={ Quizes } /> */}
      <Route path="/commonphraseQuiz" component={ PhraseQ } />
      <Route path="/all-quizes" component={ allQs } />


{/* <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup> */}
    </div>
    </Router>
  );
}

export default App;

