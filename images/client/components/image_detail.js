
import React from "react";


const ImageDetail = () =>{

    // props.picture => this is the image object
    // props.picture.title
    // props.picture.link

    retrun (
        <li>
            <img src={props.image.link} />
            {props.picture.title}

            </li>

    );

}


export default ImageDetail;


