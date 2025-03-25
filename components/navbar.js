// Navbar Web Component
class AppNavbar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
        this.setupEventListeners();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                }
                nav {
                
                }
                .nav-center {

                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem 2rem;
                    background-color: rgba(30, 30, 46, 0.8);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    transition: all 0.3s ease-in-out;
                }
                
                .nav-center.scrolled               {
                    background-color: rgba(18, 18, 18, 0.45);
                    padding-block: .2rem;
                margin: .5rem;
                border-radius: 1rem;




                }
                
                .logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #FFFFFF;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                }
                
                .logo span {
                    background: linear-gradient(135deg, #8A2BE2, #4169E1);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    color: transparent;
                    margin-left: 0.5rem;
                }
                
                .nav-links {
                    display: flex;
                    list-style: none;
                    gap: 2rem;
                }
                
                .nav-link {
                    color: #E0E0E0;
                    text-decoration: none;
                    font-size: 1rem;
                    font-weight: 500;
                    transition: all 0.3s ease;
                    position: relative;
                }
                
                .nav-link:hover, .nav-link.active {
                    color: #9370DB;
                }
                
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: linear-gradient(90deg, #8A2BE2, #4169E1);
                    transition: width 0.3s ease;
                    border-radius: 2px;
                }
                
                .nav-link:hover::after, .nav-link.active::after {
                    width: 100%;
                }
                
                .hamburger {
                    display: none;
                    flex-direction: column;
                    justify-content: space-between;
                    width: 30px;
                    height: 21px;
                    cursor: pointer;
                    z-index: 100;
                }
                
                .hamburger span {
                    display: block;
                    height: 3px;
                    width: 100%;
                    background-color: #FFFFFF;
                    border-radius: 3px;
                    transition: all 0.3s ease;
                }
                
                @media (max-width: 768px) {
                    .hamburger {
                        display: flex;
                    }
                    
                    .nav-links {
                        position: fixed;
                        top: 0;
                        right: -100%;
                        width: 70%;
                        height: 100vh;
                        background-color: rgba(30, 30, 46, 0.95);
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        gap: 2.5rem;
                        transition: right 0.5s ease;
                        backdrop-filter: blur(10px);
                        -webkit-backdrop-filter: blur(10px);
                        z-index: 99;
                    }
                    
                    .nav-links.active {
                        right: 0;
                    }
                    
                    .hamburger.active span:nth-child(1) {
                        transform: translateY(9px) rotate(45deg);
                    }
                    
                    .hamburger.active span:nth-child(2) {
                        opacity: 0;
                    }
                    
                    .hamburger.active span:nth-child(3) {
                        transform: translateY(-9px) rotate(-45deg);
                    }
                }
            </style>
            <nav class="navbar">
            <div class="nav-center">
                <a href="index.html" class="logo">Dev<span>Portfolio</span></a>
                
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
                <ul class="nav-links">
                    <li><a href="index.html" class="nav-link active">Home</a></li>
                    <li><a href="#about" class="nav-link">About</a></li>
                    <li><a href="#projects" class="nav-link">Projects</a></li>
                    <li><a href="#certifications" class="nav-link">Certifications</a></li>
                    <li><a href="#contact" class="nav-link">Contact</a></li>
                </ul>
                </div>
            </nav>


        `;
    }

    setupEventListeners() {
        // Hamburger menu toggle
        const hamburger = this.shadowRoot.querySelector('.hamburger');
        const navLinks = this.shadowRoot.querySelector('.nav-links');
        
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when a link is clicked
        const links = this.shadowRoot.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        
        // Scroll event for navbar background change
        window.addEventListener('scroll', () => {
            const navbar = this.shadowRoot.querySelector('.nav-center');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Active link update on scroll
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = this.shadowRoot.querySelectorAll('.nav-link');
            
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                
                if (href === 'index.html') {
                    if (current === '' || current === 'hero') {
                        link.classList.add('active');
                    }
                } else if (href === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }
}

// Define the custom element
customElements.define('app-navbar', AppNavbar); 