import React, { useEffect }  from 'react';

import paris from '../../assets/paris.jpg';
import new_york from '../../assets/new_york.jpg';
import dubai from '../../assets/dubai.jpg';
import london from '../../assets/london.jpg';

import traverler1 from '../../assets/user1.jpg';
import traverler2 from '../../assets/user2.jpg';
import traverler3 from '../../assets/user3.jpg';
import traverler4 from '../../assets/user4.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Travelers() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div className="travelers container section">
            <div className="sectionContainer">
                <h2 data-aos="fade-down" data-aos-duration="2500">
                    Top travelers of this month!
                </h2>

                <div className="travelersContainer grid">
                    <div data-aos="fade-down" data-aos-duration="2500" className="singleTraveler">
                        <img src={paris} className="destinationImage" />
                        <div className="travelerDetails">
                            <div className="travelerPicture">
                                <img src={traverler1} className="travelerImage" />
                            </div>
                            <div className="travelerName">
                                <span>IsraTech</span>
                                <p>@isratech8</p>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-down" data-aos-duration="2500" className="singleTraveler">
                        <img src={london} className="destinationImage" />
                        <div className="travelerDetails">
                            <div className="travelerPicture">
                                <img src={traverler2} className="travelerImage" />
                            </div>
                            <div className="travelerName">
                                <span>Ironman</span>
                                <p>@TonyTeo:</p>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-down" data-aos-duration="2500" className="singleTraveler">
                        <img src={new_york} className="destinationImage" />
                        <div className="travelerDetails">
                            <div className="travelerPicture">
                                <img src={traverler3} className="travelerImage" />
                            </div>
                            <div className="travelerName">
                                <span>Jisoo</span>
                                <p> @Jis00</p>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-down" data-aos-duration="2500" className="singleTraveler">
                        <img src={dubai} className="destinationImage" />
                        <div className="travelerDetails">
                            <div className="travelerPicture">
                                <img src={traverler4} className="travelerImage" />
                            </div>
                            <div className="travelerName">
                                <span>Jungkook</span>
                                <p>@Jungkoook8</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Travelers;
