import React from 'react'
import { Link } from 'gatsby'
import Moment from 'react-moment'
import 'moment-timezone'

const EventTimetable = (props) => {
    const { timetable } = props

    console.log(timetable)

    return (
        <div className="courses-curriculum">
            { 
                timetable.map(day => {
                    return (
                        <div>
                            <h3>{day.day}</h3>
                            {/* <span>{day.description}</span> */}
                            <ul>
                                {
                                    day.timeslots.map(slot => {
                                        console.log(slot.time)
                                        const time = slot.time.toString().substring(1, 5).padStart(5, '0')

                                        return (
                                            <li>
                                                <Link 
                                                    to="#"
                                                    className="d-flex justify-content-between align-items-center"
                                                >
                                                    <span className="courses-name">{slot.description}</span>
                                                    <div className="courses-meta">
                                                        <span className="duration">{time}</span>
                                                        <span className="status locked"><i className='bx bx-alarm'></i></span>
                                                    </div>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )}
                )
            }
        </div>
    )
}

export default EventTimetable