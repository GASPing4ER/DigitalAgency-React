import "../styles/home.css"
import Header from "../components/Header"
import imgHome from "../images/home.jpeg"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"
import ProjectsSlider from "../components/ProjectsSlider"
import CaseStudies from "../components/CaseStudies"
import PricingPackage from "../components/PricingPackage"
import Footer from "../components/Footer"
import InstagramFeed from "../components/InstagramFeed"


export default function Home() {
    return(
        <>
            <Header />
            <div className="hero-section" style={{backgroundImage: `url(${imgHome})`}}>
                <h1 className="hero-h1">AN <span className="italic">AUTHENTIC</span> WEBSITE ORIENTED AGENCY FOR <span className="italic">VIBRANT</span> BRANDS WITH A <span className="italic">UNIQUE</span> VISION</h1>
            </div>
            <ProjectsSlider />
            <Services />
            <Testimonials />
            <CaseStudies />
            <PricingPackage />
            <InstagramFeed />
            <Footer />
        </>
    )
}