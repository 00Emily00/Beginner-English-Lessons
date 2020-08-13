import React from 'react';
import './style.css';
import PeoplePost from '../../components/PeoplePost';
import PeopleNavbar from '../../components/PeopleNavbar';

/**
 * @author
 * @function People
 */
const People = props => {
    console.log(props);
    return(
        <section className="container">
            <PeoplePost {...props}/>
            {/* <PeopleNavbar {...props}/> */}
        </section>
    );
}

export default People;