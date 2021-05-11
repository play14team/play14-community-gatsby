import React from 'react'

const SocialLinks = (props) => {
    const {socialNetworks, className}  = props
    return (
        <ul className={className}>
            {socialNetworks.map(s => {
                const imgName = "bx bxl-" + s.type.toLowerCase()
                const url = formatUrl(s)
                return (
                    <li key={s.type}>
                        <a href={url ? url : s.url} className="d-block" target="_blank" rel="noreferrer">
                            <i className={imgName}></i>
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}

const Urls = {
    "Twitter" : "https://twitter.com/" ,
    "LinkedIn" : "https://www.linkedin.com/in/",
    "Facebook" : "https://www.facebook.com/",
    "Youtube" : "https://www.youtube.com/",
    "Instagram" : "https://www.instagram.com/",
}

const formatUrl = (s) => {
    const root = Urls[s.type]

    if (!root)
        return s.url
    if (s.url.includes(root))
        return s.url

    const simplifiedRoot = root.replace("https://www.", "https://")
    if (s.url.includes(simplifiedRoot))
        return `${root}${s.url.replace(simplifiedRoot, "")}`
    
    return `${root}${s.url}`
}

export default SocialLinks;