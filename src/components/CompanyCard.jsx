import React from "react";
import Data from "../Data";

export default function CompanyCard(props) {
    return(
        <div className="card" style={{ backgroundImage: `url(${props.cardImage})` }} >
            <div className="card-info-container">
                <div className="card-info">
                    <span className="card-name">{props.name}</span>
                    <span className="card-title">{props.title}</span>
                </div>
                <div className="p-btn-container">
                    <button className="plus-btn"><img src="/images/p-btn-icon.svg" alt="" /></button>
                </div>
            </div>
        </div>

    )
}