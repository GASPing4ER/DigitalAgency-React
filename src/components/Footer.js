import InstagramFeed from "./InstagramFeed";
import logoDigitalAnchor from "../images/logos/logo_trans.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return(
        <div className="footer">
            <div className="footer-info">
                <div className="footer-item footer-about">
                    <h2>ABOUT</h2>
                    <h2>SERVICES</h2>
                    <h2>PORTFOLIO</h2>
                    <h2>INQUIRE</h2>
                </div>
                <div className="footer-item footer-logo">
                    <img src={logoDigitalAnchor} alt="logo Digital Anchor"/>
                </div>
                <div className="footer-item footer-socials">
                    <p>AN AUTHENTIC WEBSITE ORIENTED AGENCY FOR 
                        VIBRANT BRANDS WITH A UNIQUE VISION</p>
                    <div className="socials">
                        <FontAwesomeIcon icon={faFacebookF}/>
                        <FontAwesomeIcon icon={faInstagram}/>
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </div>
                </div>
            </div>
            <InstagramFeed />
            <div className="after-footer">
                <p>© 2023 G.S. DIGITAL ANCHOR</p>
                <p>TERMS AND CONDITIONS</p>
                <p>PRIVACY POLICY</p>
            </div>
        </div>
    )
}