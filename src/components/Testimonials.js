import React from "react"

const testimonialsData = [
    {
        headline: "'Completely adaptable to any wishes you may have!'",
        quote: "I have been very pleased with Gašper's services, especially in terms of quick and consistent improvements.",
        author: "Gal Resnik, Founder of Impero"
    },
    {
        headline: "'I couldn't be happier with the results!'",
        quote: "I had the pleasure of working with Gašper, a talented web developer, and I couldn't be happier with the results. He created a stunning and luxurious website for my business that exceeded all my expectations.",
        author: "Lucija Šimec, Founder of LaMaisonDigitale"
    },
    {
        headline: "Something nice 3",
        quote: "Lets talk about it 3",
        author: "Somebody as John Doe 3"
    }
]

export default function Testimonials() {

    const [count, setCount] = React.useState(0)

    const testimonialForm = testimonialsData.map((testimonial, index) => {
        return(
        <div className="testimonial">
            <h1 className="testimonials-h1">{testimonial.headline}</h1>
            <p>{testimonial.quote}</p>
            <h2 className="testimonials-h2">{testimonial.author}</h2>
        </div>
        )
    })


    function toggleTestimonialUp() {
        setCount(prevCount => {
            return prevCount === 2 ? 0 : prevCount + 1;
        })
    }

    return(
       <div className="testimonials">
            {testimonialForm[count]}
            <button className="testimonials-btn" id="next" onClick = {() => toggleTestimonialUp()}>NEXT</button>
       </div>
    )
}