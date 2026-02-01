import React, { useState } from 'react';

const Github = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeSection, setActiveSection] = useState('work');

  const experienceData = [
    {
      id: 'smowcode',
      title: 'Software Developer Intern',
      company: 'Smowcode',
      type: 'Full-time',
      duration: 'Jun 2025 - Aug 2025',
      period: '3 mos',
      location: 'Mumbai, Maharashtra, India',
      skills: ['C (Programming Language)'],
      color: '#4fc3f7',
      category: 'work',
      status: 'completed',
      icon: '⚡'
    },
    {
      id: 'djinit-research',
      title: 'Research Lead',
      company: 'DJ InIT.AI',
      type: 'Full-time',
      duration: 'Oct 2025 - Present',
      period: '5 mos',
      location: 'Mumbai, Maharashtra, India',
      color: '#ff6b6b',
      category: 'work',
      status: 'current',
      icon: '🔬'
    },
    {
      id: 'djinit',
      title: 'Technical Co-Committee Member',
      company: 'DJ InIT.AI',
      type: 'Committee',
      duration: 'Oct 2024 - Oct 2025',
      period: '1 yr 1 mo',
      location: 'Mumbai, Maharashtra, India',
      skills: ['React.js', 'MongoDB', 'Event Management'],
      color: '#4ec9b0',
      category: 'work',
      status: 'completed',
      icon: '🤖'
    },
    {
      id: 'djcsi',
      title: 'Editorial Co-Committee Member',
      company: 'DJCSI - Computer Society of India, DJSCE',
      type: 'Committee',
      duration: 'Aug 2024 - Oct 2025',
      period: '1 yr 3 mos',
      location: 'Mumbai, Maharashtra, India',
      color: '#c586c0',
      category: 'work',
      status: 'completed',
      icon: '✍️'
    },
    {
      id: 'codefoilio',
      title: 'Codefoilio - Portfolio Making Hackathon',
      company: 'SPIT',
      type: 'Hackathon',
      duration: 'Participated',
      location: 'Mumbai, Maharashtra, India',
      description: 'Portfolio making hackathon focused on creating innovative developer portfolios',
      color: '#dcdcaa',
      category: 'hackathon',
      status: 'completed',
      icon: '🎨'
    },
    {
      id: 'codeshastra',
      title: 'Codeshastra 11',
      company: 'DJCSI',
      type: 'Hackathon',
      duration: 'Participated',
      location: 'Mumbai, Maharashtra, India',
      description: 'Competitive programming and development hackathon by DJCSI',
      color: '#f44747',
      category: 'hackathon',
      status: 'completed',
      icon: '⚔️'
    }
  ];

  const workExperience = experienceData.filter(exp => exp.category === 'work');
  const hackathons = experienceData.filter(exp => exp.category === 'hackathon');

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
        marginBottom: '20px',
        letterSpacing: '0.5px',
        fontFamily: '"Consolas", "Courier New", monospace',
        borderBottom: '1px solid #2d2d30',
        paddingBottom: '8px',
      }}>Experience</h2>

      {/* Tab Navigation */}
      <div style={{
        display: 'flex',
        marginBottom: '20px',
        background: '#252526',
        borderRadius: '6px',
        padding: '4px',
        border: '1px solid #2d2d30',
      }}>
        <button
          style={{
            flex: 1,
            background: activeSection === 'work' ? '#007acc' : 'transparent',
            color: activeSection === 'work' ? '#ffffff' : '#cccccc',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            fontSize: '13px',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
          }}
          onClick={() => setActiveSection('work')}
        >
          💼 Work Experience
        </button>
        <button
          style={{
            flex: 1,
            background: activeSection === 'hackathon' ? '#007acc' : 'transparent',
            color: activeSection === 'hackathon' ? '#ffffff' : '#cccccc',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            fontSize: '13px',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
          }}
          onClick={() => setActiveSection('hackathon')}
        >
          🏆 Hackathons
        </button>
      </div>

      {/* Timeline Container */}
      <div style={{ position: 'relative', paddingLeft: '30px' }}>
        {/* Timeline Line */}
        <div style={{
          position: 'absolute',
          left: '15px',
          top: '10px',
          bottom: '10px',
          width: '2px',
          background: 'linear-gradient(to bottom, #007acc, #4fc3f7, #4ec9b0)',
          borderRadius: '2px',
        }}></div>

        {/* Experience Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {(activeSection === 'work' ? workExperience : hackathons).map((exp, idx) => (
            <div 
              key={exp.id}
              style={{
                position: 'relative',
                background: hoveredItem === exp.id ? '#252526' : 'transparent',
                borderRadius: '8px',
                padding: '20px',
                border: `1px solid ${hoveredItem === exp.id ? exp.color : 'transparent'}`,
                transition: 'all 0.4s ease',
                cursor: 'pointer',
                transform: hoveredItem === exp.id ? 'translateX(10px) scale(1.02)' : 'translateX(0) scale(1)',
                boxShadow: hoveredItem === exp.id ? `0 8px 25px ${exp.color}25` : 'none',
              }}
              onMouseEnter={() => setHoveredItem(exp.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Timeline Node */}
              <div style={{
                position: 'absolute',
                left: '-35px',
                top: '20px',
                width: '20px',
                height: '20px',
                background: exp.color,
                borderRadius: '50%',
                border: '3px solid #1e1e1e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '10px',
                boxShadow: hoveredItem === exp.id ? `0 0 20px ${exp.color}` : 'none',
                transition: 'all 0.4s ease',
                transform: hoveredItem === exp.id ? 'scale(1.3)' : 'scale(1)',
              }}>
                {exp.icon}
              </div>

              {/* Card Content */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '16px',
                alignItems: 'start',
              }}>
                {/* Left Content */}
                <div>
                  <div style={{
                    color: hoveredItem === exp.id ? '#ffffff' : '#cccccc',
                    fontWeight: 600,
                    fontSize: '16px',
                    marginBottom: '6px',
                    transition: 'color 0.3s ease',
                  }}>
                    {exp.title}
                  </div>
                  
                  <div style={{
                    color: exp.color,
                    fontSize: '14px',
                    fontWeight: 500,
                    marginBottom: '8px',
                  }}>
                    {exp.company}
                  </div>

                  {exp.description && (
                    <div style={{
                      color: '#9d9d9d',
                      fontSize: '12px',
                      fontStyle: 'italic',
                      marginBottom: '12px',
                      lineHeight: '1.5',
                    }}>
                      {exp.description}
                    </div>
                  )}

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '8px',
                  }}>
                    <span style={{
                      color: '#9d9d9d',
                      fontSize: '12px',
                      fontFamily: '"Consolas", "Courier New", monospace',
                    }}>
                      📅 {exp.duration}
                    </span>
                    <span style={{
                      color: '#9d9d9d',
                      fontSize: '12px',
                    }}>
                      • {exp.period}
                    </span>
                  </div>

                  <div style={{
                    color: '#9d9d9d',
                    fontSize: '12px',
                    marginBottom: exp.skills ? '12px' : '0',
                  }}>
                    📍 {exp.location}
                  </div>

                  {exp.skills && (
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '6px',
                    }}>
                      {exp.skills.map((skill, skillIdx) => (
                        <span
                          key={skill}
                          style={{
                            background: `${exp.color}20`,
                            color: exp.color,
                            padding: '4px 8px',
                            borderRadius: '12px',
                            fontSize: '11px',
                            fontWeight: 500,
                            border: `1px solid ${exp.color}40`,
                            transform: hoveredItem === exp.id ? 'translateY(-2px)' : 'translateY(0)',
                            transition: 'transform 0.3s ease',
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right Status */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  gap: '8px',
                }}>
                  {/* <div style={{
                    background: exp.status === 'current' ? '#4ec9b020' : `${exp.color}20`,
                    color: exp.status === 'current' ? '#4ec9b0' : exp.color,
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '11px',
                    fontWeight: 600,
                    border: `1px solid ${exp.status === 'current' ? '#4ec9b040' : exp.color + '40'}`,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}>
                    {exp.status === 'current' ? '🔴 Live' : '✅ Done'}
                  </div> */}
                  
                  {/* <div style={{
                    background: `${exp.color}15`,
                    color: exp.color,
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '11px',
                    fontWeight: 500,
                    border: `1px solid ${exp.color}30`,
                  }}>
                    {exp.type}
                  </div> */}
                </div>
              </div>

              {/* Hover Effect Background */}
              {hoveredItem === exp.id && (
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(135deg, ${exp.color}08, transparent)`,
                  borderRadius: '8px',
                  pointerEvents: 'none',
                  animation: 'pulse 2s ease-in-out infinite',
                }}></div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.1; }
        }
        
        button:hover {
          transform: translateY(-1px);
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
      `}</style><br/><br/><br/>
    </div>
  );
};

export default Github;