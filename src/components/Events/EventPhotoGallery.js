import React from 'react'
import PhotoGallery from '../Photos/PhotoGallery'
import Gallery from '../Photos/Gallery'

const EventPhotoGallery = (props) => {
    const { event } = props

    return (
        event.content.filter(c => c.slides).map(c => {
                const images = c.slides.map(s => s.file)
                return (
                    <PhotoGallery images={images} />
                )
            }
        )
    )

}

export default EventPhotoGallery