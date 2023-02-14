import React from "react";
import { socialLinks } from "../data";
// import PageLinks from "./PageLinks";

const Footer = () => {
    return (
        <footer className="section footer">
            {/* <PageLinks parentClass="footer-links" itemClass="footer-link" /> */}

            <ul className="footer-icons">
                {socialLinks.map((link) => {
                    const { id, href, icon } = link;
                    return (
                        <li key={id}>
                            <a href={href} className="footer-icon" target="_blank" rel="noreferrer">
                                <i className={icon}></i>
                            </a>
                        </li>
                    );
                })}
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date">{new Date().getFullYear()}</span> all rights reserved
            </p>
        </footer>
    );
};

export default Footer;
