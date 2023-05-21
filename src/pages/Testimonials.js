import React from "react";
import Button from "../components/Button";

const Testimonials = (props) => {
    const testimonials = props.testimonials
    const loaded = () => {
        return (
            <section className="index">
                <div className="container">
                    <div className="heading-container">
                        <h1>Testimonials</h1>
                        <Button to={`/testimonials/new`} label="NEW" />
                    </div>
                    <div className="row g-4">
                        {testimonials.map((testimonial) => {
                            return (
                                <div key={testimonial._id} className="col-12 col-lg-4 col-xxl-3">
                                    <p>{testimonial.title}</p>
                                    <img src={testimonial.image} alt="testimonial_image" className="pure-img" />
                                    <p>{testimonial.opinion}</p>
                                    <p>{testimonial.createdBy}</p>
                                    <p>{testimonial.location}</p>
                                    <Button to={`/testimonials/${testimonial._id}`} label="VIEW" />
                                    <Button to={`/testimonials/${testimonial._id}/edit`} label="UPDATE" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        )
    }

    const loading = () => {
        return (
                <h1>Loading...</h1>
        )
    }

        return props.testimonials ? loaded() : loading();
}

export default Testimonials;