import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Testimonials from "../pages/Testimonials";
import TestimonialNew from "../pages/TestimonialNew";
import TestimonialEdit from "../pages/TestimonialEdit";
import TestimonialShow from "../pages/TestimonialShow";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Contact from "../pages/Contact";

const Main = (props) => {
    const URL = "http://localhost:8000"
    const [testimonials, setTestimonials] = useState(null)
    
    const getTestimonials = async () => {
        try {
            const response = await fetch(`${URL}/testimonials/`);
            const data = await response.json();
            setTestimonials(data.data);
            console.log(data.data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const createTestimonial = async (testimonials) => {
        await fetch(`${URL}/testimonials/`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(testimonials)
        })
        getTestimonials()
    }

    const updateTestimonial = async (testimonials, id) => {
        await fetch(`${URL}/testimonials/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(testimonials)
        })
        getTestimonials()
    }

    const deleteTestimonial = async (id) => {
        await fetch(`${URL}/testimonials/${id}`, {
            method: "DELETE",
        });
        getTestimonials();
      };

    useEffect(() => {
        getTestimonials()
    }, [])

    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/testimonials" element={<Testimonials testimonials={testimonials}/>} />
                <Route path="/testimonials/new" element={<TestimonialNew testimonials={testimonials} createTestimonial={createTestimonial}/>} />
                <Route path="/testimonials/:id/edit" element={<TestimonialEdit testimonials={testimonials} updateTestimonial={updateTestimonial}/>} />
                <Route path="/testimonials/:id" element={<TestimonialShow testimonials={testimonials} deleteTestimonial={deleteTestimonial}/>} />
            </Routes>
        </main>
    )
}

export default Main;