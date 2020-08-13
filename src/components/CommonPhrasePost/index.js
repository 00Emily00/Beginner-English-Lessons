import React, {useState,useEffect}from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/info.json';
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

/**
 * @author
 * @function CommonPhrasePost
 */

const CommonPhrasePost = props => {

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   };
    const[post,setPost] = useState({
        id : "",
        wordE : "",
        wordS : "",
        pronunciation : "",
        audio : ""
    });
    const[postId, setPostId] = useState(''); //initialization

    //useEffect is when you do an action
    useEffect(() => {
        const postId = props.match.params.postId;
        console.log(postId + "This is the post Id stuff...First");
        const post = blogPost.commonPhrase.find(post => post.id == postId);
        console.log(post + " This is the post variable...Second");
        setPost(post);
        console.log(post + " This is the post variable after setpost...Third");
        // setPostId(postId); //change page to the posts
        console.log(postId + " This is the post variable...Fourth");
    },[post,props.match.params.postId]); //make that call only once


    
    // if(post.blogImage=="")return null;
        return(
          <div className="blogPostContainer">
            <h1>Frases Comunes</h1>
            <Card>
                { <div className="postContent">
                    <h1>{post.wordS}</h1>
                    <h1>{post.wordE}</h1>
                    <h2>{post.pronunciation}</h2>
                    <div className="iframe-div">
                    <iframe src={post.audio} frameborder="0"></iframe>
                    </div>

                </div> }
            </Card>

          </div>

          
    );
           // }
}

export default CommonPhrasePost;