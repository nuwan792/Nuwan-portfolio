// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Add active class to current section in navigation
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY + 100;
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelector(`nav a[href="#${sectionId}"]`).classList.add('active');
        } else {
            document.querySelector(`nav a[href="#${sectionId}"]`).classList.remove('active');
        }
    });
});

// Back to top button
const backToTopBtn = document.querySelector('.back-to-top');
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.visibility = 'visible';
    } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.visibility = 'hidden';
    }
});

// Project data
const projects = [
    {
        title: "Tea cultivars Detection system",
        description: "This project aims to develop an Android mobile application with user-friendly interface and basic navigation that enables users to identify different tea cultivars by capturing images of tea leaves and suggests the best locations for cultivating a particular tea cultivar based on environmental factors. The application will utilize image recognition technology to analyze the characteristics of tea leaves and provide accurate identification results. We will use machine learning and deep learning models to develop our system. This document defines the requirements for developing a mobile application aimed at identifying tea cultivars. Through image capture and suggesting optimal cultivation locations for specific tea cultivars. This document outlines the functional and non-functional requirements, user interfaces, and system behavior of the application. The target audience for the mobile application includes tea farmers, agricultural researchers, agricultural students, and individuals interested in tea cultivation. The application aims to provide valuable assistance and insights to both experienced tea growers and beginners looking to start their own tea plantations.",
        image: "project1.jpg",
        technologies: ["Python", "Flutter"],
        liveLink: "https://drive.google.com/file/d/1spzrTq5Hq90FXN3oVFbYKSZBGmzT55Wc/view?usp=sharing",
        codeLink: "https://drive.google.com/file/d/1XKi2I1rKfCtquJIEzSg1mCliL7amFR8K/view?usp=sharing"
    },
    {
        title: "Student Management System",
        description: "The Student Management System is a full-stack application designed to efficiently manage academic records of students. It allows administrators to add, update, and delete student details, monitor attendance, and generate grade reports. The system streamlines administrative work and provides an organized view of student data.\n\nKey Features:\n• Add/edit/delete student profiles\n• Record and view attendance\n• Manage courses and grades\n• Generate report cards\n• Role-based login (Admin, Teacher)\n• Responsive user interface",
        image: "Project_2.png",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        liveLink: "https://drive.google.com/file/d/1spzrTq5Hq90FXN3oVFbYKSZBGmzT55Wc/view?usp=sharing",
        codeLink: "https://drive.google.com/file/d/1cSqBSKZ7Kv6T_yQm7CtCoaMcQzo2YSUI/view?usp=sharing"
    },
    {
        title: "Bug Tracker System",
        description: "This Bug Tracker System is a collaborative web-based application for software teams to report, assign, and track bugs or issues in a project. Inspired by platforms like Jira and Trello, it helps improve workflow and communication among developers, testers, and project managers.",
        image: "Project 3.png",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        liveLink: "https://drive.google.com/file/d/1spzrTq5Hq90FXN3oVFbYKSZBGmzT55Wc/view?usp=sharing",
        codeLink: "https://drive.google.com/file/d/1NbUudhD1X_q3etT7_JWpr1GPRgk0Mhvy/view?usp=sharing"
    }
];

// Skills data
const skills = [
    "HTML5", "CSS3", "JavaScript", "React", "Node.js", 
    "Python", "Git", "Responsive Design", "UI/UX", "SQL",
    "Flutter", "PHP", "MySQL", "MongoDB", "Express",
    "Information Security", "Problem Solving", "Team Collaboration"
];

// Display projects
const projectGrid = document.querySelector('.project-grid');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    
    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-img">
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="technologies">
                ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.liveLink}" target="_blank" class="btn btn-primary">Live Demo</a>
                <a href="${project.codeLink}" target="_blank" class="btn btn-secondary">View Code</a>
            </div>
        </div>
    `;
    
    projectGrid.appendChild(projectCard);
});

// Display skills
const skillsContainer = document.querySelector('.skills-container');

skills.forEach(skill => {
    const skillElement = document.createElement('div');
    skillElement.className = 'skill';
    skillElement.textContent = skill;
    skillsContainer.appendChild(skillElement);
});

// Form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});