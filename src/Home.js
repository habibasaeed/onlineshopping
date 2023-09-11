import'./Home.css';

import React, { useState } from 'react';

export const Home = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

 
  const validateEmail = (event) => {
    const newEmail = event.target.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(newEmail)) {
      event.target.setCustomValidity('Please enter a valid email address.');
    } else {
      event.target.setCustomValidity('');
    }
    setEmail(newEmail);
  };

  const validatePhone = (event) => {
    const newPhone = event.target.value.trim();
    const phonePattern = /^\d+$/;
    if (!phonePattern.test(newPhone)) {
      event.target.setCustomValidity('Please enter a valid phone number.');
    } else {
      event.target.setCustomValidity('');
    }
    setPhone(newPhone);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent form submission
  };
return(
  <div className="content">
  <form >
    <label htmlFor="userName">Username:</label>
    <input type="text" id="userName" name="userName" required />
    <br />
    <br />
    <label htmlFor="email">Email:</label>
    <input type="text" id="email" name="email" value={email} onChange={validateEmail} required />
    <br />
    <br />
    <label htmlFor="phone">Phone number:</label>
    <input type="text" id="phone" name="phone" value={phone} onChange={validatePhone} required />
    <br />
    <br />
    <button type="submit" id="login">Sign In</button>
  </form>
</div>
);
};