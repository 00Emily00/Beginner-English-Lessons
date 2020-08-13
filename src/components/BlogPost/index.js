import React, {useState,useEffect}from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/info.json';
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import a from '../../images/apple.png';

/**
 * @author
 * @function BlogPost
 */

const BlogPost = props => {

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   };
    const[post,setPost] = useState({
        id : "",
        lowerLetter : "",
        upperLetter : "",
        pronunciation : "",
        audio : "",
        img : ""
    });
    const[postId, setPostId] = useState(''); //initialization

    //useEffect is when you do an action
    useEffect(() => {
        const postId = props.match.params.postId;
        console.log(postId + "This is the post Id stuff...First");
        const post = blogPost.alphabet.find(post => post.id == postId);
        console.log(post + " This is the post variable...Second");
        setPost(post);
        console.log(post + " This is the post variable after setpost...Third");
        // setPostId(postId); //change page to the posts
        console.log(postId + " This is the post variable...Fourth");
    },[post,props.match.params.postId]); //make that call only once


    
    // if(post.blogImage=="")return null;
        return(
          <div className="blogPostContainer">
            <h1>El Alfabeto y Pronunciacion</h1>
            <Card>
                { <div className="postContent">
                    <h1>{post.upperLetter}{post.lowerLetter}</h1>
                    <h2>{post.pronunciation}</h2>
                <a data-flickr-embed="true"href="https://www.flickr.com/photos/160063694@N06/50112995828/in/dateposted-public/" title="apple"><img src={post.img} width="200" height="300" alt="apple"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
                    <div className="iframe-div">
                    <iframe src={post.audio} frameborder="0"></iframe>
                    </div>
                </div> }
            </Card>

          </div>

          
    );
           // }
}

export default BlogPost;