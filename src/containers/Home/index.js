import React, {useEffect, useState} from 'react';
import './style.css';
import BlogPost from '../../components/BlogPost';
import blogPost from '../../data/info.json';
import vid from '../../../src/introduction-2.mp4'
import Popup from "reactjs-popup";

const Home = props => {
    return(
        <div>
            {/* <Popup trigger={<button> Trigger</button>} position="right center"> */}
            <video controls>
                <source src={vid} type="video/mp4"/>
            </video>  
            {/* </Popup> */}
            {/* <video controls>
                <source src={vid} type="video/mp4"/>
            </video>
                   */}
        </div>
    );
}

export default Home;