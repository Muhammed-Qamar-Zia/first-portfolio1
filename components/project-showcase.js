// Project Showcase Web Component
class ProjectShowcase extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.projects = [
            {
                title: 'E-Commerce Website',
                description: 'A full-featured e-commerce website with product listings, shopping cart, and checkout functionality.',
                image: 'assets/images/project1.jpg',
                tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
                liveLink: '#',
                codeLink: '#'
            },
            {
                title: 'Task Management App',
                description: 'A task management application with drag-and-drop functionality, task filtering, and user authentication.',
                image: 'assets/images/project2.jpg',
                tags: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Firebase'],
                liveLink: '#',
                codeLink: '#'
            },
            {
                title: 'Weather Dashboard',
                description: 'A weather dashboard that displays current weather conditions and forecasts for multiple locations.',
                image: 'assets/images/project3.jpg',
                tags: ['HTML', 'CSS', 'JavaScript', 'APIs', 'Responsive Design'],
                liveLink: '#',
                codeLink: '#'
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
                
                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                    gap: 2rem;
                    margin-top: 2rem;
                }
                
                .project-card {
                    background-color: var(--bg-card, #282838);
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: var(--shadow-md, 0 4px 10px rgba(0, 0, 0, 0.25));
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                }
                
                .project-card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-lg, 0 8px 16px rgba(0, 0, 0, 0.3));
                }
                
                .project-image {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                    border-bottom: 1px solid rgba(138, 43, 226, 0.2);
                    background-color: #1E1E2E;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    overflow: hidden;
                }
                
                .project-image-placeholder {
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, rgba(138, 43, 226, 0.2), rgba(65, 105, 225, 0.2));
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 3rem;
                    position: relative;
                    overflow: hidden;
                }
                
                .project-image-placeholder::before {
                    content: '';
                    position: absolute;
                    width: 150%;
                    height: 150%;
                    background: linear-gradient(
                        90deg,
                        transparent,
                        rgba(255, 255, 255, 0.2),
                        transparent
                    );
                    transform: rotate(45deg);
                    top: -40%;
                    left: -100%;
                    animation: shine 3s infinite;
                }
                
                @keyframes shine {
                    0% {
                        left: -100%;
                    }
                    20% {
                        left: 100%;
                    }
                    100% {
                        left: 100%;
                    }
                }
                
                .project-content {
                    padding: 1.5rem;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                }
                
                .project-title {
                    margin: 0 0 0.75rem 0;
                    font-size: 1.5rem;
                    color: var(--text-primary, #FFFFFF);
                    position: relative;
                    display: inline-block;
                }
                
                .project-title::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 40px;
                    height: 2px;
                    background: linear-gradient(90deg, var(--primary-color, #8A2BE2), var(--secondary-color, #4169E1));
                    border-radius: 2px;
                    transition: width 0.3s ease;
                }
                
                .project-card:hover .project-title::after {
                    width: 60px;
                }
                
                .project-description {
                    color: var(--text-secondary, #E0E0E0);
                    font-size: 0.95rem;
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                    flex-grow: 1;
                }
                
                .project-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    margin-bottom: 1.5rem;
                }
                
                .project-tag {
                    font-size: 0.75rem;
                    padding: 0.25rem 0.75rem;
                    border-radius: 50px;
                    background-color: rgba(138, 43, 226, 0.1);
                    color: var(--light-purple, #9370DB);
                    display: inline-block;
                }
                
                .project-links {
                    display: flex;
                    gap: 1rem;
                }
                
                .project-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 1rem;
                    border-radius: 5px;
                    font-size: 0.9rem;
                    font-weight: 500;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                
                .project-link svg {
                    width: 16px;
                    height: 16px;
                }
                
                .live-link {
                    background-color: var(--primary-color, #8A2BE2);
                    color: white;
                }
                
                .live-link:hover {
                    background-color: var(--light-purple, #9370DB);
                    transform: translateY(-2px);
                }
                
                .code-link {
                    background-color: transparent;
                    color: var(--text-secondary, #E0E0E0);
                    border: 1px solid var(--secondary-color, #4169E1);
                }
                
                .code-link:hover {
                    background-color: rgba(65, 105, 225, 0.1);
                    transform: translateY(-2px);
                }
                
                @media (max-width: 768px) {
                    .projects-grid {
                        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    }
                }
                
                @media (max-width: 576px) {
                    .projects-grid {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            
            <div class="projects-grid">
                ${this.projects.map(project => `
                    <div class="project-card">
                        <div class="project-image">
                            <div class="project-image-placeholder">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                                    <line x1="12" y1="22" x2="12" y2="15.5"></line>
                                    <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                                    <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                                    <line x1="12" y1="2" x2="12" y2="8.5"></line>
                                </svg>
                            </div>
                        </div>
                        <div class="project-content">
                            <h3 class="project-title">${project.title}</h3>
                            <p class="project-description">${project.description}</p>
                            <div class="project-tags">
                                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                            </div>
                            <div class="project-links">
                                <a href="${project.liveLink}" class="project-link live-link" target="_blank" rel="noopener noreferrer">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                    Live Demo
                                </a>
                                <a href="${project.codeLink}" class="project-link code-link" target="_blank" rel="noopener noreferrer">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                    View Code
                                </a>
                            </div>
                        </div>
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
customElements.define('project-showcase', ProjectShowcase); 