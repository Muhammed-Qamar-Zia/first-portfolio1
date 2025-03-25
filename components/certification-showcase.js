// Certification Showcase Web Component
class CertificationShowcase extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.certifications = [
            {
                title: 'Full Stack Web Development',
                issuer: 'Udemy',
                date: 'September 2023',
                description: 'Comprehensive certification covering front-end and back-end development technologies.',
                skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
                credentialLink: '#'
            },
            {
                title: 'JavaScript Algorithms and Data Structures',
                issuer: 'freeCodeCamp',
                date: 'June 2023',
                description: 'Certification in advanced JavaScript concepts, algorithms, and data structures.',
                skills: ['JavaScript', 'Algorithms', 'Data Structures', 'Problem Solving'],
                credentialLink: '#'
            },
            {
                title: 'Responsive Web Design',
                issuer: 'Coursera',
                date: 'March 2023',
                description: 'Certification in creating responsive, mobile-first web designs using modern CSS techniques.',
                skills: ['HTML5', 'CSS3', 'Flexbox', 'CSS Grid', 'Media Queries'],
                credentialLink: '#'
            }
        ];
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
                
                .certifications-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
                    gap: 2rem;
                    margin-top: 2rem;
                }
                
                .cert-card {
                    background-color: var(--bg-card, #282838);
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: var(--shadow-md, 0 4px 10px rgba(0, 0, 0, 0.25));
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    position: relative;
                    padding: 2rem;
                    display: flex;
                    flex-direction: column;
                    border-top: 4px solid var(--primary-color, #8A2BE2);
                }
                
                .cert-card:nth-child(2) {
                    border-top-color: var(--secondary-color, #4169E1);
                }
                
                .cert-card:nth-child(3) {
                    border-top-color: var(--light-purple, #9370DB);
                }
                
                .cert-card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-lg, 0 8px 16px rgba(0, 0, 0, 0.3));
                }
                
                .cert-issuer {
                    display: inline-block;
                    padding: 0.25rem 0.75rem;
                    background-color: rgba(138, 43, 226, 0.1);
                    color: var(--light-purple, #9370DB);
                    border-radius: 50px;
                    font-size: 0.8rem;
                    margin-bottom: 1rem;
                }
                
                .cert-title {
                    font-size: 1.5rem;
                    color: var(--text-primary, #FFFFFF);
                    margin: 0 0 0.5rem 0;
                }
                
                .cert-date {
                    color: var(--text-tertiary, #BBBBBB);
                    font-size: 0.9rem;
                    margin-bottom: 1.5rem;
                    display: flex;
                    align-items: center;
                }
                
                .cert-date svg {
                    margin-right: 0.5rem;
                }
                
                .cert-description {
                    color: var(--text-secondary, #E0E0E0);
                    font-size: 0.95rem;
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                    flex-grow: 1;
                }
                
                .cert-skills {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    margin-bottom: 1.5rem;
                }
                
                .cert-skill {
                    font-size: 0.75rem;
                    padding: 0.25rem 0.75rem;
                    background-color: rgba(65, 105, 225, 0.1);
                    color: var(--light-blue, #6495ED);
                    border-radius: 50px;
                    display: inline-block;
                }
                
                .cert-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.75rem 1.5rem;
                    background: linear-gradient(135deg, var(--primary-color, #8A2BE2), var(--secondary-color, #4169E1));
                    color: white;
                    border-radius: 5px;
                    font-size: 0.9rem;
                    font-weight: 500;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    text-align: center;
                    justify-content: center;
                }
                
                .cert-link:hover {
                    background: linear-gradient(135deg, var(--light-purple, #9370DB), var(--light-blue, #6495ED));
                    transform: translateY(-2px);
                    box-shadow: var(--shadow-md, 0 4px 10px rgba(0, 0, 0, 0.25));
                }
                
                .cert-link svg {
                    width: 16px;
                    height: 16px;
                }
                
                .cert-icon {
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    color: rgba(255, 255, 255, 0.1);
                }
                
                @media (max-width: 768px) {
                    .certifications-grid {
                        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    }
                }
                
                @media (max-width: 576px) {
                    .certifications-grid {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            
            <div class="certifications-grid">
                ${this.certifications.map(cert => `
                    <div class="cert-card">
                        <div class="cert-icon">
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="17 8 12 3 7 8"></polyline>
                                <line x1="12" y1="3" x2="12" y2="15"></line>
                            </svg>
                        </div>
                        <span class="cert-issuer">${cert.issuer}</span>
                        <h3 class="cert-title">${cert.title}</h3>
                        <div class="cert-date">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            ${cert.date}
                        </div>
                        <p class="cert-description">${cert.description}</p>
                        <div class="cert-skills">
                            ${cert.skills.map(skill => `<span class="cert-skill">${skill}</span>`).join('')}
                        </div>
                        <a href="${cert.credentialLink}" class="cert-link" target="_blank" rel="noopener noreferrer">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                            View Credential
                        </a>
                    </div>
                `).join('')}
            </div>
        `;
    }

    setupEventListeners() {
        // Placeholder for future event listeners
    }
}

// Define the custom element
customElements.define('certification-showcase', CertificationShowcase); 