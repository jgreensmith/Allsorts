import React from 'react';
import './calendar.scss';

const Calendar = () => {
    return (
        <section className="section secondary">
            <div className="block-container">
                <h1 className="main-title heading">School Calendar</h1>
                <div className="calendar-wrapper">
                    <iframe className="calendar" src="https://calendar.google.com/calendar/embed?src=bip4blhphj4um5dj73dl681jt8%40group.calendar.google.com&ctz=Europe%2FLondon"></iframe>
                </div>
            </div>
        </section>
    )
}

export default Calendar;