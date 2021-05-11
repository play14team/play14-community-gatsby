import React from 'react'

const CaseStudiesSidebar = (props) => {
    const {player} = props
    return (
        <div className="case-studies-sidebar-sticky">
            <div className="case-studies-details-info">
                <ul>
                    <li>
                        <div className="icon">
                            <i className='bx bx-user-pin'></i>
                        </div>
                        <span>Role</span>
                        {player.role}
                    </li>
                    <li>
                        <div className="icon">
                            <i className='bx bx-building'></i>
                        </div>
                        <span>Company</span>
                        {player.company}
                    </li>
                    <li>
                        <div className="icon">
                            <i className='bx bx-globe'></i>
                        </div>
                        <span>Website:</span>
                        <a href={player.website} target="_blank" rel="noreferrer">{player.website}</a>
                    </li>
                    <li>
                        <div className="icon">
                            <i className='bx bx-map'></i>
                        </div>
                        <span>Location</span>
                        {player.city}
                    </li>
                </ul>
                <br></br>
                <div className="events-details-location">
                    <iframe title="Map" src={player.embeddedMapUrl}></iframe>
                </div>
            </div>
        </div>
    )
}

export default CaseStudiesSidebar