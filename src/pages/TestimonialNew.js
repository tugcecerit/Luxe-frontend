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
            <div className="container">
                <Link to='/testimonials' className='return-link'>
                    <i className="bi bi-arrow-left"></i> Return
                </Link>
                <h1>New Testimonial</h1>
                <form onSubmit={handleSubmit} className="pure-form pure-form-stacked">
                            <label htmlFor="title">title</label>
                            <input
                                id="title"
                                className="pure-u-1"
                                type="text"
                                value={form.title}
                                name="title"
                                placeholder="Title"
                                onChange={handleChanges}
                            />
                            <label htmlFor="image">Image</label>
                            <input
                                id="image"
                                className="pure-u-1"
                                type="text"
                                value={form.image}
                                name="image"
                                placeholder="Image Link"
                                onChange={handleChanges}
                            />
                            <label htmlFor="opinion">Opinion</label>
                            <textarea
                                id="opinion"
                                className="pure-u-1"
                                value={form.opinion}
                                name="opinion"
                                placeholder="Opinion"
                                onChange={handleChanges}
                            ></textarea>
                            <label htmlFor="createdBy">Created By</label>
                            <input
                                id="createdBy"
                                className="pure-u-1"
                                type="text"
                                value={form.createdBy}
                                name="createdBy"
                                placeholder="Created By"
                                onChange={handleChanges}
                            />
                            <label htmlFor="location">Location</label>
                                <input
                                    id="location"
                                    className="pure-u-1"
                                    type="text"
                                    value={form.location}
                                    name="location"
                                    placeholder="Location"
                                    onChange={handleChanges}
                                />
                        <input className="new-button" type="submit" value="Create Testimonial" />
                </form>
            </div>
        )
    }

export default TestimonialNew;