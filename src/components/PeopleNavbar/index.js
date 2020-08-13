import React,{useState,useEffect} from "react";
import "./style.css";
import Card from "../UI/Card";
import blogPost from '../../data/info.json';
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
/**
 * @author
 * @function PeopleNavbar
 */
const PeopleNavbar = props => {

  const[posts,setPosts] = useState([]);

  useEffect(() => {
      const posts = blogPost.people;
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
              <NavLink key={post.id} to={`/people/${post.id}`}>
             <div className="letter-info">
             <a href={post.id}>{post.wordS}</a>
                 </div>
                 </NavLink>
            //  return (
            //    <NavLink key={post.id} to={`/post/${post.id}`}>
            //   <div className="recentPost">
            //   <h3>{post.blogTitle}</h3>
            //   <span>{post.postedOn}</span>
            //       </div>
            //       </NavLink>
             );
           })
         }
        </div>

      {/* </Card> */}
    </div>
  );
};

export default PeopleNavbar;
