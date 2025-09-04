import React from "react";
import { useOutletContext, Link } from "react-router-dom";

const Home = () => {
  const { posts } = useOutletContext(); // get posts from App.jsx

  return (
    <div className="home">  
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.image || "/default.png"} alt="post" className="post-img" />
          <div className="post-content">
            <Link to={`/post/${post.id}`} className="post-title">
              <h2>{post.title}</h2>
            </Link> 
            <div className="post-desc" dangerouslySetInnerHTML={{ __html: post.desc }}/>
            <button className="read-btn">Read More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
