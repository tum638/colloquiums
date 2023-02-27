import React from "react";

const Card = (props) => {
    return (
        <div className="card">
            <div className="cardheader">
                <img className="image" src={props.image} alt="" />
            </div>
                <h5 className="professorname">{props.prof}</h5>
                <p className="description">
                    {props.title}
                </p>
              
            
            <div className="cardbutton">
                View More
            </div>
            <div className="footer">
             <p className="footernotes">Location: { props.location}</p>
            <p className="footernotes">Date: {props.date}</p>
            </div>
           
            </div>
    )
}
export default Card;