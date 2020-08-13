import React from 'react';
import './style.css';
import CommonPhrasePost from '../../components/CommonPhrasePost';
import CommonPhraseNavbar from '../../components/CommonPhraseNavbar';

/**
 * @author
 * @function CommonPhrase
 */
const CommonPhrase = props => {
    console.log(props);
    return(
        <section className="container">
            <CommonPhrasePost {...props}/>
            {/* <CommonPhraseNavbar {...props}/> */}
        </section>
    );
}

export default CommonPhrase;