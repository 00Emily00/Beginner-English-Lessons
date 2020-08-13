import React from 'react';
import './style.css';
import GreetingPost from '../../components/GreetingPost';
import GreetingNavbar from '../../components/GreetingNavbar';

/**
 * @author
 * @function Greeting
 */
const Greeting = props => {
    console.log(props);
    return(
        <section className="container">
            <GreetingPost {...props}/>
            {/* <GreetingNavbar {...props}/> */}
        </section>
    );
}

export default Greeting;