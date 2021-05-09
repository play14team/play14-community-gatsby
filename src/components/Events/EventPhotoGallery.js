import React from 'react'
import PhotoGallery from '../Photos/PhotoGallery'

const EventPhotoGallery = (props) => {
    const { images } = props

    return (
        <PhotoGallery images={images} />
    )
}

export default EventPhotoGallery