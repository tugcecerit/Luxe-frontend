import {useParams, useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom';
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const TestimonialShow= (props) => {
    const { isAuthenticated, loginWithRedirect } = useAuth0();
    const params = useParams()
    const navigate = useNavigate()
    const id = params.id
    const testimonials = props.testimonials
    const testimonial = testimonials.find((p) => p._id === id)

    const deleteTestimonial = (event) => {
        if (isAuthenticated) {
            props.deleteTestimonial(testimonial._id)
            navigate('/testimonials')
        } else {
            loginWithRedirect();
        }
    };

    const loaded = () => {
        return (
                <div className="container">
                    <div>
                        <Link to='/testimonials' className='return-link'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="100" fill="black" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                        </Link>
                        <button className="delete-button" onClick={deleteTestimonial}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="100" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                        </svg></button>
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
            <h1 className="loading">Loading...</h1>
        )
    }
    return props.testimonials ? loaded() : loading();
}

export default TestimonialShow;