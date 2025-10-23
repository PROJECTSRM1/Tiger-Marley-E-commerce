import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-columns">
                {/* STORE LOCATIONS */}
                <div className="footer-section">
                    <h6 className="footer-heading">OUR STORE LOCATIONS</h6>
                    <p><strong>INDIA</strong></p>
                    <p>
                        <a
                            href="https://www.google.com/maps/place/RM1+Coders+Hub+Software+Solutions/@17.4388193,78.362243,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb939abff8fd53:0xff680076b0643acd!8m2!3d17.4388193!4d78.3648179!16s%2Fg%2F11rq950c74?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Office -2 , 8th floor, vasavi sky city, Telecom Nagar, Gachibowli, Hyderabad, Telangana 500032
                        </a>
                    </p>
                    <p>
                        Our Store is open from Wednesday to Monday and the timings are 12:00 p.m to 08:00 p.m.
                        The store is closed on Tuesdays.
                    </p>
                    <br />
                    <p><strong>UAE</strong></p>
                    <p>
                        <a
                            href="https://g.co/kgs/CFVFzrG"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Wafi City, Dubai, United Arab Emirates
                        </a>
                    </p>
                    <p>
                        <a
                            href="https://g.co/kgs/MgFT4Nf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Yas mall, Abu Dhabi, United Arab Emirates
                        </a>
                    </p>
                </div>

                {/* BAGS */}
                <div className="footer-section">
                    <h6 className="footer-heading">BAGS</h6>
                    <ul>
                        <li><a href="#">Laptop Bags</a></li>
                        <li><a href="#">Backpacks</a></li>
                        <li><a href="#">Crossbody Bags</a></li>
                        <li><a href="#">Tote</a></li>
                    </ul>
                </div>

                {/* ACCESSORIES */}
                <div className="footer-section">
                    <h6 className="footer-heading">ACCESSORIES</h6>
                    <ul>
                        <li><a href="#">Card Holders</a></li>
                        <li><a href="#">Passport Holders</a></li>
                        <li><a href="#">Laptop Sleeves</a></li>
                        <li><a href="#">Key Chains</a></li>
                    </ul>
                </div>

                {/* INFORMATION */}
                <div className="footer-section">
                    <h6 className="footer-heading">INFORMATION</h6>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Bespoke</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Blogging</a></li>
                        <li><a href="#">Sitemap</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Shipping & Delivery Policy</a></li>
                        <li><a href="#">Return Policy</a></li>
                        <li><a href="#">Cancellations</a></li>
                    </ul>
                </div>
            </div>

            {/* SOCIAL MEDIA + COPYRIGHT */}
            <div className="footer-bottom">
                {/* PayPal SVG in place of copyright */}
                <div className="footer-icons">
                    <a href="" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                    <a href="" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                    <a href="" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                </div>

                {/* Copyright in place of PayPal */}

                <div className="paypal-logo">
                    {/* your PayPal SVG */}
                    <svg
                        viewBox="0 0 38 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="paypal-svg"
                        aria-labelledby="pi-paypal"
                    >
                        <title id="pi-paypal">PayPal</title>
                        <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path>
                        <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path>
                        <path fill="#003087" d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"></path>
                        <path fill="#3086C8" d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"></path>
                        <path fill="#012169" d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"></path>
                    </svg>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 - TIGER MARRÓN POWERED BY SHOPIFY</p> 
            </div>


        </footer>
    );
};

export default Footer;