import React from 'react';
import '../styles/a.css';
import Navigation from './Navigation';
const ProjectsSection = () => {
  return (
   <div>
    <Navigation/>
     <div className="projects-container">
  <div className="project">
    <img src="ecm.jpg" className='pimg' alt="" />
    <div className='des'>
        <h2>Ecommerce Website</h2>
Developed a fully functional e-commerce platform using the MERN stack (MongoDB, Express.js, React, Node.js).
Implemented features such as user authentication, product listing, shopping cart, and order management.
Enhanced user experience with responsive design and seamless navigation.
Applied RESTful API design principles and ensured data persistence using MongoDB.

    </div>
  </div>

  <div className="project">
    <img src="notes.jpg" className='pimg' alt="" />
    <div className='des'>
        <h2>Notes App</h2>
    Built a React-based Notes App to create, edit, and delete notes.
Utilized React state management and components to handle dynamic data and user interactions.
Designed a simple, intuitive user interface to enhance usability.
Focused on responsive design for seamless performance across devices.
    </div>
  </div>

  <div className="project">
    <img src="tr.jpg" className='pimg' alt="" />
    <div className='des'>
<h2>Trivia Game</h2>
Developed an interactive Trivia Game using HTML,Css & JavaScript.
Implemented features such as question randomization, score tracking, and a timer for added challenge.
Enhanced the user experience with a clean UI and responsive design.
Focused on logical game flow and dynamic rendering of questions and answers.
    </div>
  </div>

  <div className="project">
    <img src="port.jpg" className='pimg' alt="" />
    <div className='des'>
        <h2>portfolio website</h2>
    Developed a responsive personal portfolio website using React to showcase web development skills and projects.
Utilized React components and state management for dynamic content display.
Included sections such as "About Me"," "Projects," and a "Contact" form.
Optimized the website for both mobile and desktop views to ensure a smooth user experience across devices.
    </div>
  </div>

  <div className="project">
    <img src="music.jpg" className='pimg' alt="" />
    <div className='des'>
<h2>vocal audio files</h2>
Developed a Python-based program to convert vocal audio files into piano sound representations.
Used libraries like LibROSA and pydub for audio processing, extraction of features, and manipulation of sound waves.
Implemented a custom algorithm to map vocal frequencies to piano notes, creating an auditory transformation from vocals to piano.
Focused on creating an intuitive and accurate sound conversion process with minimal distortion.
    </div>
  </div>

  <div className="project">
    <img src="todo.jpg" className='pimg' alt="" />
    <div className='des'>
<h2>To-Do App</h2>
Developed a full-stack To-Do application using React for the front-end and Django for the back-end.
Implemented features such as adding, editing, deleting, and marking tasks as completed, with real-time data synchronization.
Used Django REST Framework to build a RESTful API to handle CRUD operations and manage task data.
Integrated React’s state management and lifecycle methods to handle UI updates and user interactions.


    </div>
  </div>
    </div>
   </div>
  );
};

export default ProjectsSection;
