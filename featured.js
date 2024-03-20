import React, { useEffect } from 'react';
import WOW from 'wow.js';
import './featured.css'; // Import CSS file for styling

const Featured = () => {
    useEffect(() => {
        const wow = new WOW();
        wow.init();
    }, []);

    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                        <div className="feature-item position-relative bg-primary text-center p-3">
                            <div className="border py-5 px-3">
                                <i className="fa fa-leaf fa-3x text-dark mb-4"></i>
                                <h5 className="text-white mb-0">Pure Silajeet</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                        <div className="feature-item position-relative bg-primary text-center p-3">
                            <div className="border py-5 px-3">
                                <i className="fa fa-tint-slash fa-3x text-dark mb-4"></i>
                                <h5 className="text-white mb-0">Strengthen Hair</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                        <div className="feature-item position-relative bg-primary text-center p-3">
                            <div className="border py-5 px-3">
                                <i className="fa fa-times fa-3x text-dark mb-4"></i>
                                <h5 className="text-white mb-0">Boost Immunity</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featured;