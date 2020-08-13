import React, {useState,useEffect}from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/info.json';
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
// import t from '../../audio/hello.mp3';


/**
 * @author
 * @function FoodPost
 */

const FoodPost = props => {

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
        const post = blogPost.food.find(post => post.id == postId);
        console.log(post + " This is the post variable...Second");
        setPost(post);
        console.log(post + " This is the post variable after setpost...Third");
        // setPostId(postId); //change page to the posts
        console.log(postId + " This is the post variable...Fourth");
    },[post,props.match.params.postId]); //make that call only once

    const audioTune = new Audio(post.audio);
    console.log("This is the audioTune" + post.audio);
    // variable to play audio in loop
    const [playInLoop, setPlayInLoop] = useState(false);
   
    // load audio file on component load
    useEffect(() => {
      audioTune.load();
    }, [])
   
    // set the loop of audio tune
    useEffect(() => {
      audioTune.loop = playInLoop;
    }, [playInLoop])
   
    // play audio sound
    const playSound = () => {
      audioTune.play();
    }
   
    // pause audio sound
    const pauseSound = () => {
      audioTune.pause();
    }
   
    // stop audio sound
    const stopSound = () => {
      audioTune.pause();
      audioTune.currentTime = 0;
    }
    // if(post.blogImage=="")return null;
        return(
          <div className="blogPostContainer">
            <h1>La Comida</h1>
            <Card>
                { <div className="postContent">
                    <h1>{post.wordS}</h1>
                    <h2>{post.wordE}</h2>
                    <p>{post.pronunciation}</p>
                    <div className="iframe-div"><iframe src={post.audio} frameborder="0"></iframe></div>

                    {/* <audio controls src={a}>Your browser does not support the <code>audio</code> element</audio>  */}
 {/* <input type="button" className="btn btn-primary mr-2" value="Play" onClick={playSound}></input>
 <input type="button" className="btn btn-warning mr-2" value="Pause" onClick={pauseSound}></input>
 <input type="button" className="btn btn-danger mr-2" value="Stop" onClick={stopSound}></input>

 <label><input type="checkbox" checked={playInLoop} onChange={e => setPlayInLoop(e.target.checked)} /> Play in Loop</label> */}
                </div> }
            </Card>

          </div>

          
    );
           // }
}

export default FoodPost;