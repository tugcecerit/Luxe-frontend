import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import React from "react";

const TestimonialNew = (props) => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        title: '',
        image: '',
        opinion: '',
        createdBy: '',
        location: ''
    })

    const handleChanges = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.createTestimonial(form).then(() => {
            navigate('/testimonials')
        }).catch((err) => {
            console.log(err)
        })
    }
    
    return (
        <div className="new-form">
            <div className="container form">
            <div className="heading-container">
            <h1 className="form-h1">New Testimonial</h1>
                <Link to='/testimonials' className='return-link-edit'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="100" fill="rgb(210, 210, 210)" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                </Link>
                </div>
                <form onSubmit={handleSubmit} className="forms"  data-aos="zoom-out">
                            <label htmlFor="title">Title</label>
                            <input
                                id="title"
                                className="form-control input-field"
                                type="text"
                                value={form.title}
                                name="title"
                                placeholder="Title"
                                onChange={handleChanges}
                            />
                            <label htmlFor="image">Image</label>
                            <input
                                id="image"
                                className="form-control input-field"
                                type="text"
                                value={form.image}
                                name="image"
                                placeholder="Image Link"
                                onChange={handleChanges}
                            />
                            <label htmlFor="opinion">Opinion</label>
                            <textarea
                                id="opinion"
                                className="form-control input-field"
                                value={form.opinion}
                                name="opinion"
                                placeholder="Opinion"
                                onChange={handleChanges}
                            ></textarea>
                            <label htmlFor="createdBy">Created By</label>
                            <input
                                id="createdBy"
                                className="form-control input-field"
                                type="text"
                                value={form.createdBy}
                                name="createdBy"
                                placeholder="Created By"
                                onChange={handleChanges}
                            />
                            <label htmlFor="location">Location</label>
                                <input
                                    id="location"
                                    className="form-control input-field"
                                    type="text"
                                    value={form.location}
                                    name="location"
                                    placeholder="Location"
                                    onChange={handleChanges}
                                />
                        <button className="edit-button large" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg></button>
                        </form>
            </div>
            </div>
        )
    }

export default TestimonialNew;