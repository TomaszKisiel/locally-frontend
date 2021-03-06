import React from 'react';
import Picture from '../picture/Picture.js';

const GalleryPanel = ({images, title}) => {
  
  return <div className="uk-container">
    <h2 className="uk-margin-medium-top uk-text-bolder uk-text-uppercase ">
  {title}
      </h2>
    <div
      className="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match uk-grid"
      uk-grid="true">

      {images.map((img, i) => <Picture imageUrl={img} key={i}/>)}

    </div>
  </div>

}

export default GalleryPanel;