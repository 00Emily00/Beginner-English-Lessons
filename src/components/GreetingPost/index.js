import React, {useState,useEffect}from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/info.json';


/**
 * @author
 * @function GreetingPost
 */

const GreetingPost = props => {

    const[post,setPost] = useState({
        id : "",
        wordE : "",
        wordS : "",
        pronunciation : ""
    });
    const[postId, setPostId] = useState(''); //initialization

    //useEffect is when you do an action
    useEffect(() => {
        const postId = props.match.params.postId;
        console.log(postId + "This is the post Id stuff...First");
        const post = blogPost.greeting.find(post => post.id == postId);
        console.log(post + " This is the post variable...Second");
        setPost(post);
        console.log(post + " This is the post variable after setpost...Third");
        // setPostId(postId); //change page to the posts
        console.log(postId + " This is the post variable...Fourth");
    },[post,props.match.params.postId]); //make that call only once

        return(
          <div className="blogPostContainer">
            <h1>Saludos</h1>
            <Card>
                { <div className="postContent">
                    <h1>{post.wordE}</h1>
                    <h1>{post.wordS}</h1>
                    <p>{post.pronunciation}</p>

                </div> }
            </Card>

          </div>

          
    );
           // }
}

export default GreetingPost;