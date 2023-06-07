import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../index.css"

const TestimonialEdit = (props) => {
    const navigate = useNavigate()
    const params = useParams()
    const id = params.id
    const testimonials = props.testimonials
    const testimonial = testimonials.find((p) => p._id === id)

    const [form, setForm] = useState({
        title: `${testimonial.title}`,
        image: `${testimonial.image}`,
        opinion: `${testimonial.opinion}`,
        createdBy: `${testimonial.createdBy}`,
        location: `${testimonial.location}`,
    })

    const handleChanges = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.updateTestimonial(form, testimonial._id).then(() => {
            navigate('/testimonials')
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        AOS.init({duration: 2000});
    }, [])

    const loaded = () => {
        return (
            <div className="cover">
                <div className="container form">
                <div className="heading-container">
                <h1 className="form-h1">Update Testimonial</h1>
                    <Link to='/testimonials' className='return-link-edit'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="100" fill="rgb(210, 210, 210)" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                    </Link>
                    </div>
                    <form onSubmit={handleSubmit} className="forms"  data-aos="zoom-in">
                    <div className="form-group row">
                                <label className="col-sm-2 col-form-label contact-label"  htmlFor="title">Title</label>
                                <div className="col-sm-8">
                                <input
                                    id="title"
                                    className="form-control input-field"
                                    type="text"
                                    value={form.title}
                                    name="title"
                                    placeholder="Title"
                                    onChange={handleChanges}
                                />
                                </div>
                                </div><br></br>
                                <div className="form-group row">
                                <label className="col-sm-2 col-form-label contact-label"  htmlFor="image">Image</label>
                                <div className="col-sm-8">
                                <input
                                    id="image"
                                    className="form-control input-field"
                                    type="text"
                                    value={form.image}
                                    name="image"
                                    placeholder="Image Link"
                                    onChange={handleChanges}
                                />
                                </div>
                                </div><br></br>
                                <div className="form-group row">
                                <label className="col-sm-2 col-form-label contact-label"  htmlFor="opinion">Opinion</label>
                                <div className="col-sm-8">
                                <textarea
                                    id="opinion"
                                    className="form-control input-field"
                                    value={form.opinion}
                                    name="opinion"
                                    placeholder="Opinion"
                                    onChange={handleChanges}
                                ></textarea>
                                </div>
                                </div><br></br> 
                                <div className="form-group row">
                                <label className="col-sm-2 col-form-label contact-label"  htmlFor="createdBy">Created By</label>
                                <div className="col-sm-8">
                                <input
                                    id="createdBy"
                                    className="form-control input-field"
                                    type="text"
                                    value={form.createdBy}
                                    name="createdBy"
                                    placeholder="Created By"
                                    onChange={handleChanges}
                                />
                                </div>
                                </div><br></br>
                                <div className="form-group row">
                                <label className="col-sm-2 col-form-label contact-label"  htmlFor="location">Location</label>
                                <div className="col-sm-8">
                                    <input
                                        id="location"
                                        className="form-control input-field"
                                        type="text"
                                        value={form.location}
                                        name="location"
                                        placeholder="Location"
                                        onChange={handleChanges}
                                />
                                </div>
                                </div><br></br>
                    <input className="edit-button large" type="submit" value="&#9998;" />
                    </form>
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

export default TestimonialEdit;