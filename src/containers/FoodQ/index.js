import React from 'react';
import { quiz1 } from './quiz';
import Quiz from '../../components/FoodQuiz/Quiz2';
import FoodNavbar from '../../components/FoodNavbar';
import { quiz5 } from './quiz';
import Quiz4 from '../../components/FoodQuiz/Quiz2';


/**
 * @author
 * @function Quiz
 */

const Quiz2 = props => {
  return (
    <section className="container">

      {/* <FoodNavbar {...props}/> */}
      <Quiz4 quiz={quiz5} shuffle={true} showInstantFeedback={true} continueTillCorrect={true}/>
    </section>
  );
}

export default Quiz2;