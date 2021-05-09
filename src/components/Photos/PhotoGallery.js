import React from 'react'
import {Link} from 'gatsby'
import Lightbox from 'react-image-lightbox'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PhotoGallery = (props) => {
    const [photoIndex, setPhotoIndex] = React.useState(0);
    const [isOpenImage, setIsOpenImage] = React.useState(false);
    const images = props.images.map(i => i.formats.small)
    console.log(images)

    return (
        <div className="gallery-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    {
                        images.map(image => {
                            return (
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-gallery-item">
                                        <Link 
                                            to="#"
                                            onClick={e => {
                                                e.preventDefault(); 
                                                setIsOpenImage(true); 
                                                setPhotoIndex(0);}
                                            }
                                        >
                                            <GatsbyImage image={getImage(image)} />
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* Lightbox */}
            {isOpenImage && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpenImage(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % images.length)
                    }
                />
            )}
        </div>
        
    );
}

export default PhotoGallery