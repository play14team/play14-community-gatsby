import React from 'react'
import EventSidebar from './EventSidebar'
import Markdown from "markdown-to-jsx"
import Moment from 'react-moment';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import 'moment-timezone';
import EventDate from './EventDate'

const EventDescription = (props) => {
    const { event } = props

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
                            { event.venue ? 
                                <ul>
                                    <li><i className='bx bx-building'></i>{event.venue.name}</li>
                                </ul>
                                : ''
                            }
                            { event.venue && event.venue.address ? 
                                <ul>
                                    <li>
                                        <i className='bx bx-map'></i>
                                        {event.venue.address.number} {event.venue.address.street}, 
                                        {event.venue.address.postalCode} {event.venue.address.city}, {event.venue.address.country} 
                                    </li>
                                </ul>
                                : ''
                            }
                        </div>
                        { event.venue ?
                            <div className="events-details-location">
                                <iframe title="Map" src={event.venue.embeddedMapUrl}></iframe>
                            </div>
                          : ''
                        }

                        {
                            event.content.map((c, i) => {
                                if (c.markdown) {
                                    return (
                                        <div className="events-details-desc">
                                            <Markdown key={`markdown${i}`} >{c.markdown}</Markdown>
                                        </div>
                                    )
                                }
                                if (c.embeddedVideo) {
                                    return (
                                        <div className="events-details-desc">
                                            <iframe src={c.embeddedVideo} title="Video" width="100%" height="480" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                    )
                                }
                                if (c.slides)
                                {
                                    return (
                                        <div className="events-details-image">
                                            {
                                                c.slides.map((slide, i) => {
                                                    return (<GatsbyImage key={`image${i}`} image={getImage(slide.file)} alt={slide.file.name} />)       
                                                })
                                            }
                                        </div>
                                    )
                                }
                                return ('')
                            })
                        }

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