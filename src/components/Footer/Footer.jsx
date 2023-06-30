import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png"

const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere suscipit delectus vero eveniet placeat nobis?</div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">
                        831, Dutt Nagar, Indore, 452012
                    </div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">
                        Phone: 0748 991 8182
                    </div>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">
                        Email: paragagrawal477@gmail.com
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <div className="text">Headphones</div>
                <div className="text">Smart Watches</div>
                <div className="text">Bluetooth Speakers</div>
                <div className="text">Wireless Earbuds</div>
                <div className="text">Home Theatre</div>
                <div className="text">Projectors</div>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <div className="text">Home</div>
                <div className="text">About</div>
                <div className="text">Privacy Policy</div>
                <div className="text">Returns</div>
                <div className="text">Terms & Conditions</div>
                <div className="text">Contact Us</div>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    Copyright @SHOPZONE 2023
                </div>
                <img src={<Payment />} alt="" />
            </div>
        </div>
    </footer>;
};

export default Footer;
