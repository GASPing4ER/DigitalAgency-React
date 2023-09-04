import caseStudy1 from "../images/case-studies/lamaison.jpg"
import caseStudy2 from "../images/case-studies/impero.jpg"
import caseStudy3 from "../images/case-studies/modelmindset.jpeg"
import caseStudy4 from "../images/case-studies/vitus.jpeg"

export default function CaseStudies() {
    return(
        <div className="case-study">
            <h1><span className="case-study-h1">The</span><br/>CASE STUDIES</h1>
            <h2 className="case-study-h2">A CREATIVE JOURNAL BY G.S. DIGITAL ANCHOR</h2>
            <p className="case-study-p">Browse our journal to learn more about our projects, our inspiration,<br/> stories, and beautiful designs.</p>
            <div className="case-studies">
                <div className="main">
                    <img src={caseStudy1} alt="caseStudy1"/>
                    <p>CASE STUDY No 1</p>
                    <h1>LA MAISON DIGITALE</h1>
                    <h2>DIGITAL MARKETING AGENCY</h2>
                </div>
                <div className="side-studies">
                    <div className="side">
                        <img src={caseStudy4} alt="caseStudy1"/>
                        <div className="side-content">
                            <p>CASE STUDY No 2</p>
                            <h1>VITUS</h1>
                            <h2>EXPLORE MORE</h2>
                        </div>
                    </div>
                    <div className="side">
                        <img src={caseStudy3} alt="caseStudy1"/>
                        <div className="side-content">
                            <p>CASE STUDY No 3</p>
                            <h1>MODEL MINDSET</h1>
                            <h2>EXPLORE MORE</h2>
                        </div>
                    </div>
                    <div className="side">
                        <img src={caseStudy2} alt="caseStudy1"/>
                        <div className="side-content">
                            <p>CASE STUDY No 4</p>
                            <h1>IMPERO</h1>
                            <h2>EXPLORE MORE</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}