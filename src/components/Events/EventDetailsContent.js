import React from 'react'
import EventDescription from './EventDescription'
import EventPlayers from './EventPlayers'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import UpcomingEventTimer from './UpcomingEventTimer'

const EventDetailsContent = (props) => {
    const { event } = props

    const openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }

    return (
        <div className="row">
            <div className="col-lg-12 col-md-12">

                <div className="events-details-image">
                    <GatsbyImage image={getImage(event.defaultImage)} alt={event.name} />
                    {
                        new Date(event.start) > new Date() ? <UpcomingEventTimer date={event.start} /> : ''
                    }
                </div>

                <div className="container">
                    <div className="courses-details-desc">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li
                                className="current"
                                onClick={(e) => openTabSection(e, 'tab1')}
                            >
                                Description
                            </li>
                            <li
                                onClick={(e) => openTabSection(e, 'tab2')}
                            >
                                Players
                            </li>
                            <li
                                onClick={(e) => openTabSection(e, 'tab3')}
                            >
                                Time table
                            </li>
                            <li
                                onClick={(e) => openTabSection(e, 'tab4')}
                            >
                                Photos
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div id="tab1" className="tab-pane tabs_item">
                                <EventDescription event={event} />

                            </div>
                            <div id="tab2" className="tab-pane tabs_item">
                                <EventPlayers players={event.hosts} name="Hosts" />
                                <EventPlayers players={event.mentors} name="Mentors" />
                                <EventPlayers players={event.players} name="Players" />
                            </div>
                            <div id="tab3" className="tab-pane tabs_item">
                                <h3>Comming soon</h3>
                            </div>
                            <div id="tab4" className="tab-pane tabs_item">
                                <h3>Comming soon</h3>
                            </div>
                        </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default EventDetailsContent