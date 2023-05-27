import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useAuth0 } from "@auth0/auth0-react";

const Testimonials = (props) => {
    const { isAuthenticated, loginWithRedirect } = useAuth0();
    const navigate = useNavigate();
    const testimonials = props.testimonials;

    const handleNewTestimonial = () => {
        if (isAuthenticated) {
            navigate("/testimonials/new");
        } else {
            loginWithRedirect();
        }
    };

    const loaded = () => {
        return (
            <section className="index">
                <div className="container">
                    <div className="heading-container">
                        <h1>Testimonials</h1>
                        {isAuthenticated && (
                            <button onClick={handleNewTestimonial}>NEW</button>
                        )}
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
                                    {isAuthenticated && (
                                        <Button to={`/testimonials/${testimonial._id}/edit`} label="UPDATE" />
                                    )}
                                    {isAuthenticated && (
                                        <Button to={`/testimonials/${testimonial._id}`} label="VIEW" />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return testimonials ? loaded() : loading();
};

export default Testimonials;