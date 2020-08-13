import React, {useState} from "react";
import {NavLink} from 'react-router-dom';
import './style.css';

/**
 * @author
 * @function Navbar
 */
const Navbar = (props) => {

    const[search, setSearch] = useState(false);

    const submitSearch = (e) => {
        e.preventDefault();
        alert('Searched');
    }
    const openSearch = () => {
        setSearch(true);
    }
    const searchClass = search?'searchinput active':'searchinput';
  return (
    <div className="navbar">
        <ul className="navbarMenu">
        <li className="home"><NavLink to="/">Home</NavLink></li>
        {/* <li className="about-us"><NavLink to="/about-us">About Us</NavLink></li> */}
        <li className="lessons"><NavLink to="/post">Alphabet</NavLink></li>
        <li className="alphabetQ"><NavLink to="/alphabetQuiz">Alphabet Quiz</NavLink></li>
        {/* <li className="contact-us"><NavLink to="/contact-us">Contact Us</NavLink></li> */}
        <li className="greetings"><NavLink to="/greeting">Greetings</NavLink></li>
        <li className="greetingsQ"><NavLink to="/greetingQuiz">Greetings Quiz</NavLink></li>
        <li className="common-phrases"><NavLink to="/commonphrase">Common Phrase</NavLink></li>
        <li className="common-phrasesQ"><NavLink to="/commonphraseQuiz">Common Phrase Quiz</NavLink></li>
        <li className="food"><NavLink to="/food">Food</NavLink></li>
        <li className="foodQ"><NavLink to="/foodQuiz">Food Quiz</NavLink></li>
        <li className="people"><NavLink to="/people">People</NavLink></li>
        <li className="peopleQ"><NavLink to="/peopleQuiz">People Quiz</NavLink></li>
        {/* <li className="quiz"><NavLink to="/quizes">Quizes</NavLink></li> */}
        {/* <li className="phrases-quiz"><NavLink to="/quizPhrase">Phrases Quiz</NavLink></li> */}
        <li className="all-quizes"><NavLink to="/all-quizes">All quizzes</NavLink></li>
        </ul>

    </div>
  );
};

export default Navbar;