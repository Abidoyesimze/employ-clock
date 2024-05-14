import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./datePicker.css";

function ReactDatePicker() {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const filterWeekends = (date) => {
        // Return false if weekends should be disabled
        return date.getDay() !== 0 && date.getDay() !== 6;
    };

    return (
        <div className="date">
            <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="MM/dd/yyyy"
                filterDate={filterWeekends}
                showTimeSelect
                timeIntervals={30}
                timeFormat="hh:mm"
            />
            <button type="button" value="send" className="nextBtn">next</button>
        </div>
    );
}

export default ReactDatePicker;
