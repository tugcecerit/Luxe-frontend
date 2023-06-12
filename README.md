# Luxe-frontend
## Project Choice
Interior Design Company Website - Luxe
## Links For The Website
* https://luxe-frontend.herokuapp.com/
* https://luxe-backend.herokuapp.com/testimonials
## Project Description
# General App Idea/Purpose
The purpose of the Luxe Interiors website is to create an online presence for an interior design company. The website serves as a platform to showcase the company's projects, provide information about the company, and allow users to contact the company for inquiries or project requests. The website includes a shopping cart feature for purchasing design-related products, and a sign-in/sign-out functionality for any users but give a permission only to business workers to add, edit or delete testimonial page.
# Technology Stack
For the frontend, the following technologies are used:
* React.js
* HTML5/CSS3
* Bootstrap
For the backend, the following technologies are used:
* Express.js
* MongoDB
# Models
The website will have the following model:
* Testimonial
    * title: String
    * image: String
    * opinion: String
    * createdBy: String
    * location: String
# Routes
The following routes are implemented:
* GET/: Home page
* GET/aboutus: About us page
* GET/contactus: Contact us page
* GET/projects: Retrieve interior design projects.
* GET/services: Retrieve a list of all services.
* GET/store: Shopping page.
* GET/testimonial/new: Display a form to create a new testimonial.
* POST/testimonial: Create a new testimonial.
* PUT/testimonial/:id/edit:  Update an existing testimonial.
* DELETE/testimonial/:id: Delete a testimonial.
## User Stories
1. As an interior designer and company owner, I want to showcase my projects on the website to highlight my expertise and attract potential clients.
2. As an interior designer and company owner, I want to add, edit and delete testimonials to share our clients' opinions about company's projects.
3. As a user, I want to browse and view the showcased projects to gain inspiration and assess the quality of the interior design work.
4. As a user, I want to see the services that company provided.
5. As a user, I want to learn more about the company and its values through an "About Us" page.
6. As a user, I want to easily contact the company for inquiries or project requests through a "Contact Us" page.
## MVP Goals
* Create a visually appealing website to showcase the company's projects and services.
* Implement a projects page to display the interior design projects, including images, descriptions, and key details.
* Include an "About Us" page to provide information about the company and its values.
* Create a "Contact Us" page with a form.
* Implement CRUD functionality for writing testimonials for the company's works. (create, read, update, delete).
* Use MERN Stack.
## Completed Stretch Goals
* Enable users to create an account but give a permission only to the business workers to add, delete, update testimonials after sign in.
* Implement a shopping cart feature for users to purchase luxury home decor items related to the showcased designs and connect to Stripe for the payment.
## Wireframes
Wireframes
## Website Images
Website Images
## Project Name
The proposed name for the project is "Luxe."