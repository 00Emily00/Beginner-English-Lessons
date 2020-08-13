import React from 'react';
import { quiz3 } from './quiz';
import Quiz from '../../components/PhraseQuiz/Quiz1';
  
// import React from "react";
// import { render } from "react-dom";
// import Quiz from "../../lib/Quiz";
// import {quiz} from './quiz';

/**
 * @author
 * @function Quiz
 */

const Quiz1 = () => {
  return (
      <Quiz quiz={quiz3} shuffle={true} showInstantFeedback={true} continueTillCorrect={true}/>

  );
}

export default Quiz1;