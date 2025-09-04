import React, { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const { posts, setPosts } = useOutletContext(); // get posts state
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [value, setValue] = useState(''); // editor content
  const [file, setFile] = useState(null);

  const handleSave = () => {
    if (!title || !value) {
      alert("Please enter title and content!");
      return;
    }

    const newPost = {
      id: posts.length + 1,
      title,
      desc: value,
      image: "/default.png", // default image
      uname: "CurrentUser"
    };

    setPosts([newPost, ...posts ]);
    navigate("/"); // redirect to home
  };

  return (
    <>
      <div className="write-div">
        <div>
          <div className="content">
            <input  type="text"  placeholder='Title' className='heading' onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="editorContainer">
            <ReactQuill theme="snow"  value={value}  onChange={setValue}  className='editor'  />
          </div>
        </div>
        <div className="menu">
          <div className="item">
            <div className="item">Item1</div>
            <span><b>Status: </b> Draft</span>
            <span><b>Visibility: </b> Public</span> <br />
            <input style={{ display: "none" }} type="file" id='file' onChange={(e) => setFile(e.target.files[0])} />
            <label className='file' htmlFor="file" >Upload Image</label>

            <div className="buttons"> 
              <button onClick={handleSave} className='save-btn'>Save</button> 
            </div> 

            <div className="category">
              <h2>Category</h2>
              <div><input type="radio" name="cat" value="art" id="art" />
              <label htmlFor="art">Art</label></div>
              <div><input type="radio" name="cat" value="science" id="science" />
              <label htmlFor="science">Science</label></div>
              <div><input type="radio" name="cat" value="tech" id="tech" />
              <label htmlFor="tech">Technology</label></div>
              <div><input type="radio" name="cat" value="food" id="food" />
              <label htmlFor="food">Food</label></div>
              <div><input type="radio" name="cat" value="cinema" id="cinema" />
              <label htmlFor="cinema">Cinema</label></div>
            </div>
          </div>
        </div>  
      </div>
    </>
  )
}

export default Write;
