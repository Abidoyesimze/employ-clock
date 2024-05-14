import React from 'react';
import "./intro.css";

const intro = () => {
  return (
    <section id="intro">
      <div className="desktopMenuListItems">
      <a className='desktopMenuListItem' onClick={() =>{
            document.getElementById('intro').scrollIntoView({behavior: 'smooth'});
          }}>Home</a>
            <a className='desktopMenuListItem' onClick={() =>{
            document.getElementById('user').scrollIntoView({behavior: 'smooth'});
          }}>User</a>

      </div>
<div className="introContent">
    <h1>Welcome back</h1>
</div>

<div id="contact">
        <h3 className="contactPageTitle">Sign in</h3>
        <span className="contactDesc">Please fill out the form below to Login to clocking</span>
        <form className="contactForm">
          <input type="text" className="name" placeholder="Your name" name="your_name" />
          <input type="email" className="email" placeholder="Your Email" name="your_email" />
          <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
          <button type="submit" value="send" className="submitBtn">Login to clocking</button>
        </form>
      </div>
    </section>
    
  )
}

export default intro