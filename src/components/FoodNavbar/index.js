import React,{useState,useEffect} from "react";
import "./style.css";
import Card from "../UI/Card";
import blogPost from '../../data/info.json';
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Popup from "reactjs-popup";
import vid from '../../food.mov';
/**
 * @author
 * @function FoodNavbar
 */
const FoodNavbar = props => {

  const[posts,setPosts] = useState([]);

  useEffect(() => {
      const posts = blogPost.food;
      setPosts(posts);
  },[posts]); //make that call only once


  return (
    <div className="s">
      {/* <Card style={{marginBottom:'20px',padding:'20px', boxSizing:'border-box'}}> */}
      <div className="slider">
          {/* <span>Recent Posts</span> */}
        </div>

         <div className="slides">
         {
           posts.map(post=>{
            return (

              <NavLink key={post.id} to={`/food/${post.id}`}>
              
             <div className="letter-info">
             <a href={post.id}>{post.wordS}</a>
                 </div>
                 </NavLink>
             );
           })
         }
        </div>

      {/* </Card> */}
    </div>
  );
};

export default FoodNavbar;
