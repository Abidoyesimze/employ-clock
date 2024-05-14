import React from 'react';
import "./add.css"

const Add = () => {
  return (
    <div className='add-user'>
        <p>Add User</p>
        <div className='add-name'>
        <h4>Name</h4>
        <form className="add-name">
          <input type="text" className="add-name" placeholder="Add name" name="your_name" />
          </form>
          </div>
          <div className="add-email">
          <form className="add-mail">
          <input type="text" className="add-mail" placeholder="Add email" name="add_mail" />
          </form>
          </div>
          <div className="add-password">
            <form className="add-password">
                <input type="text" className='add-password' placeholder='Add password' name='add_password' />
            </form>
          </div>
          <div className="select">
            <form className='select'>
                <fieldset>
                <label><input type="checkbox" name="interest" value="admin" />Admin</label>
                    <label><input type="checkbox" name="interest" value="user" />User</label>     
                </fieldset>
            </form>
          </div>
          <button type="submit" value="send" className="closeBtn">close</button>
          <button type="submit" value="send" className="submitBtn">Add user</button>
    </div>
  )
}

export default Add