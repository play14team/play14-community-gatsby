import React from 'react'

const SocialLinks = (props) => {
    const {socialNetworks, className}  = props
    return (
        <ul className={className}>
            {socialNetworks.map(s => {
                const imgName = "bx bxl-" + s.type.toLowerCase()
                return (
                    <li key={s.type}>
                        <a href={s.url} className="d-block" target="_blank" rel="noreferrer">
                            <i className={imgName}></i>
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}

export default SocialLinks;