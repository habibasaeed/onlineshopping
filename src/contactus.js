import React, {useState} from 'react';

export const ContactUs = () => {
   const [email,setEmail]=useState('');
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
        return(
          <div className="content">
          <form >
            <label htmlFor="Name">Name:</label>
            <input type="text" id="Name" name="Name" required />
            <br />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={validateEmail} required />
            <br />
            <br />
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject"  required />
            <br />
            <br />
            <button type="submit" id="submit">Submit</button>
          </form>
        </div>
        );
        };




    