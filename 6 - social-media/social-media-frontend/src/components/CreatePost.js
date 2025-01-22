import React, { useState } from 'react';
import axios from 'axios';

function CreatePost() {
  const [post, setPost] = useState({
    text: '',
    user: ''  // Normally, you'd get this from the user session
  });

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/posts', post, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Post created successfully!');
    } catch (error) {
      alert('Failed to create post. ' + error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Post</h2>
      <textarea name="text" value={post.text} onChange={handleChange} placeholder="What's on your mind?" required />
      <button type="submit">Post</button>
    </form>
  );
}

export default CreatePost;
