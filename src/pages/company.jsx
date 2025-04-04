import React from "react";
import CompanyInfo from "../components/CompanyInfo";
import CompanyCard from "../components/CompanyCard";
import CardGrid from "../components/CardGrid";
import PreviewDisplay from "../components/PreviewDisplay";
import Footer from "../components/Footer";

export function Company() {
    // Get the base URL from Vite's environment
    const basePath = import.meta.env.BASE_URL;
    
    // For preview display background image
    const propsImage = `${basePath}/images/p-display-img2.png`;
    
    return(
        <div className="company-wrapper">
            <div className="company-content">
                <div className="grid-pat"></div>
                <div className="company-content-inner u-container">
                    <span className="h-eyebrow">Company</span>
                    <h1 className="heading-5xl-book c-h">Exceptional is our standard.</h1>
                    <p className="p-xl-reg company-p">Trilogy is a multi-award-winning real estate investment and management firm.</p>
                </div>
            </div>
            <img 
                className="c-hero-img" 
                src={`${basePath}/images/hero-img.png`} 
                alt="Company hero image" 
            />
            <CompanyInfo />
            <div className="leadership-container u-container">
                <h2 className="l-h">Leadership</h2>
                <p className="l-p">Committed to our people, communities, and investments.</p>
            </div>
            <CardGrid />
            <PreviewDisplay 
                header="careers"
                paragraph="Voted one of National Apartment Association's top employers."
                backgroundImage={propsImage}
            />
            <Footer />
        </div>
    )
}