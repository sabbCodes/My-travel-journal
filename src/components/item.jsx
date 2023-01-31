import React from "react";

function Item(props){
    return (
        <div className="items">
            <img src={props.imageUrl} className="item--image" />
            <div className="content">
                <img src="./icon.png" className="icon" />
                <span className="location">
                    {props.location}
                </span>
                <span className="google-map">
                    <a href={props.googleMapsUrl} target="_blank">View on google map</a>
                </span>
                <h1>{props.title}</h1>
                <h2>{props.startDate} - {props.endDate}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Item