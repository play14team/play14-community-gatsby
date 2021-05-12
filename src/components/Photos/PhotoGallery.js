import React from 'react'
import {Link} from 'gatsby'
import Lightbox from 'react-image-lightbox'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PhotoGallery = (props) => {
    const [photoIndex, setPhotoIndex] = React.useState(0);
    const [isOpenImage, setIsOpenImage] = React.useState(false);
    const {images} = props

    return (
        <div className="gallery-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    {
                        images.map((image, i) => {
                            return (
                                <div key={`col${i}`} className="col-lg-4 col-md-6 col-sm-6">
                                    <div key={`item${i}`} className="single-gallery-item">
                                        <Link 
                                            key={`link${i}`}
                                            to="#"
                                            onClick={e => {
                                                e.preventDefault(); 
                                                setIsOpenImage(true); 
                                                setPhotoIndex(0);}
                                            }
                                        >
                                            <GatsbyImage key={`image${i}`} image={getImage(image)} alt={image.name} />
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
                    mainSrc={images[photoIndex].childImageSharp.gatsbyImageData.images.fallback.src}
                    nextSrc={images[(photoIndex + 1) % images.length].childImageSharp.gatsbyImageData.images.fallback.src}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length].childImageSharp.gatsbyImageData.images.fallback.src}
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