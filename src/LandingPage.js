
import React from 'react'
import videobg from './assets/island_bg.mp4'
import { ImSearch } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import logo from './assets/logog.png'
import { FaUserAlt } from "react-icons/fa"
import bg_1 from './assets/destination-1.webp'
import bg_2 from './assets/destination-2.jpg'
import bg_3 from './assets/destination-3.jpg'

const landingPage = () => {
    return (
        <div className='main'>
            <video src={videobg} autoPlay loop muted />

            <div class="container">

                <nav>
                    <div class="nav__logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <ul class="nav__links">
                        <li class="link" id="home" ><a href="#">Home</a></li>
                        <li class="link" id='destinations'><a href="#">Destinations</a></li>
                        <li class="link" id='contact'><a href="#">Contact_Us</a></li>
                        <li class="link" id='blog'><a href="#">Blog</a></li>
                    </ul>
                    <div class="search">
                        <input type="text" placeholder="Search" />
                        <span><i><ImSearch /></i></span>
                    </div>
                    <div class="login">
                        <span><FaUserAlt /></span>
                        <i>Log_In</i>
                    </div>
                </nav>
                <div class="destination__container">
                    <img class="bg__img__1" src="assets/bg-dots.png" alt="bg" />
                    <img class="bg__img__2" src="assets/bg-arrow.png" alt="bg" />
                    <div class="socials">

                        <span><i ><a href="https://www.facebook.com/" className='fb'><FaFacebookSquare /></a></i></span>
                        <span><i ><a href="https://www.instagram.com/_iamgowtham._/" className='insta'><GrInstagram /></a></i></span>
                        <span><i className="tw"><a href="https://twitter.com/" className='tw'><FaTwitter /></a></i></span>
                        <span><i ><a href="https://www.youtube.com/" className='yt'> <FaYoutube /></a></i></span>
                    </div>
                    <div class="content">
                        <h1>EXPLORE<br />DREAM<br /><span>DESTINATION</span></h1>
                        <p>
                            It encourages exploration of unfamiliar territories, embracing
                            diverse cultures and landscapes, while pursuing the desired
                            destination that captivates the heart and ignites a sense of wonder.
                        </p>
                        <button class="btn">BOOK NOW</button>
                    </div>
                    <div class="destination__grid">
                        <div className=' card1'>
                            <div class="destination__card">
                                <img src={bg_1} alt="destination" />
                                <div class="card__content">
                                    <h4>10 Must-Visit Hidden Gems</h4>
                                    <p>
                                        Discover off-the-beaten-path locations and hidden gems within
                                        dream destinations, taking you beyond the typical tourist spots.
                                    </p>
                                    <button class="btn">Read More</button>
                                </div>
                            </div>
                        </div>
                        <div className="card2">
                            <div class="destination__card">
                                <img src={bg_2} alt="destination" />
                                <div class="card__content">
                                    <h4>Immersive Cultural Experiences</h4>
                                    <p>
                                        Dive deep into the vibrant cultures of dream destinations,
                                        showcasing the rituals, traditions, and local customs that make
                                        these places truly unique.
                                    </p>
                                    <button class="btn">Read More</button>
                                </div>
                            </div>
                        </div>
                        <div className="card3">

                            <div class="destination__card">
                                <img src={bg_3} alt="destination" />
                                <div class="card__content">
                                    <h4>From Dreams to Reality</h4>
                                    <p>
                                        Explore expert tips, and hidden gems, ensuring every moment of
                                        your trip is optimized, and make the most of time in your
                                        long-awaited dream location.
                                    </p>
                                    <button class="btn">Read More</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default landingPage
