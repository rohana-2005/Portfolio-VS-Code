import React, { useState } from 'react';

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      name: 'Frontend',
      color: '#569cd6',
      bgColor: '#1e1e1e',
      borderColor: '#007acc',
      skills: ['HTML', 'CSS', 'Javascript', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'Bootstrap']
    },
    {
      name: 'Backend',
      color: '#4ec9b0',
      bgColor: '#1e1e1e',
      borderColor: '#4ec9b0',
      skills: ['Node.js', 'Express', 'FastAPI', 'Python', 'Flask', 'MongoDB', 'PostgreSQL', 'SQL Database']
    },
    {
      name: 'AI/ML',
      color: '#c586c0',
      bgColor: '#1e1e1e',
      borderColor: '#c586c0',
      skills: ['TensorFlow', 'PyTorch', 'Hugging Face', 'BeautifulSoup', 'NLP', "GenAI", "LLMs"]
    },
    {
      name: 'Tools & Cloud',
      color: '#dcdcaa',
      bgColor: '#1e1e1e',
      borderColor: '#dcdcaa',
      skills: ['Git', 'Figma', 'Firebase', 'Vercel', 'GitHub']
    },
    {
      name: 'Programming Languages',
      color: '#9cdcfe',
      bgColor: '#1e1e1e',
      borderColor: '#9cdcfe',
      skills: ['C/C++', 'Python', 'Java', 'JavaScript', 'HTML5', 'CSS3', 'SQL']
    },
    {
      name: 'Design',
      color: '#f44747',
      bgColor: '#1e1e1e',
      borderColor: '#f44747',
      skills: ['Figma', 'Canva', 'Adobe XD', 'Photoshop', 'Illustrator', 'Prototyping', 'User Research']
    }
  ];

  return (
    <div style={{
      margin: '16px',
      background: '#1e1e1e',
      borderRadius: '8px',
      padding: '20px',
      border: '1px solid #2d2d30',
      color: '#cccccc',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      fontSize: '13px',
      lineHeight: '1.4',
    }}>
      <h2 style={{
        color: '#4fc3f7',
        fontWeight: 600,
        fontSize: '18px',
        marginBottom: '16px',
        letterSpacing: '0.5px',
        fontFamily: '"Consolas", "Courier New", monospace',
        borderBottom: '1px solid #2d2d30',
        paddingBottom: '8px',
      }}>Skills</h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '16px',
      }}>
        {skillCategories.map((category, idx) => (
          <div key={category.name} style={{
            background: '#252526',
            borderRadius: '6px',
            padding: '12px',
            border: '1px solid #2d2d30',
            transition: 'all 0.2s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={() => setHoveredSkill(`category-${idx}`)}
          onMouseLeave={() => setHoveredSkill(null)}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
              gap: '8px',
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: category.color,
                boxShadow: hoveredSkill === `category-${idx}` ? `0 0 8px ${category.color}` : 'none',
                transition: 'box-shadow 0.2s ease',
              }}></div>
              <span style={{
                color: category.color,
                fontWeight: 600,
                fontSize: '14px',
                fontFamily: '"Consolas", "Courier New", monospace',
              }}>{category.name}</span>
            </div>
            
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '6px',
            }}>
              {category.skills.map((skill, skillIdx) => (
                <span 
                  key={skill} 
                  style={{
                    background: hoveredSkill === `${idx}-${skillIdx}` ? '#37373d' : '#2d2d30',
                    color: hoveredSkill === `${idx}-${skillIdx}` ? category.color : '#cccccc',
                    borderRadius: '4px',
                    padding: '4px 8px',
                    fontSize: '12px',
                    fontWeight: 500,
                    border: `1px solid ${hoveredSkill === `${idx}-${skillIdx}` ? category.borderColor : '#2d2d30'}`,
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={() => setHoveredSkill(`${idx}-${skillIdx}`)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {hoveredSkill === `${idx}-${skillIdx}` && (
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(90deg, transparent, ${category.color}20, transparent)`,
                      animation: 'shimmer 0.6s ease-in-out',
                      pointerEvents: 'none',
                    }}></div>
                  )}
                  <span style={{ position: 'relative', zIndex: 1 }}>{skill}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        /* Scrollbar styling for VS Code feel */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #1e1e1e;
        }
        ::-webkit-scrollbar-thumb {
          background: #424242;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #4f4f4f;
        }
      `}</style>
    </div>
  );
};

export default About;