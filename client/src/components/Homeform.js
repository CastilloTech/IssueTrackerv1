import React from 'react';

function Homeform() {
  return (
    <div>
      <label htmlFor='projectname'>Project Name:</label>
      <input type="text" id="projectname"/>
      <br/>
      <label htmlFor="status">Status:</label>
      <input type="text" id="status"/>
      <br/>
      <label htmlFor="priority">Priority:</label>
      <input type="text" id="priority"/>
      <br/>
      <label htmlFor="description">Description:</label>
      <input type="text" id="description"/>
      <br/>
      <label htmlFor="action">Action Required:</label>
      <input type="text" id="action"/>
      <br/>
      <label htmlFor="date">Date Created/Due Date:</label>
      <input type="text" id="date"/>
      <br/>
    </div>
  );
}

export default Homeform;