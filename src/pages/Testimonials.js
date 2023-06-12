import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const Testimonials = (props) => {
    const { isAuthenticated, loginWithRedirect, user } = useAuth0();
    const navigate = useNavigate();
    const testimonials = props.testimonials;

    const handleNewTestimonial = () => {
        console.log(user.sub);
      
        if (isAuthenticated) {
          navigate("/testimonials/new");
        } else {
          loginWithRedirect();
        }
      };
    useEffect(() => {
        AOS.init({duration: 2000});
    }, [])

    const loaded = () => {
        return (
            <section className="index">
                <div className="testimonial-container">
                    <div className="heading-container">
                        <h1>Testimonials</h1>
                        <Link to='/' className='return-link' onClick={() => window.scrollTo(0, 0)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="100" fill="rgb(210, 210, 210)" className="bi bi-arrow-return-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                        </Link>
                        {(isAuthenticated && (user?.sub === "auth0|6483321cc8c08130f0772213" || user?.sub === "auth0|646ad5376d3547d19f2a71a9" || user?.sub === "auth0|646ae83a92e83c2d192f527b")) && (
                            <button className="new-button" onClick={handleNewTestimonial}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="100" fill="rgb(210, 210, 210)" className="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                          </svg></button>
                        )}
                    </div>
                    <div className="row g-4">
                        {testimonials.map((testimonial) => {
                            return (
                                <div key={testimonial._id} className="testimonial" data-aos="fade-right">
                                    <p className="testimonial-title">{testimonial.title}</p>
                                    <img src={testimonial.image} alt="testimonial_image" className="testimonial-img" />
                                    <div className="testimonial-text">
                                    <p>{testimonial.opinion}</p>
                                    <p>{testimonial.createdBy}</p>
                                    <p>{testimonial.location}</p>
                                    </div>
                                    {(isAuthenticated && (user?.sub === "auth0|6483321cc8c08130f0772213" || user?.sub === "auth0|646ad5376d3547d19f2a71a9" || user?.sub === "auth0|646ae83a92e83c2d192f527b")) && (
                                    <Link to={`/testimonials/${testimonial._id}/edit`} className='edit-button' onClick={() => window.scrollTo(0, 0)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="60" fill="rgb(210, 210, 210)" className="bi bi-pencil" viewBox="0 0 16 16">
                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                    </svg>
                                    </Link>
                                    )}
                                    {(isAuthenticated && (user?.sub === "auth0|6483321cc8c08130f0772213" || user?.sub === "auth0|646ad5376d3547d19f2a71a9" || user?.sub === "auth0|646ae83a92e83c2d192f527b")) &&(
                                    <Link to={`/testimonials/${testimonial._id}`} className='view-button' onClick={() => window.scrollTo(0, 0)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="60" fill="rgb(210, 210, 210)" className="bi bi-binoculars" viewBox="0 0 16 16">
                                    <path d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V2.5zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5h-1zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V4zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V3zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14z"/>
                                    </svg>
                                    </Link>
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
        return <h1 className="loading">Loading...</h1>;
    };

    return testimonials ? loaded() : loading();
};

export default Testimonials;