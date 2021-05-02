import React from 'react'
import {Link} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import event1 from '../../assets/images/events/event1.jpg'
import { useGetEvents } from '../../hooks/use-get-events'

const EventsCard = () => {
    const events = useGetEvents()
    return (
        <div className="events-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    { events.map(event => {
                        console.log(event.pictures[0].name)
                        console.log(event.pictures[0].formats.small)

                        return (
                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="single-events-box">
                                    <div className="image">
                                        <Link to="/event-details" className="d-block">
                                            {/* <img src={event1} alt="event" /> */}
                                            <GatsbyImage image={getImage(event.pictures[0].formats.small)} alt={event.pictures[0].name} />
                                        </Link>
                                        <span className="date">{event.date}</span>
                                    </div>

                                    <div className="content">
                                        <h3>
                                            <Link to="/event-details">
                                                {event.name}
                                            </Link>
                                        </h3>
                                        <span className="location">
                                            <i className="bx bx-map"></i> {event.location.name}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                    )}
                </div>
            </div>
        </div>
    )
}

export default EventsCard