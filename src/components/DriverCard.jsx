import React from "react";
import { convertRating } from "./Rating";

const DriverCard=(props)=>{
 const {name, rating,img,car:{model,licensePlate}} = props;
 const stars = convertRating(rating)
 const driverStyle = {
    width: '70px',
    height: '70px',
    borderRadius: '50%',

 }

 return (
    <div className="driver-container">
        <div className="driver-img"><img src={img} alt="driverpic" style={driverStyle}/></div>
        <div className="driver-info">
            <h3>{name}</h3>
            <div className="starsDriver">{stars}</div>
            <p>{model}-{licensePlate}</p>
        </div>
    </div>
 )
}

export default DriverCard;