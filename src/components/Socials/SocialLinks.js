import React from 'react'
import {Link} from 'gatsby'

const SocialLinks = (props) => {
    const {socialnetworks}  = props
    return (
        <ul className="social-link">
            {socialnetworks.map(s => {
                const imgName = "bx bxl-" + s.type.toLowerCase()
                return (
                    <li>
                        <Link to={s.url} className="d-block" target="_blank" rel="noreferrer">
                            <i className={imgName}></i>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default SocialLinks;