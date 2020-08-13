import React from 'react';
import { quiz2 } from './quiz';
import Quiz from '../../components/PeopleQuiz/Quiz3';
  
// import React from "react";
// import { render } from "react-dom";
// import Quiz from "../../lib/Quiz";
// import {quiz} from './quiz';

/**
 * @author
 * @function Quiz
 */

const Quiz3 = () => {
  return (
      <Quiz quiz={quiz2} shuffle={true} showInstantFeedback={true} continueTillCorrect={true}/>

  );
}

export default Quiz3;