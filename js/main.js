// Import web components
import '../components/project-showcase.js';
import '../components/certification-showcase.js';

// Document ready function
document.addEventListener('DOMContentLoaded', () => {
    // Handle form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Scroll animations
    setupScrollAnimations();
    
    // Theme toggle if needed in the future
    // setupThemeToggle();
});

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // In a real application, you would send this data to a server
    console.log('Form data:', data);
    
    // Show success message
    const formElement = e.target;
    const successMessage = document.createElement('div');
    successMessage.classList.add('form-success');
    successMessage.innerHTML = `
        <div class="success-icon">✓</div>
        <h3>Message Sent!</h3>
        <p>Thank you for your message. I'll get back to you soon.</p>
    `;
    
    formElement.innerHTML = '';
    formElement.appendChild(successMessage);
    
    // In a real application, you would reset the form after successful submission
    // formElement.reset();
}

// Set up scroll animations (using Intersection Observer)
function setupScrollAnimations() {
    // Select all sections
    const sections = document.querySelectorAll('section');
    
    // Create observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe each section
    sections.forEach(section => {
        section.classList.add('section-hidden');
        observer.observe(section);
    });
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .section-hidden {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .form-success {
            text-align: center;
            padding: 2rem;
            color: var(--text-primary);
        }
        
        .success-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            background-color: var(--accent-success);
            color: white;
            border-radius: 50%;
            font-size: 2rem;
            margin: 0 auto 1rem;
        }
    `;
    document.head.appendChild(style);
}

// Typing effect for the hero section
function typeEffect() {
    const element = document.querySelector('.hero-content h1');
    if (!element) return;
    
    const textToType = element.innerText;
    element.innerHTML = '';
    
    let i = 0;
    const typingInterval = setInterval(() => {
        if (i < textToType.length) {
            element.innerHTML += textToType.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
        }
    }, 100);
}

// Call typing effect after a short delay
setTimeout(typeEffect, 1000); 