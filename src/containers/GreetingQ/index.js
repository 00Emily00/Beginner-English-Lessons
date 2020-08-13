import React from 'react';
import { quiz } from './quiz';
import Quiz from '../../components/GreetingQuiz/Quiz';
  
// import React from "react";
// import { render } from "react-dom";
// import Quiz from "../../lib/Quiz";
// import {quiz} from './quiz';

/**
 * @author
 * @function Quiz
 */

const thing = () => {
  return (
      <Quiz quiz={quiz} shuffle={true} showInstantFeedback={true} continueTillCorrect={true}/>

  );
}

export default thing;