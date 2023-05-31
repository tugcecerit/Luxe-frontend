import { useState } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import React from "react";

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

    const loaded = () => {
        return (
                <div className="container">
                    <Link to='/testimonials' className='return-link'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="100" fill="black" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                    </Link>
                    <h1>Update Testimonial</h1>
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
                    <input className="new-button" type="submit" value="&#9998;" />
                    </form>
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