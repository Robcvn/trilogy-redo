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

export function Portfolio() {
    const [count, setCount] = useState(0); 

    useEffect(() => {
        setCount(GalleryData.length); 
    }, []);

    return (
        <div className='port-main-container'>
            <div className="grid-pat"></div>
            <div className="port-content u-container p-grid">
                <div className="h-links h-fp">
                    <div className="feat-prop">
                        <a href="#"><img src="\images\arrow-long-down.svg" className="arrow-down" alt="gold arrow pointing down" /></a>
                        <a href="#">featured properties</a>
                    </div>
                </div>
                <div className="port-content-inner">
                    <div className='port-inner-left'>
                        <h1 className="heading-5xl-book p-h">Everyone deserves to live well.</h1>
                        <div className='p-stats'>
                            <div className='stat-block-one'>
                                <h2 className='stat-h'>20+ Years</h2>
                                <p className='stat-p'>of operational excellence across every market cycle</p>
                            </div>
                            <div className='stat-block-two'>
                                <h2 className='stat-h'>14 cities</h2>
                                <p className='stat-p'>across the United States</p>
                            </div>
                            <div className='stat-block-three'>
                                <h2 className='stat-h'>$4.5 billion</h2>
                                <p className='stat-p'>in real estate volume</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PropertyDisplay />
            <section className='all-props'>
                <div className='all-props-content u-container'>
                    <div className='mini-nav'>
                        <div className='ap-h-wrapper'>
                            <h2 className='ap-h'>All Properties</h2>
                            <span className='ap-counter'>[{count}]</span>
                        </div>
                        <div className='mini-nav-items'>
                            <button className='mini-nav-btn overline-sm-medium'>all</button>
                            <button className='mini-nav-btn overline-sm-medium'>current</button>
                            <button className='mini-nav-btn overline-sm-medium'>development</button>
                            <button className='mini-nav-btn overline-sm-medium'>legacy</button>
                        </div>
                    </div>
                    <GalleryCardGrid />
                    <div className='ap-gallery-btns'>
                        <button className='ap-btn-left'></button>
                        <div className='gallery-pag-btns'>
                            <button className='g-pag-btn active'></button>
                            <button className='g-pag-btn'></button>
                            <button className='g-pag-btn'></button>
                            <button className='g-pag-btn'></button>
                        </div>
                        <div className='ap-mid-btns-container'>
                            <button className='ap-mid-btn active'>1</button>
                            <button className='ap-mid-btn'>2</button>
                            <button className='ap-mid-btn'>3</button>
                            <button className='ap-mid-btn'>4</button>
                        </div>
                        <button className='ap-btn-right'></button>
                    </div>
                </div>
            </section>
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
    );
}
