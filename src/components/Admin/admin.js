import React from 'react';
import "./admin.css";

const admin = () => {
  return (
    
    <div className="user">
    <div className='name-ad'>
        <h3>Name</h3>
        <form className="name-ad">
          <input type="text" className="name-ad" placeholder="Enter name" />
          <input type="text" className="name-ad" placeholder="Enter name" />
          </form>
  </div>
  <div className='g-mail'>
    <h3>G-mail</h3>
    <form className="g-mail">
          <input type="text" className="naming" placeholder="Enter gmail" />
          <input type="text" className="naming" placeholder="Enter gmail" />
          </form>
  </div>
  <div className="role">
    <h3>role</h3>
    <form className="role">
          <input type="text" className="role" placeholder="Your role" name="your_role" />
          <input type="text" className="role" placeholder="Your role" name="your_role" />
          </form>
</div>
<div className='contact'>
    <h3>contact</h3>
    <form className="gmail">
        <input type="number" className="contact" placeholder="Your contact" number="your_contact" /><button type="submit" value="send" className="deleteBtn">Delete</button>
        <input type="number" className="contact" placeholder="Your contact" number="your_contact" /><button type="submit" value="send" className="deleteBtn">Delete</button>
    </form>
</div><br />
<br />
<button type="submit" value="send" className="addBtn">Add user</button>
    </div>
    
  )
}

export default admin