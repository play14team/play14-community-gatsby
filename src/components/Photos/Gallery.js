import React, { Component } from 'react'
import Img from 'gatsby-image'
import Lightbox from 'react-image-lightbox'

class Gallery extends Component {
    constructor(props) {
      super(props);
      this.state = {
        shareOpen: false,
        anchorEl: null,
        lightbox: false,
        photos: props.photos.map(photo => Object.assign({ srcSet: photo.childImageSharp.fluid.srcSet })),
      };
    }
  
    gotoPrevLightboxImage() {
      const { photo } = this.state;
      this.setState({ photo: photo - 1 });
    }
  
    gotoNextLightboxImage() {
      const { photo } = this.state;
      this.setState({ photo: photo + 1 });
    }
  
    openLightbox(photo, event) {
      event.preventDefault();
      this.setState({ lightbox: true, photo });
    }
  
    closeLightbox() {
      this.setState({ lightbox: false });
    }
  
    render() {
      const { photos } = this.props;
      return (
        <div>
          <div>
            {photos.map((photo, i) => (
              <a href={photo.childImageSharp.fluid.src} onClick={e => this.openLightbox(i, e)}>
                <Img key={i} fluid={photo.childImageSharp.fluid} />
              </a>
            ))}
          </div>
          <Lightbox
            backdropClosesModal
            images={this.state.photos}
            currentImage={this.state.photo}
            isOpen={this.state.lightbox}
            onClickPrev={() => this.gotoPrevLightboxImage()}
            onClickNext={() => this.gotoNextLightboxImage()}
            onClose={() => this.closeLightbox()}
          />
        </div>
      );
    }
  }

  export default Gallery