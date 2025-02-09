import { useState, useEffect } from 'react';
import '../App.css';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertyDisplay from '../components/PropertyDisplay';
import PreviewDisplay from '../components/PreviewDisplay';
import investBuilding from '/images/investmentsbuilding.png';
import GalleryCardGrid from '../components/GalleryCardGrid';
import GalleryData from '../GalleryData';

export default function PortfolioDetail() {
    return(
        <div className='port-detail-wrapper top-padding'>
            <div className='port-detail-nav u-container'>

            </div>
            <div className='port-detail-h-container'>
                <div className='port-detail-h-top'>
                    <span className='port-detail-eyebrow'>Residential</span>
                    <h1 className='port-detail-h'>Optima Old Orchard Woods</h1>
                </div>
                

            </div>
        </div>
    )
}