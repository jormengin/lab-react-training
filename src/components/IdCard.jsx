import React from "react";



const IdCard =(props)=>{
    const {firstName, lastName, gender, picture, height,birth} = props;
    const formattedBirth = new Date(birth).toLocaleDateString();
    return (
        <div className="card-container">
            <img src={picture} alt={firstName} />
            <div className="user-content">
                <ul>
                    <li><p>First name: {firstName}</p></li>
                    <li><p>Last name: {lastName}</p></li>
                    <li><p>Gender: {gender}</p></li>
                    <li><p>height: {height}</p></li>
                    <li><p>Birth: {formattedBirth}</p></li>
                </ul>
            </div>
        </div>
    )
}

export default IdCard