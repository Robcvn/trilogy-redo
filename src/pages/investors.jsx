import React from "react";
import PreviewDisplay from "../components/PreviewDisplay.jsx";
import Footer from "../components/Footer";
import bgImage from "/images/investmentsbuilding.png"


export function Investors() {
    return(
        <div className="investors-wrapper top-padding">
            <div className="grid-pat"></div>
            <div className="investors-h-container u-container">
                <div className="col-one">
                    <h1 className="res-h">For Investors</h1>
                    <p className="res-h-p">Truly market driven.<br /> Fully integrated.<br /> Proudly independent.</p>

                </div>
                <div className="col-two">
                    <div className="t-block">
                        <h1 className="invest-p-h">Trilogy Fund Investors</h1>
                        <p className="invest-p">We’re driven by market opportunity, not geography. Our size and structure give us the flexibility to find the best opportunities on behalf of our investors, and allows us to provide quality housing to residents looking to live well. Trilogy’s extensive professional network and strong industry relationships, combined with its track record of execution and performance, provide investment opportunities not available to the general investment community.</p>
                    </div>
                    <div className="t-block">
                        <h1 className="invest-p-h">1031/DST Investors</h1>
                        <p className="invest-p">Trilogy Real Estate Group provides DST investors timely updates on their Trilogy DST investment programs. To access your investment information please click the link below. To contact Investor Services by phone please call 847-265-1334.</p>
                    </div>
                    <a className="log-link" href="#">log in</a>
                </div>
            </div>
            <div className="ap-p-display-wrapper">
                <div className="prev-display-container u-container">
                    <h3 className="prev-h">Investments</h3>
                    <p className="prev-p">A track record of performance and opportunity.</p>
                    <div className="contact-link-container">
                        <a href="#" className='contact-link'>contact us</a>
                    </div>
                </div>
            </div>
            <Footer />
            

        </div>
        
    )
}