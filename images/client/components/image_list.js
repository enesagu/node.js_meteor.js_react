// create our image list component
// Import React

import React from "react";
import ImageDeatil from "./image_detail";


const IMAGES = [
    { title: 'Pen', link: 'https://dummyimage.com/600x400'},
    { title: 'Pine Tree', link: 'https://dummyimage.com/600x400'},
    { title:'Mug', link: 'https://dummyimage.com/600x400'}
]

// Create our component


const ImageList = () =>{

    const RenderedImages = IMAGES.map(function(image){
        return <ImageDeatil picture={image} />
    })


    return (
        <ul className="media-list list-group">
            RenderedImages
            {RenderedImages}
        </ul>
    );
}

// Export our component


export default ImageList;
