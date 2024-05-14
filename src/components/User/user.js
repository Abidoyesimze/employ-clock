import React from 'react';
import  "./user.css";

const user = () => {
  return (
    <div className="wrapper">
       <div className ="admin">
       <h2> Users </h2>
         <h4> Admin</h4>
        <form className="gmail">
         <input type='name' placeholder="Your Email" name="your_email" /> 
            </form>
     </div>
     <div className='logs'>
      <h2>Logs for May,2024</h2>
      <form className="logs">
        <input type="number" placeholder='input the date of arrival' date="your_date" /><br />
        <input type="number" placeholder='input the date of arrival' date="your_date" /><br />
        <input type="number" placeholder='input the date of arrival' date="your_date" /><br />
        <input type="number" placeholder='input the date of arrival' date="your_date" /><br />
        <input type="number" placeholder='input the date of arrival' date="your_date" /><br />
      </form>
     </div>
     <div className='time-in'>
      <h2>Time in</h2>
      <form className="time-in">
        <input type='number' placeholder='input time in' Time="7:00am" /><br />
        <input type='number' placeholder='input time in' Time="7:00am" /><br />
        <input type='number' placeholder='input time in' Time="7:00am" /><br />
        <input type='number' placeholder='input time in' Time="7:00am" /><br />
        <input type='number' placeholder='input time in' Time="7:00am" /><br />
      </form>
     </div>
     <div className="time-out">
      <h2>Time out</h2>
      <form className="time-out">
        <input type="number" placeholder="input time out" Time="6:30pm" /><br />
        <input type="number" placeholder="input time out" Time="6:30pm" /><br />
        <input type="number" placeholder="input time out" Time="6:30pm" /><br />
        <input type="number" placeholder="input time out" Time="6:30pm" /><br />
        <input type="number" placeholder="input time out" Time="6:30pm" /><br />
      </form>
     </div>
        

       
            
                                

</div>

  )
}

export default user