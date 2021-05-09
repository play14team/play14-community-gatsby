import React from 'react'
import EventSidebar from './EventSidebar'
import Markdown from "markdown-to-jsx"
import Moment from 'react-moment';
import 'moment-timezone';
import EventDate from './EventDate'

const EventDescription = (props) => {
    const { event } = props
    const { number, street, postalCode, city, country } = event.venue.address

    return (
        <section className="events-details-area pb-100">

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <h3><EventDate start={event.start} end={event.end} /></h3>
                        <div className="events-details-header">
                            <ul>
                                <li><i className='bx bx-time'></i>Starts at <Moment format="HH:mm on MMM. DD">{event.start}</Moment></li>
                                <li><i className='bx bx-time-five'></i>Ends at <Moment format="HH:mm on MMM. DD">{event.end}</Moment></li>
                            </ul>
                            <ul>
                                <li><i className='bx bx-building'></i>{event.venue.name}</li>
                                </ul>
                            <ul>
                                <li><i className='bx bx-map'></i>{number} {street}, {postalCode} {city}, {country} </li>
                            </ul>
                        </div>

                        <div className="events-details-location">
                            <iframe src={event.venue.embeddedMapUrl}></iframe>
                        </div>

                        <div className="events-details-desc">
                            <Markdown>{event.description}</Markdown>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <EventSidebar event={event} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventDescription