import React, { useState, useEffect } from 'react';

const Home = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const phrases = [
    "Full Stack Developer",
    "Machine Learning Engineer",
    "Problem Solver",
    "Tech Enthusiast",
    "Code Craftsman"
  ];

  useEffect(() => {
    const currentPhrase = phrases[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypewriterText(currentPhrase.substring(0, typewriterText.length + 1));
        
        if (typewriterText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTypewriterText(currentPhrase.substring(0, typewriterText.length - 1));
        
        if (typewriterText === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typewriterText, currentIndex, isDeleting]);

  return (
    <div className="about-container">
      <div className="about-content">
        <div className="header-section">
          <div className="profile-image">
            <div className="avatar-placeholder">
              <span>RM</span>
            </div>
            <div className="status-indicator"></div>
          </div>
          
          <div className="intro-text">
            <h1 className="name-title">
              Hi, I'm <span className="highlight">Rohana Mahimkar</span>
            </h1>
            <div className="typewriter-container">
              <span className="typewriter-text">{typewriterText}</span>
              <span className="cursor">|</span>
            </div>
            <div className="social-links">
              <a href="https://github.com/rohana-2005" target="_blank" rel="noopener noreferrer" className="social-link github">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/rohana-mahimkar-96341a283/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="info-grid">
          <div className="info-card education">
            <div className="card-header">
              <span className="icon">🎓</span>
              <h3>Education</h3>
            </div>
            <div className="card-content">
              <p><strong>B.Tech Information Technology</strong></p>
              <p>Dwarkadas J. Sanghvi College of Engineering</p>
              <p className="duration">2023 - 2027</p>
            </div>
          </div>

          <div className="info-card location">
            <div className="card-header">
              <span className="icon">📍</span>
              <h3>Location</h3>
            </div>
            <div className="card-content">
              <p>Mumbai, Maharashtra, India</p>
            </div>
          </div>

          <div className="info-card focus">
            <div className="card-header">
              <span className="icon">💻</span>
              <h3>Focus</h3>
            </div>
            <div className="card-content">
              <p>Full Stack Web Development</p>
              <p>Machine Learning</p>
              <p>NLP</p>
            </div>
          </div>

          <div className="info-card interests">
            <div className="card-header">
              <span className="icon">🌟</span>
              <h3>Interests</h3>
            </div>
            <div className="card-content">
              <p>Modern Web Technologies</p>
              <p>Problem Solving & Algorithms</p>
              <p>Open Source Contribution</p>
            </div>
          </div>
        </div>

        <div className="goal-section">
          <div className="goal-card">
            <div className="goal-icon">🎯</div>
            <div className="goal-content">
              <h3>My Goal</h3>
              <p>Motivated and detail-oriented B.Tech IT student with a strong foundation in computer science and a keen interest in full-stack web development. Seeking opportunities to apply and enhance my skills in technologies like React, Flask, and Python, while also exploring innovative solutions through machine learning and natural language processing. Eager to contribute to dynamic teams and build impactful digital products.</p>
            </div>
          </div>
        </div>

        <div className="stats-section">
          <div className="stat-item">
            <div className="stat-number">2+</div>
            <div className="stat-label">Years Learning</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">20+</div>
            <div className="stat-label">Technologies</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">∞</div>
            <div className="stat-label">Curiosity</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-container {
          background: #1e1e1e;
          color: #d4d4d4;
          min-height: 100vh;
          padding: 2rem;
          font-family: 'Fira Code', 'Consolas', monospace;
          overflow-x: hidden;
        }

        .about-content {
          max-width: 1200px;
          margin: 0 auto;
          animation: fadeInUp 0.8s ease-out;
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

        .header-section {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-bottom: 3rem;
          padding: 2rem;
          background: #252526;
          border-radius: 8px;
          border: 1px solid #3e3e42;
          animation: slideInLeft 0.6s ease-out;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .profile-image {
          position: relative;
          flex-shrink: 0;
        }

        .avatar-placeholder {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #007acc, #005a9e);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          font-weight: bold;
          color: white;
          border: 3px solid #007acc;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .avatar-placeholder:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(0, 122, 204, 0.5);
        }

        .status-indicator {
          position: absolute;
          bottom: 5px;
          right: 5px;
          width: 15px;
          height: 15px;
          background: #4caf50;
          border-radius: 50%;
          border: 2px solid #1e1e1e;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        .intro-text {
          flex: 1;
        }

        .name-title {
          font-size: 2.2rem;
          margin-bottom: 0.8rem;
          color: #d4d4d4;
        }

        .highlight {
          color: #007acc;
          background: linear-gradient(45deg, #007acc, #00d4ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .typewriter-container {
          font-size: 1.2rem;
          height: 1.8rem;
          color: #569cd6;
          margin-bottom: 1rem;
        }

        .typewriter-text {
          font-weight: 500;
        }

        .cursor {
          animation: blink 1s infinite;
          color: #007acc;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .info-card {
          background: #252526;
          padding: 1.2rem;
          border-radius: 8px;
          border: 1px solid #3e3e42;
          transition: all 0.3s ease;
          cursor: pointer;
          animation: fadeIn 0.6s ease-out;
        }

        .info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 122, 204, 0.1);
          border-color: #007acc;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .icon {
          font-size: 1.2rem;
        }

        .card-header h3 {
          color: #007acc;
          margin: 0;
          font-size: 1rem;
        }

        .card-content p {
          margin: 0.5rem 0;
          color: #d4d4d4;
        }

        .duration {
          color: #569cd6 !important;
          font-style: italic;
        }

        .goal-section {
          margin-bottom: 3rem;
        }

        .goal-card {
          background: linear-gradient(135deg, #252526, #2d2d30);
          padding: 1.5rem;
          border-radius: 12px;
          border: 1px solid #007acc;
          display: flex;
          align-items: center;
          gap: 1.2rem;
          transition: all 0.3s ease;
          animation: slideInRight 0.6s ease-out;
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .goal-card:hover {
          transform: scale(1.02);
          box-shadow: 0 15px 35px rgba(0, 122, 204, 0.2);
        }

        .goal-icon {
          font-size: 2.2rem;
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .goal-content h3 {
          color: #007acc;
          margin: 0 0 0.8rem 0;
          font-size: 1.3rem;
        }

        .goal-content p {
          margin: 0;
          font-size: 1rem;
          line-height: 1.6;
        }

        .stats-section {
          display: flex;
          justify-content: space-around;
          background: #252526;
          padding: 1.5rem;
          border-radius: 8px;
          border: 1px solid #3e3e42;
        }

        .stat-item {
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .stat-item:hover {
          transform: scale(1.1);
        }

        .stat-number {
          font-size: 2rem;
          font-weight: bold;
          color: #007acc;
          margin-bottom: 0.4rem;
        }

        .stat-label {
          color: #d4d4d4;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #252526;
          border: 1px solid #3e3e42;
          color: #d4d4d4;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .social-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        .social-link.github:hover {
          background: #333;
          border-color: #f0f6fc;
          color: #f0f6fc;
        }

        .social-link.linkedin:hover {
          background: #0077b5;
          border-color: #0077b5;
          color: white;
        }

        .social-link svg {
          width: 20px;
          height: 20px;
          transition: all 0.3s ease;
        }

        .social-link:hover svg {
          transform: scale(1.1);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .info-card:nth-child(1) { animation-delay: 0.1s; }
        .info-card:nth-child(2) { animation-delay: 0.2s; }
        .info-card:nth-child(3) { animation-delay: 0.3s; }
        .info-card:nth-child(4) { animation-delay: 0.4s; }

        @media (max-width: 768px) {
          .header-section {
            flex-direction: column;
            text-align: center;
          }
          
          .name-title {
            font-size: 1.8rem;
          }
          
          .info-grid {
            grid-template-columns: 1fr;
          }
          
          .goal-card {
            flex-direction: column;
            text-align: center;
          }
          
          .stats-section {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;