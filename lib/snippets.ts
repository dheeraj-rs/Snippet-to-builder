export interface SnippetSet {
  html: string;
  css: string;
  js: string;
  description: string;
}

export interface PageSnippets {
  [key: string]: SnippetSet;
}

export const snippets: PageSnippets = {
  home: {
    html: `
      <header class="header">
        <nav class="nav">
          <div class="logo">YourBrand</div>
          <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">Welcome to Your Website</h1>
          <p class="hero-subtitle">Building amazing digital experiences</p>
          <button class="cta-button">Get Started</button>
        </div>
      </section>

      <section class="features">
        <h2 class="section-title">Our Features</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-icon">🚀</div>
            <h3>Fast Performance</h3>
            <p>Lightning-fast load times for optimal user experience</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎨</div>
            <h3>Beautiful Design</h3>
            <p>Stunning visuals that captivate your audience</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📱</div>
            <h3>Responsive</h3>
            <p>Perfect display on all devices and screen sizes</p>
          </div>
        </div>
      </section>

      <footer class="footer">
        <p>&copy; 2025 YourBrand. All rights reserved.</p>
      </footer>
    `,
    css: `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        line-height: 1.6;
        color: #333;
      }

      .header {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 1rem 2rem;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      }

      .nav {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .logo {
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
      }

      .nav-links {
        display: flex;
        list-style: none;
        gap: 2rem;
      }

      .nav-links a {
        color: white;
        text-decoration: none;
        transition: opacity 0.3s;
      }

      .nav-links a:hover {
        opacity: 0.8;
      }

      .hero {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 2rem;
      }

      .hero-content {
        color: white;
        max-width: 800px;
      }

      .hero-title {
        font-size: 3.5rem;
        margin-bottom: 1rem;
        animation: fadeInUp 1s ease;
      }

      .hero-subtitle {
        font-size: 1.5rem;
        margin-bottom: 2rem;
        opacity: 0.9;
        animation: fadeInUp 1s ease 0.2s both;
      }

      .cta-button {
        background: white;
        color: #667eea;
        padding: 1rem 2rem;
        font-size: 1.1rem;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        transition: transform 0.3s, box-shadow 0.3s;
        animation: fadeInUp 1s ease 0.4s both;
      }

      .cta-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
      }

      .features {
        padding: 5rem 2rem;
        background: #f8f9fa;
      }

      .section-title {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 3rem;
        color: #333;
      }

      .feature-grid {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
      }

      .feature-card {
        background: white;
        padding: 2rem;
        border-radius: 15px;
        text-align: center;
        transition: transform 0.3s, box-shadow 0.3s;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      }

      .feature-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 40px rgba(0,0,0,0.15);
      }

      .feature-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
      }

      .feature-card h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: #667eea;
      }

      .footer {
        background: #333;
        color: white;
        text-align: center;
        padding: 2rem;
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @media (max-width: 768px) {
        .hero-title {
          font-size: 2rem;
        }

        .hero-subtitle {
          font-size: 1.2rem;
        }

        .nav-links {
          gap: 1rem;
        }
      }
    `,
    js: `
      document.addEventListener('DOMContentLoaded', function() {
        const ctaButton = document.querySelector('.cta-button');
        const featureCards = document.querySelectorAll('.feature-card');

        if (ctaButton) {
          ctaButton.addEventListener('click', function() {
            alert('Welcome! Let\\'s get started with your journey.');
          });
        }

        const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }
          });
        }, observerOptions);

        featureCards.forEach(card => {
          card.style.opacity = '0';
          card.style.transform = 'translateY(30px)';
          card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          observer.observe(card);
        });

        let lastScroll = 0;
        const header = document.querySelector('.header');

        window.addEventListener('scroll', function() {
          const currentScroll = window.pageYOffset;

          if (currentScroll > lastScroll && currentScroll > 100) {
            header.style.transform = 'translateY(-100%)';
          } else {
            header.style.transform = 'translateY(0)';
          }

          lastScroll = currentScroll;
        });
      });
    `,
    description: 'Modern homepage with gradient hero section, animated features grid, and sticky navigation. Includes scroll animations and responsive design.'
  },

  about: {
    html: `
      <header class="header">
        <nav class="nav">
          <div class="logo">YourBrand</div>
          <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section class="about-hero">
        <h1>About Us</h1>
        <p>Discover our story and mission</p>
      </section>

      <section class="about-content">
        <div class="container">
          <div class="about-grid">
            <div class="about-text">
              <h2>Our Story</h2>
              <p>Founded in 2020, we've been on a mission to transform the digital landscape. Our team of passionate professionals brings together decades of combined experience in web development, design, and digital strategy.</p>
              <p>We believe in creating experiences that not only look beautiful but also drive real business results. Every project we undertake is treated with the same level of dedication and attention to detail.</p>
            </div>
            <div class="about-image">
              <div class="image-placeholder">
                <span>📸</span>
              </div>
            </div>
          </div>

          <div class="mission-section">
            <h2>Our Mission</h2>
            <p>To empower businesses with cutting-edge digital solutions that drive growth and innovation.</p>
          </div>

          <div class="team-section">
            <h2>Meet Our Team</h2>
            <div class="team-grid">
              <div class="team-member">
                <div class="member-avatar">👨‍💼</div>
                <h3>John Doe</h3>
                <p>CEO & Founder</p>
              </div>
              <div class="team-member">
                <div class="member-avatar">👩‍💻</div>
                <h3>Jane Smith</h3>
                <p>Lead Developer</p>
              </div>
              <div class="team-member">
                <div class="member-avatar">👨‍🎨</div>
                <h3>Mike Johnson</h3>
                <p>Creative Director</p>
              </div>
              <div class="team-member">
                <div class="member-avatar">👩‍💼</div>
                <h3>Sarah Williams</h3>
                <p>Marketing Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer">
        <p>&copy; 2025 YourBrand. All rights reserved.</p>
      </footer>
    `,
    css: `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        line-height: 1.6;
        color: #333;
      }

      .header {
        background: #2c3e50;
        padding: 1rem 2rem;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      }

      .nav {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .logo {
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
      }

      .nav-links {
        display: flex;
        list-style: none;
        gap: 2rem;
      }

      .nav-links a {
        color: white;
        text-decoration: none;
        transition: color 0.3s;
      }

      .nav-links a:hover {
        color: #3498db;
      }

      .about-hero {
        background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
        padding: 8rem 2rem 4rem;
        text-align: center;
        color: white;
      }

      .about-hero h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
      }

      .about-hero p {
        font-size: 1.3rem;
        opacity: 0.9;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
      }

      .about-content {
        padding: 4rem 0;
      }

      .about-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        align-items: center;
        margin-bottom: 4rem;
      }

      .about-text h2 {
        font-size: 2rem;
        margin-bottom: 1.5rem;
        color: #2c3e50;
      }

      .about-text p {
        margin-bottom: 1rem;
        font-size: 1.1rem;
        color: #555;
      }

      .image-placeholder {
        background: linear-gradient(135deg, #e0e0e0 0%, #f5f5f5 100%);
        border-radius: 15px;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 4rem;
      }

      .mission-section {
        background: #3498db;
        color: white;
        padding: 3rem;
        border-radius: 15px;
        text-align: center;
        margin-bottom: 4rem;
      }

      .mission-section h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
      }

      .mission-section p {
        font-size: 1.3rem;
      }

      .team-section {
        text-align: center;
      }

      .team-section h2 {
        font-size: 2.5rem;
        margin-bottom: 3rem;
        color: #2c3e50;
      }

      .team-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
      }

      .team-member {
        background: white;
        padding: 2rem;
        border-radius: 15px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        transition: transform 0.3s, box-shadow 0.3s;
      }

      .team-member:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 30px rgba(0,0,0,0.15);
      }

      .member-avatar {
        font-size: 4rem;
        margin-bottom: 1rem;
      }

      .team-member h3 {
        font-size: 1.3rem;
        margin-bottom: 0.5rem;
        color: #2c3e50;
      }

      .team-member p {
        color: #3498db;
        font-weight: 500;
      }

      .footer {
        background: #2c3e50;
        color: white;
        text-align: center;
        padding: 2rem;
      }

      @media (max-width: 768px) {
        .about-grid {
          grid-template-columns: 1fr;
        }

        .about-hero h1 {
          font-size: 2rem;
        }

        .nav-links {
          gap: 1rem;
        }
      }
    `,
    js: `
      document.addEventListener('DOMContentLoaded', function() {
        const teamMembers = document.querySelectorAll('.team-member');

        const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
              }, index * 100);
            }
          });
        }, observerOptions);

        teamMembers.forEach(member => {
          member.style.opacity = '0';
          member.style.transform = 'translateY(30px)';
          member.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          observer.observe(member);
        });

        const aboutText = document.querySelector('.about-text');
        if (aboutText) {
          aboutText.style.opacity = '0';
          aboutText.style.transform = 'translateX(-30px)';
          aboutText.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

          const textObserver = new IntersectionObserver(function(entries) {
            if (entries[0].isIntersecting) {
              aboutText.style.opacity = '1';
              aboutText.style.transform = 'translateX(0)';
            }
          }, observerOptions);

          textObserver.observe(aboutText);
        }
      });
    `,
    description: 'Professional about page with team showcase, mission statement, and company story. Features staggered animations and responsive grid layouts.'
  },

  services: {
    html: `
      <header class="header">
        <nav class="nav">
          <div class="logo">YourBrand</div>
          <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section class="services-hero">
        <h1>Our Services</h1>
        <p>Comprehensive solutions for your digital needs</p>
      </section>

      <section class="services-content">
        <div class="container">
          <div class="services-grid">
            <div class="service-card" data-service="web">
              <div class="service-icon">🌐</div>
              <h3>Web Development</h3>
              <p>Custom websites built with the latest technologies for optimal performance and user experience.</p>
              <ul class="service-features">
                <li>Responsive Design</li>
                <li>SEO Optimization</li>
                <li>Performance Tuning</li>
                <li>Security Best Practices</li>
              </ul>
              <button class="service-btn">Learn More</button>
            </div>

            <div class="service-card" data-service="mobile">
              <div class="service-icon">📱</div>
              <h3>Mobile Development</h3>
              <p>Native and cross-platform mobile applications that engage users on any device.</p>
              <ul class="service-features">
                <li>iOS & Android</li>
                <li>Cross-Platform Solutions</li>
                <li>App Store Optimization</li>
                <li>Push Notifications</li>
              </ul>
              <button class="service-btn">Learn More</button>
            </div>

            <div class="service-card" data-service="design">
              <div class="service-icon">🎨</div>
              <h3>UI/UX Design</h3>
              <p>Beautiful, intuitive interfaces that users love, backed by research and best practices.</p>
              <ul class="service-features">
                <li>User Research</li>
                <li>Wireframing & Prototyping</li>
                <li>Visual Design</li>
                <li>Usability Testing</li>
              </ul>
              <button class="service-btn">Learn More</button>
            </div>

            <div class="service-card" data-service="marketing">
              <div class="service-icon">📊</div>
              <h3>Digital Marketing</h3>
              <p>Strategic marketing campaigns that drive traffic, engagement, and conversions.</p>
              <ul class="service-features">
                <li>SEO & SEM</li>
                <li>Social Media Marketing</li>
                <li>Content Strategy</li>
                <li>Analytics & Reporting</li>
              </ul>
              <button class="service-btn">Learn More</button>
            </div>

            <div class="service-card" data-service="consulting">
              <div class="service-icon">💼</div>
              <h3>Tech Consulting</h3>
              <p>Expert guidance to help you make informed technology decisions for your business.</p>
              <ul class="service-features">
                <li>Technology Audits</li>
                <li>Strategic Planning</li>
                <li>Implementation Support</li>
                <li>Training & Documentation</li>
              </ul>
              <button class="service-btn">Learn More</button>
            </div>

            <div class="service-card" data-service="maintenance">
              <div class="service-icon">🔧</div>
              <h3>Support & Maintenance</h3>
              <p>Ongoing support to keep your digital products running smoothly and securely.</p>
              <ul class="service-features">
                <li>24/7 Monitoring</li>
                <li>Regular Updates</li>
                <li>Bug Fixes</li>
                <li>Performance Optimization</li>
              </ul>
              <button class="service-btn">Learn More</button>
            </div>
          </div>

          <div class="cta-section">
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss how we can help bring your project to life</p>
            <button class="cta-button">Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer class="footer">
        <p>&copy; 2025 YourBrand. All rights reserved.</p>
      </footer>
    `,
    css: `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        line-height: 1.6;
        color: #333;
      }

      .header {
        background: #27ae60;
        padding: 1rem 2rem;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      }

      .nav {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .logo {
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
      }

      .nav-links {
        display: flex;
        list-style: none;
        gap: 2rem;
      }

      .nav-links a {
        color: white;
        text-decoration: none;
        transition: opacity 0.3s;
      }

      .nav-links a:hover {
        opacity: 0.8;
      }

      .services-hero {
        background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
        padding: 8rem 2rem 4rem;
        text-align: center;
        color: white;
      }

      .services-hero h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
      }

      .services-hero p {
        font-size: 1.3rem;
        opacity: 0.9;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
      }

      .services-content {
        padding: 4rem 0;
        background: #f8f9fa;
      }

      .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
        margin-bottom: 4rem;
      }

      .service-card {
        background: white;
        padding: 2.5rem;
        border-radius: 15px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        transition: transform 0.3s, box-shadow 0.3s;
        border-top: 4px solid #27ae60;
      }

      .service-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 40px rgba(0,0,0,0.15);
      }

      .service-icon {
        font-size: 3.5rem;
        margin-bottom: 1rem;
      }

      .service-card h3 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
        color: #27ae60;
      }

      .service-card > p {
        color: #555;
        margin-bottom: 1.5rem;
        font-size: 1.05rem;
      }

      .service-features {
        list-style: none;
        margin-bottom: 2rem;
      }

      .service-features li {
        padding: 0.5rem 0;
        color: #666;
        position: relative;
        padding-left: 1.5rem;
      }

      .service-features li:before {
        content: '✓';
        position: absolute;
        left: 0;
        color: #27ae60;
        font-weight: bold;
      }

      .service-btn {
        background: #27ae60;
        color: white;
        padding: 0.8rem 2rem;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        font-size: 1rem;
        transition: background 0.3s, transform 0.3s;
        width: 100%;
      }

      .service-btn:hover {
        background: #229954;
        transform: scale(1.05);
      }

      .cta-section {
        background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
        color: white;
        padding: 4rem 2rem;
        border-radius: 15px;
        text-align: center;
      }

      .cta-section h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }

      .cta-section p {
        font-size: 1.3rem;
        margin-bottom: 2rem;
        opacity: 0.9;
      }

      .cta-button {
        background: white;
        color: #27ae60;
        padding: 1rem 2.5rem;
        font-size: 1.1rem;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        transition: transform 0.3s, box-shadow 0.3s;
        font-weight: bold;
      }

      .cta-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
      }

      .footer {
        background: #27ae60;
        color: white;
        text-align: center;
        padding: 2rem;
      }

      @media (max-width: 768px) {
        .services-hero h1 {
          font-size: 2rem;
        }

        .services-grid {
          grid-template-columns: 1fr;
        }

        .nav-links {
          gap: 1rem;
        }
      }
    `,
    js: `
      document.addEventListener('DOMContentLoaded', function() {
        const serviceCards = document.querySelectorAll('.service-card');
        const serviceBtns = document.querySelectorAll('.service-btn');
        const ctaButton = document.querySelector('.cta-button');

        const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
              }, index * 100);
            }
          });
        }, observerOptions);

        serviceCards.forEach(card => {
          card.style.opacity = '0';
          card.style.transform = 'translateY(30px) scale(0.95)';
          card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          observer.observe(card);
        });

        serviceBtns.forEach(btn => {
          btn.addEventListener('click', function() {
            const card = this.closest('.service-card');
            const service = card.getAttribute('data-service');
            alert('Learn more about our ' + card.querySelector('h3').textContent + ' services!');
          });
        });

        if (ctaButton) {
          ctaButton.addEventListener('click', function() {
            alert('Thank you for your interest! Our team will contact you shortly.');
          });
        }

        serviceCards.forEach(card => {
          card.addEventListener('mouseenter', function() {
            this.style.borderTopColor = '#2ecc71';
          });

          card.addEventListener('mouseleave', function() {
            this.style.borderTopColor = '#27ae60';
          });
        });
      });
    `,
    description: 'Comprehensive services page with detailed service cards, feature lists, and call-to-action section. Includes interactive hover effects and staggered animations.'
  },

  contact: {
    html: `
      <header class="header">
        <nav class="nav">
          <div class="logo">YourBrand</div>
          <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section class="contact-hero">
        <h1>Get In Touch</h1>
        <p>We'd love to hear from you</p>
      </section>

      <section class="contact-content">
        <div class="container">
          <div class="contact-grid">
            <div class="contact-info">
              <h2>Contact Information</h2>
              <p class="contact-intro">Fill out the form and our team will get back to you within 24 hours.</p>

              <div class="info-items">
                <div class="info-item">
                  <div class="info-icon">📞</div>
                  <div class="info-text">
                    <h4>Phone</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div class="info-item">
                  <div class="info-icon">📧</div>
                  <div class="info-text">
                    <h4>Email</h4>
                    <p>hello@yourbrand.com</p>
                  </div>
                </div>

                <div class="info-item">
                  <div class="info-icon">📍</div>
                  <div class="info-text">
                    <h4>Address</h4>
                    <p>123 Business Street<br>Suite 100<br>City, State 12345</p>
                  </div>
                </div>

                <div class="info-item">
                  <div class="info-icon">🕒</div>
                  <div class="info-text">
                    <h4>Business Hours</h4>
                    <p>Monday - Friday: 9am - 6pm<br>Saturday: 10am - 4pm<br>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div class="social-links">
                <h4>Follow Us</h4>
                <div class="social-icons">
                  <a href="#" class="social-icon">📘</a>
                  <a href="#" class="social-icon">🐦</a>
                  <a href="#" class="social-icon">📷</a>
                  <a href="#" class="social-icon">💼</a>
                </div>
              </div>
            </div>

            <div class="contact-form-wrapper">
              <form class="contact-form" id="contactForm">
                <h2>Send us a Message</h2>

                <div class="form-group">
                  <label for="name">Full Name *</label>
                  <input type="text" id="name" name="name" required>
                </div>

                <div class="form-group">
                  <label for="email">Email Address *</label>
                  <input type="email" id="email" name="email" required>
                </div>

                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone">
                </div>

                <div class="form-group">
                  <label for="subject">Subject *</label>
                  <input type="text" id="subject" name="subject" required>
                </div>

                <div class="form-group">
                  <label for="message">Message *</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>

                <button type="submit" class="submit-btn">Send Message</button>
              </form>
            </div>
          </div>

          <div class="map-section">
            <h2>Find Us</h2>
            <div class="map-placeholder">
              <p>🗺️ Map would be embedded here</p>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer">
        <p>&copy; 2025 YourBrand. All rights reserved.</p>
      </footer>
    `,
    css: `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        line-height: 1.6;
        color: #333;
      }

      .header {
        background: #e74c3c;
        padding: 1rem 2rem;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      }

      .nav {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .logo {
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
      }

      .nav-links {
        display: flex;
        list-style: none;
        gap: 2rem;
      }

      .nav-links a {
        color: white;
        text-decoration: none;
        transition: opacity 0.3s;
      }

      .nav-links a:hover {
        opacity: 0.8;
      }

      .contact-hero {
        background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
        padding: 8rem 2rem 4rem;
        text-align: center;
        color: white;
      }

      .contact-hero h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
      }

      .contact-hero p {
        font-size: 1.3rem;
        opacity: 0.9;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
      }

      .contact-content {
        padding: 4rem 0;
      }

      .contact-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        margin-bottom: 4rem;
      }

      .contact-info h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
        color: #e74c3c;
      }

      .contact-intro {
        color: #666;
        margin-bottom: 2rem;
        font-size: 1.1rem;
      }

      .info-items {
        margin-bottom: 2rem;
      }

      .info-item {
        display: flex;
        gap: 1rem;
        margin-bottom: 2rem;
        padding: 1rem;
        background: #f8f9fa;
        border-radius: 10px;
        transition: transform 0.3s, box-shadow 0.3s;
      }

      .info-item:hover {
        transform: translateX(5px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      }

      .info-icon {
        font-size: 2rem;
      }

      .info-text h4 {
        color: #333;
        margin-bottom: 0.5rem;
      }

      .info-text p {
        color: #666;
        line-height: 1.6;
      }

      .social-links h4 {
        margin-bottom: 1rem;
        color: #333;
      }

      .social-icons {
        display: flex;
        gap: 1rem;
      }

      .social-icon {
        font-size: 2rem;
        transition: transform 0.3s;
        display: inline-block;
      }

      .social-icon:hover {
        transform: scale(1.2) rotate(5deg);
      }

      .contact-form-wrapper {
        background: white;
        padding: 2.5rem;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      }

      .contact-form h2 {
        font-size: 2rem;
        margin-bottom: 2rem;
        color: #e74c3c;
      }

      .form-group {
        margin-bottom: 1.5rem;
      }

      .form-group label {
        display: block;
        margin-bottom: 0.5rem;
        color: #333;
        font-weight: 500;
      }

      .form-group input,
      .form-group textarea {
        width: 100%;
        padding: 0.8rem;
        border: 2px solid #e0e0e0;
        border-radius: 8px;
        font-size: 1rem;
        transition: border-color 0.3s;
        font-family: inherit;
      }

      .form-group input:focus,
      .form-group textarea:focus {
        outline: none;
        border-color: #e74c3c;
      }

      .form-group textarea {
        resize: vertical;
        min-height: 120px;
      }

      .submit-btn {
        background: #e74c3c;
        color: white;
        padding: 1rem 2.5rem;
        border: none;
        border-radius: 50px;
        font-size: 1.1rem;
        cursor: pointer;
        width: 100%;
        transition: background 0.3s, transform 0.3s;
        font-weight: bold;
      }

      .submit-btn:hover {
        background: #c0392b;
        transform: translateY(-2px);
      }

      .map-section {
        text-align: center;
      }

      .map-section h2 {
        font-size: 2rem;
        margin-bottom: 2rem;
        color: #333;
      }

      .map-placeholder {
        background: #f8f9fa;
        border-radius: 15px;
        padding: 4rem;
        font-size: 2rem;
      }

      .footer {
        background: #e74c3c;
        color: white;
        text-align: center;
        padding: 2rem;
      }

      @media (max-width: 768px) {
        .contact-grid {
          grid-template-columns: 1fr;
        }

        .contact-hero h1 {
          font-size: 2rem;
        }

        .nav-links {
          gap: 1rem;
        }
      }
    `,
    js: `
      document.addEventListener('DOMContentLoaded', function() {
        const contactForm = document.getElementById('contactForm');
        const infoItems = document.querySelectorAll('.info-item');
        const formGroups = document.querySelectorAll('.form-group');

        if (contactForm) {
          contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            if (name && email && subject && message) {
              alert('Thank you for your message, ' + name + '! We will get back to you soon.');
              contactForm.reset();
            }
          });
        }

        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(input => {
          input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
            this.parentElement.style.transition = 'transform 0.3s ease';
          });

          input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
          });
        });

        const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
              }, index * 100);
            }
          });
        }, observerOptions);

        infoItems.forEach(item => {
          item.style.opacity = '0';
          item.style.transform = 'translateX(-30px)';
          item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          observer.observe(item);
        });

        const formObserver = new IntersectionObserver(function(entries) {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
              }, index * 100);
            }
          });
        }, observerOptions);

        formGroups.forEach(group => {
          group.style.opacity = '0';
          group.style.transform = 'translateY(20px)';
          group.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
          formObserver.observe(group);
        });
      });
    `,
    description: 'Complete contact page with form validation, contact information cards, social media links, and map section. Features smooth animations and interactive form elements.'
  }
};
