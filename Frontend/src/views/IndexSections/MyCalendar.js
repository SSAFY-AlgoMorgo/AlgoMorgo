import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../../assets/css/Calendar.css';


function MyCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div className='my-5'>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default MyCalendar;
