import React from 'react';
import './style.css';
import FoodPost from '../../components/FoodPost';
import FoodNavbar from '../../components/FoodNavbar';
import { quiz1 } from '../FoodQ/quiz';
import Quiz from '../../components/FoodQuiz/Quiz2';
import Popup from "reactjs-popup";
import vid from '../../food.mov';

/**
 * @author
 * @function Food
 */
const Food = props => {
    console.log(props);
    return(
        <section className="container">
            <Popup trigger={<button> Click me for Help</button>} position="left top">
            <video controls>
                <source src={vid} type="video/mp4"/>
            </video>  
            </Popup>
            <FoodPost {...props}/>

            {/* <h3>Cuando estes listo, toma este examen</h3>
            <Quiz quiz={quiz1} shuffle={true} showInstantFeedback={true} continueTillCorrect={true}/> */}

            {/* <FoodNavbar {...props}/> */}
        </section>
    );
}

export default Food;