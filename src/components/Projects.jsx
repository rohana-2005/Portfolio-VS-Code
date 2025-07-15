import React, { useState } from 'react';
import { ExternalLink, Github, Code, Zap, Brain, Shield, BookOpen, Users } from 'lucide-react';
import portfolio from '../assets/portfolio.png'
import sans from '../assets/sans.png'
import resume from '../assets/resume.png'
import health from '../assets/health.png'
import quiz from '../assets/quiz.png'
import face from '../assets/face.png'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: 'AI-Powered Resume Matcher & Job Recommender.',
      description: 'An intelligent system that matches resumes with job descriptions using AI to provide personalized job recommendations.',
      technologies: ['Python', 'React JS', 'Machine Learning', 'Flask', 'LLM', "GenAI"],
      github: 'https://github.com/rohana-2005/AI-Powered-Resume-Matcher-Job-Recommender',
      demo: '#',
      status: 'Completed',
      language: 'Python',
      icon: <Brain className="w-6 h-6" />,
      color: '#ff6b6b',
      imageSpace: true
    },
    {
      id: 2,
      name: 'Health Risk Analyzer',
      description: 'A comprehensive health monitoring system that analyzes user data to predict and assess various health risks using predictive modeling.',
      technologies: ['Python', 'Data Science', 'Pandas', 'Scikit-learn', 'Matplotlib'],
      github: 'https://github.com/rohana-2005/Health-Risk-Analyzer',
      demo: '#',
      status: 'Completed',
      language: 'Python',
      icon: <Shield className="w-6 h-6" />,
      color: '#4ecdc4',
      imageSpace: true
    },
    {
      id: 3,
      name: 'Sanskrit Learn System',
      description: 'An interactive educational platform designed to teach Sanskrit language with modern learning techniques and user-friendly interface.',
      technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/rohana-2005/Sanskrit-Learn-System',
      demo: '#',
      status: 'Ongoing',
      language: 'JavaScript',
      icon: <BookOpen className="w-6 h-6" />,
      color: '#45b7d1',
      imageSpace: true
    },
    {
      id: 4,
      name: 'Face Mask Detection',
      description: 'Real-time face mask detection system using computer vision and deep learning to identify whether people are wearing masks.',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Deep Learning', 'CNN'],
      github: 'https://github.com/rohana-2005/Face-Mask-Detection',
      demo: '#',
      status: 'Completed',
      language: 'Python',
      icon: <Zap className="w-6 h-6" />,
      color: '#f7b731',
      imageSpace: true
    },
    {
      id: 5,
      name: 'Quiz Website',
      description: 'An interactive quiz platform with dynamic question generation, scoring system, and user progress tracking features.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Local Storage', 'Responsive Design'],
      github: 'https://github.com/rohana-2005/quiz-website',
      demo: '#',
      status: 'Completed',
      language: 'JavaScript',
      icon: <Users className="w-6 h-6" />,
      color: '#5f27cd',
      imageSpace: true
    },
    {
      id: 6,
      name: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects, skills, and professional experience with modern design and smooth animations.',
      technologies: ['React', 'CSS3', 'JavaScript', 'Responsive Design', 'Animations'],
      github: 'https://github.com/rohana-2005/portfolio-website',
      demo: '#',
      status: 'Completed',
      language: 'JavaScript',
      icon: <Code className="w-6 h-6" />,
      color: '#00d2d3',
      imageSpace: true
    }
  ];

  const containerStyle = {
    padding: '40px',
    backgroundColor: '#1e1e1e',
    color: '#d4d4d4',
    minHeight: '100vh',
    fontFamily: 'Consolas, "Courier New", monospace',
    position: 'relative'
  };

  const headerStyle = {
    fontSize: '42px',
    color: '#569cd6',
    marginBottom: '10px',
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'relative'
  };

  const subtitleStyle = {
    fontSize: '16px',
    color: '#9cdcfe',
    textAlign: 'center',
    marginBottom: '50px',
    opacity: '0.8'
  };

  const projectsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '30px',
    maxWidth: '1400px',
    margin: '0 auto'
  };

  const projectCardStyle = (project) => ({
    backgroundColor: '#252526',
    border: `1px solid ${hoveredProject === project.id ? project.color : '#3c3c3c'}`,
    borderRadius: '12px',
    padding: '0',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: hoveredProject === project.id ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
    boxShadow: hoveredProject === project.id 
      ? `0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px ${project.color}40` 
      : '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer'
  });

  const imageContainerStyle = {
    height: '200px',
    backgroundColor: '#2d2d30',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid #3c3c3c',
    position: 'relative',
    overflow: 'hidden'
  };

  const placeholderStyle = (color) => ({
    width: '80px',
    height: '80px',
    backgroundColor: color,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    fontSize: '24px',
    fontWeight: 'bold',
    opacity: hoveredProject ? 0.9 : 0.7,
    transition: 'all 0.3s ease'
  });

  const cardContentStyle = {
    padding: '25px'
  };

  const cardHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '15px'
  };

  const projectTitleStyle = {
    fontSize: '18px',
    color: '#569cd6',
    marginBottom: '8px',
    fontWeight: 'bold',
    lineHeight: '1.3'
  };

  const statusStyle = (status, color) => ({
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '11px',
    fontWeight: 'bold',
    backgroundColor: `${color}20`,
    color: color,
    border: `1px solid ${color}40`,
    display: 'inline-block'
  });

  const languageStyle = (language, color) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '12px',
    color: '#8b949e',
    marginBottom: '15px'
  });

  const languageDotStyle = (color) => ({
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: color
  });

  const projectDescriptionStyle = {
    fontSize: '13px',
    color: '#9cdcfe',
    marginBottom: '20px',
    lineHeight: '1.6',
    opacity: '0.9'
  };

  const techStackStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
    marginBottom: '25px'
  };

  const techTagStyle = (color) => ({
    padding: '4px 8px',
    backgroundColor: `${color}15`,
    color: color,
    borderRadius: '4px',
    fontSize: '11px',
    border: `1px solid ${color}30`,
    fontWeight: '500'
  });

  const linksContainerStyle = {
    display: 'flex',
    gap: '12px'
  };

  const linkStyle = (color, isHovered) => ({
    padding: '10px 16px',
    backgroundColor: isHovered ? color : 'transparent',
    color: isHovered ? '#1e1e1e' : color,
    border: `1px solid ${color}`,
    borderRadius: '6px',
    textDecoration: 'none',
    fontSize: '12px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  });

  const floatingDotStyle = (color, index) => ({
    position: 'absolute',
    width: '4px',
    height: '4px',
    backgroundColor: color,
    borderRadius: '50%',
    top: `${20 + index * 15}%`,
    right: `${10 + index * 5}%`,
    opacity: hoveredProject ? 0.6 : 0.2,
    transition: 'all 0.3s ease',
    animation: `float-${index} 3s ease-in-out infinite`
  });

  // Add CSS animations
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    @keyframes float-0 {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    @keyframes float-1 {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
    }
    @keyframes float-2 {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
    }
  `;
  document.head.appendChild(styleSheet);

  return (
    <div style={containerStyle}>
      
      
      <div style={projectsGridStyle}>
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            style={projectCardStyle(project)}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Floating decoration dots */}
            {[0, 1, 2].map((i) => (
              <div key={i} style={floatingDotStyle(project.color, i)}></div>
            ))}
            
            {/* Image container */}
            <div style={imageContainerStyle}>
              {/* Project image or placeholder */}
              {project.imageSpace ? (
                <img
                  src={
                    project.id === 1 ? resume :
                    project.id === 2 ? health :
                    project.id === 3 ? sans :
                    project.id === 4 ? face :
                    project.id === 5 ? quiz :
                    project.id === 6 ? portfolio :
                    ''
                  }
                  alt={project.name}
                  style={{
                    width: '380px',
                    height: '180px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    border: `2px solid ${project.color}40`,
                    margin: '10px',
                    background: '#232323'
                  }}
                />
              ) : (
                <div style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#2d2d30',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#666',
                  fontSize: '14px',
                  border: `2px dashed ${project.color}40`,
                  borderRadius: '8px',
                  margin: '10px'
                }}>
                  No Image
                </div>
              )}
              {hoveredProject === project.id && (
                <div style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                  backgroundColor: `${project.color}10`,
                  transition: 'all 0.3s ease'
                }}></div>
              )}
            </div>

            {/* Card content */}
            <div style={cardContentStyle}>
              <div style={cardHeaderStyle}>
                <div>
                  <h3 style={projectTitleStyle}>{project.name}</h3>
                  <div style={statusStyle(project.status, project.color)}>
                    {project.status}
                  </div>
                </div>
              </div>
              
              <div style={languageStyle(project.language, project.color)}>
                <div style={languageDotStyle(project.color)}></div>
                {project.language}
              </div>
              
              <p style={projectDescriptionStyle}>{project.description}</p>
              
              <div style={techStackStyle}>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} style={techTagStyle(project.color)}>
                    {tech}
                  </span>
                ))}
              </div>
              
              <div style={linksContainerStyle}>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={linkStyle(project.color, false)}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = project.color;
                    e.target.style.color = '#1e1e1e';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = project.color;
                  }}
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                {project.demo !== '#' && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={linkStyle(project.color, false)}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = project.color;
                      e.target.style.color = '#1e1e1e';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = project.color;
                    }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;