import Service from "./Service"
import serviceImg1 from "../images/services/service-1.jpg"
import serviceImg2 from "../images/services/service-2.jpg"
import serviceImg3 from "../images/services/service-3.jpg"

export default function Services() {
    return(
        <div className="services-flex">
            <div className="services">
                <Service idName="firstService" img = {serviceImg1} title = "DIGITAL" description = "Design & Development"/>
                <Service idName="secondService" img = {serviceImg2} title = "CONTENT" description = "Copyrighting & SEO"/>
                <Service idName="thirdService" img = {serviceImg3} title = "ANALYTICS" description = "Analytics & Reports"/>
            </div>
        </div>
    )
}