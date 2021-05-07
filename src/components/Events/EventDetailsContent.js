import React from 'react'
import UpcomingEventTimer from './UpcomingEventTimer'
import EventSidebar from './EventSidebar'
import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment';
import 'moment-timezone';

import { GatsbyImage, getImage } from "gatsby-plugin-image"

const EventDetailsContent = (props) => {
    const { event } = props
    const { number, street, postalCode, city, country } = event.venue.address

    return (
        <section className="events-details-area pb-100">
            <div className="events-details-image">
                <GatsbyImage image={getImage(event.defaultImage)} alt={event.name} />
                {
                    new Date(event.start) > new Date() ? <UpcomingEventTimer date={event.start} /> : ''
                }
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <h3>{event.date}</h3>
                        <div className="events-details-header">
                            <ul>
                                <li><i className='bx bx-calendar'></i><Moment format="MMM DD, YYYY">{event.start}</Moment> at <Moment format="hh:mm">{event.start}</Moment></li>
                                <li><i className='bx bx-time'></i><Moment format="MMM DD, YYYY">{event.end}</Moment>at <Moment format="hh:mm">{event.end}</Moment></li>
                                <li><i className='bx bx-building'></i>{event.venue.name}</li>
                                <li><i className='bx bx-map'></i>{number} {street}, {postalCode} {city}, {country} </li>
                            </ul>
                        </div>

                        <div className="events-details-location">
                            <iframe src={event.venue.embeddedMapUrl}></iframe>
                        </div>

                        <div className="events-details-desc">
                            <ReactMarkdown>{event.description}</ReactMarkdown>
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

export default EventDetailsContent