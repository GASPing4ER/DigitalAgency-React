import "../styles/about.css"
import Header from "../components/Header"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"
import imgLogo from "../images/logos/logo_trans.png"
import videoBackground from "../images/background-video.mp4"

export default function About() {
    
    return(
        <>
            <Header />
            <div className="about-hero-section">
                <img src={imgLogo} alt="logo"/>
                <h1 className="about-hero-h1">AN <span className="italic">AUTHENTIC</span> WEBSITE ORIENTED AGENCY FOR <span className="italic">VIBRANT</span> BRANDS WITH A <span className="italic">UNIQUE</span> VISION</h1>
                <video className='hero-background' loop muted autoPlay playsInline controls={false}>
                    <source src={videoBackground} type='video/mp4' />
                </video>
            </div>
            <div className="about-section">
                <h2>Boutique Agency</h2>
                <h1>FOR WEBSITE DESIGN & DEVELOPMENT</h1>
                <p>Welcome to our boutique agency, where we specialize in 
                    creating authentic and engaging websites for vibrant brands with 
                    a unique vision. With a keen eye for detail and a deep understanding 
                    of the latest web design trends, we'll create a website that's not only 
                    beautiful but also functional and user-friendly. </p>
            </div>
            <Testimonials />
            <Footer />
        </>
    )
}
