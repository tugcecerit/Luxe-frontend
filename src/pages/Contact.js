import '../App.css';
import React from "react";
import { useEffect } from "react";
import Photo from '../img/Contact.jpeg'
import 'aos/dist/aos.css';
import AOS from 'aos';

function Contact() {
  const handleAlert = (e) => {
    e.preventDefault();
    alert('We have received your request, we will get back to you soon!');
    window.location.href = '/';
}
  useEffect(() => {
    AOS.init({duration: 2000});
}, [])
  return (
    <div className='contact'>
      <h1 className='contact-title'>GET IN TOUCH</h1><br></br>
      <section id='section-contact' data-aos="zoom-in-up">
        <div className='form-contact'>
        <div>
        <form>
          <div className="form-group row">
          <label for="name" className="col-sm-2 col-form-label contact-label">Name</label>
          <div className="col-sm-8">
          <input type="text" className="form-control" name="name" id="name" placeholder="Name"/>
          </div>
          </div><br></br>
          <div class="form-group row">
          <label for="phoneNumber" class="col-sm-2 col-form-label contact-label">Phone</label>
          <div className="col-sm-8">
          <input type="text" className="form-control" name="phoneNumber" id="phoneNumber" placeholder="Phone Number"/>
          </div>
          </div><br></br>
          <div className="form-group row">
          <label for="email" className="col-sm-2 col-form-label contact-label">Email</label>
          <div className="col-sm-8">
          <input type="email" className="form-control" name="email" id="email" placeholder="Email"/>
          </div>
          </div><br></br>
          <div className="form-group row">
          <label for="message" className="col-sm-2 col-form-label contact-label">Message</label>
          <div className="col-sm-8">
          <textarea id="message" className="form-control" name="message" placeholder="Message" rows="4"></textarea>
          </div>
          </div><br></br>
          <button onClick={handleAlert} type="submit" className='submit-button large'>
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
        </svg></button>
          </form>
        </div>
        </div>
        <div>
      <img className="contact-img1" src={Photo} alt="Contact"/>
     </div>
      </section>
    </div>
  );
}

export default Contact;