import React from 'react'
import {Link} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { useGetEvents } from '../../hooks/use-get-events'

const EventsCard = () => {
    const events = useGetEvents()
    return (
        <div className="events-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    { events.map(event => {
                        return (
                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="single-events-box">
                                    <div className="image">
                                        <Link to={event.slug} className="d-block">
                                            <GatsbyImage image={getImage(event.images[0].formats.small)} alt={event.images[0].alternativeText} />
                                        </Link>
                                        <span className="date">{event.date}</span>
                                    </div>

                                    <div className="content">
                                        <h3>
                                            <Link to={event.slug}>
                                                {event.name}
                                            </Link>
                                        </h3>
                                        <span className="location">
                                            <i className="bx bx-map"></i> {event.location.name}, {event.venue.name}
                                            <i className="bx bx-chevrons-right"></i> {event.status}
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