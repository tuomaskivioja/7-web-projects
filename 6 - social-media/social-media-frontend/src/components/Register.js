import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users/register', userData);
      alert('Registration successful!');
    } catch (error) {
      alert('Failed to register. ' + error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input type="text" name="username" value={userData.username} onChange={handleChange} placeholder="Username" required />
      <input type="email" name="email" value={userData.email} onChange={handleChange} placeholder="Email" required />
      <input type="password" name="password" value={userData.password} onChange={handleChange} placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
