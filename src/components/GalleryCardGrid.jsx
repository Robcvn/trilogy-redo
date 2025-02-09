import React from "react";
import GalleryCard from "./GalleryCard";
import GalleryData from "../GalleryData";
let count = 0;

export default function GalleryCardGrid() {
    const gCards = GalleryData.map(item => {
        count++;
        return(
            <GalleryCard
                key = {item.key}
                data = {item}
                count={count}
                {...item}
            />
            
        )
    }) 
    return(
        <div className="gallery-grid-wrapper">
            <div className="gallery-grid">
                {gCards}
            </div>
        </div>
    )
}