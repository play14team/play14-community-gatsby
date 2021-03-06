import React from 'react'
import {Link} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import EventDate from "./EventDate"

const EventsCard = () => {
    const events = useGetEvents()
    const icons = {
        "Announced" : "bx bx-calendar-exclamation",
        "Open" : "bx bx-calendar-plus",
        "Over" : "bx bx-calendar-check",
        "Canceled" : "bx bx-calendar-x",
    }
    return (
        <div className="events-area pb-70">
            <div className="container">
                <div className="row">
                    { events.map(event => {
                        return (
                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="single-events-box">
                                    <div className="image">
                                        <Link to={event.slug} className="d-block">
                                            <GatsbyImage image={getImage(event.defaultImage)} alt={event.name} />
                                        </Link>
                                        <span className="date">
                                            <EventDate start={event.start} end={event.end} />
                                        </span>
                                        <span className="status"><i className={icons[event.status]}></i> {event.status}</span>
                                    </div>

                                    <div className="content">
                                        <h3>
                                            <Link to={event.slug}>
                                                {event.name}
                                            </Link>
                                        </h3>
                                        <span className="location">
                                            <i className="bx bx-map"></i> {event.location ? `${event.location.name}, ${event.venue.name}` : "To be defined"}
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

const useGetEvents = () => {
    const { events } = useStaticQuery(
        graphql`
        query GetEvents {
            events: allStrapiEvent( sort: {fields:start, order: DESC} ) {
                nodes {
                    slug
                    name
                    start
                    end
                    location {
                        name
                    }
                    venue {
                        name
                    }
                    status
                    defaultImage {
                        childImageSharp {
                            gatsbyImageData(width: 380, height: 300)
                        }
                    }
                }
            }
        }
    `
    )
    return events.nodes
}

