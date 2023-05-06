import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DateExample = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
    return (
        <div className="mt-6">
            <DatePicker
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
            />
            <div className="text-start mt-4">
                <p>Select your Dive Type * </p>
                <input type="radio" value="Try Dive" name="gender" /> Try Dive <br />
                <input type="radio" value="Discover Scuba Dive (PADI) (+₹2,000)" name="gender" /> Discover Scuba Dive (PADI) (+₹2,000)
                <div className="divider"></div>
                <div className="text-end">
                    <p className="btn btn-accent ml-auto">Book Now</p>
                </div>
            </div>
        </div>
    );
};

export default DateExample;