import React from "react";
import starEmptyImg from "./images/star-empty.png"
import starFilledImg from "./images/star-filled.png"

export default function Star(props) {
    const starIcon = props.isFilled ? starFilledImg : starEmptyImg
    return (
        <img 
            src={starIcon} 
            className="card--favorite"
            onClick={props.handleClick}
        />           
    )
}