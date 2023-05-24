import {useParams, useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom';
import React from "react";

const TestimonialShow= (props) => {
    const params = useParams()
    const navigate = useNavigate()
    const id = params.id
    const testimonials = props.testimonials
    const testimonial = testimonials.find((p) => p._id === id)

    const deleteTestimonial = (event) => {
        event.preventDefault()
        props.deleteTestimonial(testimonial._id)
        navigate('/testimonials')
    }

    const loaded = () => {
        return (
                <div className="container">
                    <div>
                        <Link to='/testimonials' className='return-link'>
                            <i className="bi bi-arrow-left"></i> Return
                        </Link>
                        <button className="delete-button" onClick={deleteTestimonial}>DELETE</button>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img src={testimonial.image} alt="testimonial_image"/>
                        </div>
                        <div className="user-plant-show-data col-12 col-md-6">
                            <h1>{testimonial.title}</h1>
                            <p><span>Opinion: </span>{testimonial.opinion}</p>
                            <p><span>Created By: </span>{testimonial.createdBy}</p>
                            <p><span>Location: </span>{testimonial.location}</p>
                        </div>
                    </div>
                </div>
        )
    }
    const loading = () => {
        return (
            <h1>Loading...</h1>
        )
    }
    return props.testimonials ? loaded() : loading();
}

export default TestimonialShow;