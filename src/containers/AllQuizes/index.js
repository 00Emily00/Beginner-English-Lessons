import React from 'react';
// import { quiz5 } from '../FoodQ/quiz';
// import Quiz from '../../components/FoodQuiz/Quiz2';

// import { quiz2 } from '../PeopleQ/quiz';
// import Quiz2 from '../../components/PeopleQuiz/Quiz3';

// import { quiz3 } from '../PhraseQ/quiz';
// import Quiz3 from '../../components/PhraseQuiz/Quiz1';

import { quiz6 } from '../AlphabetQ/quiz';
import Quiz1 from '../../components/AlphabetQuiz/Quiz';

import { quiz3 } from '../PhraseQ/quiz';
import Quiz from '../../components/PhraseQuiz/Quiz1';

import { quiz5 } from '../FoodQ/quiz';
import Quiz4 from '../../components/FoodQuiz/Quiz2';
/**
 * @author
 * @function Food
 */
const AllQuizes = () => {
    return(
        <section className="container">

            <Quiz1 quiz={quiz6} shuffle={true} showInstantFeedback={true} continueTillCorrect={true}/>
            <Quiz quiz={quiz3} shuffle={true} showInstantFeedback={true} continueTillCorrect={true}/>
            <Quiz4 quiz={quiz5} shuffle={true} showInstantFeedback={true} continueTillCorrect={true}/>

            {/* <FoodNavbar {...props}/> */}
        </section>
    );
}

export default AllQuizes;