import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Calendars() {
    return (
        <div padding= '1rem'>
            <div elevation={3}>
                <Calendar 
                    background-color= '#FFFFFF'
                    border-radius= '6px'>
                </Calendar>
            </div>
        </div>
    )
}