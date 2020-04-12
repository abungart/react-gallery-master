import React, { Component } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

class GalleryList extends Component {
  render() {
    const displayGallery = this.props.galleryList.map((item, index) => {
      return (
        <GalleryItem
          key={index}
          item={item}
          updateLike={this.props.updateLike}
        />
      );
    });
    console.log(displayGallery);

    return <div>{displayGallery}</div>;
  }
}

export default GalleryList;
