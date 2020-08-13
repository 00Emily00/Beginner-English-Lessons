import React from 'react';
import { quiz1 } from './quiz';
import Quiz from '../../components/FoodQuiz/Quiz2';
import FoodNavbar from '../../components/FoodNavbar';
import { quiz6 } from './quiz';
import Quiz1 from '../../components/AlphabetQuiz/Quiz';


/**
 * @author
 * @function Quiz
 */

const Quiz2 = props => {
  return (
    <section className="container">

      {/* <FoodNavbar {...props}/> */}
      <Quiz1 quiz={quiz6} shuffle={true} showInstantFeedback={true} continueTillCorrect={true}/>
    </section>
  );
}

export default Quiz2;