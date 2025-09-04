import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useOutletContext, useNavigate } from 'react-router-dom';

const Single = () => {
  const { id } = useParams();
  const { posts, setPosts } = useOutletContext(); 
  const navigate = useNavigate();

  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = posts.find(p => p.id === parseInt(id));
    setPost(foundPost);
  }, [id, posts]);

  if (!post) return <p>Loading...</p>;

  const handleDelete = () => {
    const confirmed = window.confirm("Are you sure you want to delete this post?");
    if (!confirmed) return;

    const updatedPosts = posts.filter(p => p.id !== post.id);
    setPosts(updatedPosts);
    navigate("/"); 
  };

  return (
    <div className="single">
      <div className="content">
        <img src={post.image || "/default.png"} alt="post" />
        <div className="user-profile">
          <img src="/user-img.jpeg" alt="profile-pic" className='profile-pic' />
          <div className="info">
            <h3>{post.uname}</h3> 
            <p>Posted 2 days ago</p>
          </div>

          <div className="edit">
            <Link to={`/write?edit=${post.id}`}>
              <img src="/edit-logo.png" alt="edit" className='edit-img' title='edit' />
            </Link>
            <img  src="/delete-logo.png" alt="delete" className='del-img'  title='delete' onClick={handleDelete}
              style={{ cursor: "pointer" }} />
          </div>
        </div>

        <h1>{post.title}</h1>
        <p>{post.desc}</p>
      </div>
    </div>
  );
};

export default Single;
