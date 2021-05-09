import React from 'react'
import { Link } from 'gatsby'

const EventTimetable = (props) => {
    const { timetable } = props

    return (
        <div className="courses-curriculum">
            { 
                timetable.map(day => {
                    return (
                        <div className="container">
                            <h3>{day.day}</h3>
                            {day.description}
                            <ul>
                                {
                                    day.timeslots.map(slot => {
                                        const timeString = slot.time.toString()
                                        const index = timeString.indexOf('.') - 3
                                        const time = timeString.substring(0, index)

                                        return (
                                            <li>
                                                <Link 
                                                    to="#"
                                                    className="d-flex justify-content-between align-items-center"
                                                >
                                                    <span className="courses-name">{slot.description}</span>
                                                    <div className="courses-meta">
                                                        <span className="status"><i className='bx bx-alarm'></i></span>
                                                        <span className="duration">{time}</span>
                                                    </div>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <br/>
                        </div>
                    )}
                )
            }
        </div>
    )
}

export default EventTimetable