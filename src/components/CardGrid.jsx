import React from "react";
import CompanyCard from "./CompanyCard";
import Data from "../Data";


export default function CardGrid() {
    const cards = Data.map(item => {
        return(
          <CompanyCard 
          key = {item.key}
          {...item}
          />
        )
      })
    return(
      <div className="card-grid-wrapper">
        <div className="grid-grid"></div>
        <div className="card-grid u-container">
          {/* <div className="sub-grid"> */}
            {cards}
          {/* </div> */}
        </div>
      </div>
    )
}