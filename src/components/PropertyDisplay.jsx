import React from "react";

export default function PropertyDisplay(){
    return(
        <div className="p-display-wrapper">
            <div className="p-display-container u-container">
                <div className="p-display-content">
                    <div className="address">
                        <p className="p-title">Optima Old Orchard Woods</p>
                        <div className="p-address">
                            <p>9739 Woods Drive</p>
                            <p>Skokie, IL</p>
                        </div>
                    </div>
                    <div className="p-buttons">
                        <a href="#" className="view-prop-link">VIEW PROPERTY</a>
                        <div className="p-display-btn-container">
                            <button className="left-arrow"><img className="left-arrow" src="\images\arrow-left.svg" alt="" /></button>
                            <div className="btn-text-container">
                                <span className="btn-text">1</span>
                                <span className="btn-text">/</span>
                                <span className="btn-text">5</span>
                            </div>
                            <button className="right-arrow"><img className="right-arrow" src="\images\arrow-right.svg" alt="" /></button>
                        </div>
                    </div>
                    <div className="p-buttons-mobile">
                        <a href="#" className="view-prop-link-mobile">VIEW PROPERTY</a>
                        <div className="p-display-btn-container">
                            <button className="left-arrow"><img className="left-arrow" src="\images\arrow-left.svg" alt="" /></button>
                            <button className="right-arrow"><img className="right-arrow" src="\images\arrow-right.svg" alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }