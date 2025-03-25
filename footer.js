// Footer Web Component
class AppFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        const currentYear = new Date().getFullYear();
        
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                }
                
                .footer {
                    background-color: var(--bg-dark, #121212);
                    color: var(--text-secondary, #E0E0E0);
                    padding: 3rem 0 2rem;
                    border-top: 1px solid rgba(138, 43, 226, 0.2);
                }
                
                .footer-container {
                    width: 90%;
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 2fr 1fr 1fr 1fr;
                    gap: 2rem;
                }
                
                .footer-logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #FFFFFF;
                    text-decoration: none;
                    margin-bottom: 1rem;
                    display: inline-block;
                }
                
                .footer-logo span {
                    background: linear-gradient(135deg, #8A2BE2, #4169E1);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    color: transparent;
                }
                
                .footer-about {
                    margin-bottom: 1.5rem;
                    color: var(--text-tertiary, #BBBBBB);
                    font-size: 0.9rem;
                    line-height: 1.6;
                }
                
                .footer-social {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                }
                
                .social-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 36px;
                    height: 36px;
                    background-color: rgba(138, 43, 226, 0.1);
                    border-radius: 50%;
                    color: #FFFFFF;
                    transition: all 0.3s ease;
                    text-decoration: none;
                }
                
                .social-icon:hover {
                    background-color: var(--primary-color, #8A2BE2);
                    transform: translateY(-3px);
                }
                
                .footer-heading {
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: #FFFFFF;
                    margin-bottom: 1.5rem;
                    position: relative;
                    padding-bottom: 0.5rem;
                }
                
                .footer-heading::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 40px;
                    height: 2px;
                    background: linear-gradient(90deg, #8A2BE2, #4169E1);
                    border-radius: 2px;
                }
                
                .footer-links {
                    list-style: none;
                    padding: 0;
                }
                
                .footer-links li {
                    margin-bottom: 0.75rem;
                }
                
                .footer-links a {
                    color: var(--text-tertiary, #BBBBBB);
                    text-decoration: none;
                    transition: color 0.2s ease;
                    font-size: 0.9rem;
                }
                
                .footer-links a:hover {
                    color: var(--light-purple, #9370DB);
                }
                
                .contact-item {
                    display: flex;
                    align-items: center;
                    margin-bottom: 1rem;
                    color: var(--text-tertiary, #BBBBBB);
                    font-size: 0.9rem;
                }
                
                .contact-item svg {
                    margin-right: 0.75rem;
                    color: var(--primary-color, #8A2BE2);
                }
                
                .copyright {
                    text-align: center;
                    padding-top: 2rem;
                    margin-top: 2rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    color: var(--text-muted, #888888);
                    font-size: 0.85rem;
                }
                
                @media (max-width: 992px) {
                    .footer-container {
                        grid-template-columns: 1fr 1fr;
                    }
                }
                
                @media (max-width: 576px) {
                    .footer-container {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            
            <footer class="footer">
                <div class="footer-container">
                    <div class="footer-info">
                        <a href="index.html" class="footer-logo">Dev<span>Portfolio</span></a>
                        <p class="footer-about">
                            A passionate web developer focused on creating beautiful, functional, 
                            and user-friendly websites and applications.
                        </p>
                        <div class="footer-social">
                            <a href="#" class="social-icon" aria-label="GitHub">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </a>
                            <a href="#" class="social-icon" aria-label="LinkedIn">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </a>
                            <a href="#" class="social-icon" aria-label="Twitter">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                </svg>
                            </a>
                            <a href="#" class="social-icon" aria-label="Instagram">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    <div class="footer-links-section">
                        <h3 class="footer-heading">Quick Links</h3>
                        <ul class="footer-links">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#certifications">Certifications</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-links-section">
                        <h3 class="footer-heading">Resources</h3>
                        <ul class="footer-links">
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Resume</a></li>
                            <li><a href="#">Tutorials</a></li>
                            <li><a href="#">Tools</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-contact">
                        <h3 class="footer-heading">Contact Info</h3>
                        <div class="contact-item">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <span>johndoe@example.com</span>
                        </div>
                        <div class="contact-item">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            <span>+1 234 567 890</span>
                        </div>
                        <div class="contact-item">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <span>New York, USA</span>
                        </div>
                    </div>
                </div>
                
                <div class="copyright">
                    &copy; ${currentYear} DevPortfolio. All Rights Reserved.
                </div>
            </footer>
        `;
    }
}

// Define the custom element
customElements.define('app-footer', AppFooter); 