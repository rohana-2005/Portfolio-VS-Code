import React, { useState } from 'react';

const Education = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const educationData = [
    {
      id: 'college',
      degree: 'B-Tech in Information Technology',
      institution: "SVKM's Dwarkadas J. Sanghvi College of Engineering",
      description: "Specialized in cutting-edge technologies with focus on AI and full-stack development",
      duration: "2023 - 2027",
      location: "Mumbai, Maharashtra, India",
      grade: "SGPA: 9.86/10",
      status: "Honors: DevOps MLOps",
      subjects: [
        "Data Structures & Algorithms",
        "Machine Learning", 
        "Web Development",
        "Database Management",
        "Operating Systems",
        "System Design",
        "Software Engineering"
      ],
      color: '#4fc3f7',
      type: 'Ongoing (3rd Year)'
    },
    {
      id: 'college2',
      degree: 'Intermediate College',
      institution: "Nagindas Khandwala College",
      duration: "Jun 2021 - Mar 2023",
      location: "Mumbai, Maharashtra, India",
      grade: "82.83%",
      subjects: [
        "C++ Programming",
        "Basics of IT", 
        "Operating Systems",
        "SDLC",
        "web technologies",
        "Cyber security"
      ],
      color: '#4ec9b0',
      type: 'completed'
    },
    {
      id: 'school',
      degree: 'High School',
      institution: "Gokuldham High School",
      duration: "Jun 2011 - Mar 2021",
      location: "Mumbai, Maharashtra, India",
      grade: "92.50%",
      subjects: [
        "Java Programming", 
        "Technical Drawing"
      ],
      color: '#c586c0',
      type: 'completed'
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
      }}>Education</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {educationData.map((edu, idx) => (
          <div 
            key={edu.id}
            style={{
              background: hoveredItem === edu.id ? '#252526' : '#1e1e1e',
              borderRadius: '6px',
              padding: '16px',
              border: `1px solid ${hoveredItem === edu.id ? edu.color : '#2d2d30'}`,
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={() => setHoveredItem(edu.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {/* Animated background gradient */}
            {hoveredItem === edu.id && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                right: 0,
                bottom: 0,
                background: `linear-gradient(90deg, transparent, ${edu.color}15, transparent)`,
                animation: 'slideIn 0.8s ease-out',
                pointerEvents: 'none',
              }}></div>
            )}
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <div style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: edu.color,
                  boxShadow: hoveredItem === edu.id ? `0 0 12px ${edu.color}` : 'none',
                  transition: 'box-shadow 0.3s ease',
                }}></div>
                <span style={{
                  color: edu.color,
                  fontWeight: 600,
                  fontSize: '14px',
                  fontFamily: '"Consolas", "Courier New", monospace',
                }}>{edu.degree}</span>
                {edu.honors && (
                  <span style={{
                    background: `${edu.color}20`,
                    color: edu.color,
                    padding: '2px 6px',
                    borderRadius: '3px',
                    fontSize: '11px',
                    fontWeight: 500,
                    border: `1px solid ${edu.color}40`,
                  }}>
                    {edu.honors}
                  </span>
                )}
              </div>

              {/* Institution */}
              <div style={{
                color: hoveredItem === edu.id ? '#ffffff' : '#cccccc',
                fontWeight: 600,
                fontSize: '14px',
                marginBottom: '4px',
                transition: 'color 0.3s ease',
              }}>
                {edu.institution}
              </div>

              {/* Description */}
              {edu.description && (
                <div style={{
                  color: '#9d9d9d',
                  fontSize: '12px',
                  marginBottom: '8px',
                  fontStyle: 'italic',
                }}>
                  {edu.description}
                </div>
              )}

              {/* Duration and Location */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '8px',
                flexWrap: 'wrap',
                gap: '8px',
              }}>
                <span style={{
                  color: '#9d9d9d',
                  fontSize: '12px',
                  fontFamily: '"Consolas", "Courier New", monospace',
                }}>
                  {edu.duration}
                </span>
                {edu.location && (
                  <span style={{
                    color: '#9d9d9d',
                    fontSize: '12px',
                  }}>
                    {edu.location}
                  </span>
                )}
              </div>

              {/* Grade and Status */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: edu.subjects ? '12px' : '0',
              }}>
                <span style={{
                  background: `${edu.color}20`,
                  color: edu.color,
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontWeight: 500,
                  border: `1px solid ${edu.color}40`,
                  fontFamily: '"Consolas", "Courier New", monospace',
                }}>
                  {edu.grade}
                </span>
                {edu.status && (
                  <span style={{
                    background: '#dcdcaa20',
                    color: '#dcdcaa',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: 500,
                    border: '1px solid #dcdcaa40',
                  }}>
                    {edu.status}
                  </span>
                )}
              </div>

              {/* Key Subjects */}
              {edu.subjects && (
                <div>
                  <div style={{
                    color: '#9d9d9d',
                    fontSize: '12px',
                    marginBottom: '6px',
                    fontWeight: 600,
                  }}>
                    Key Subjects
                  </div>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                  }}>
                    {edu.subjects.map((subject, subIdx) => (
                      <span
                        key={subject}
                        style={{
                          background: hoveredItem === edu.id ? '#37373d' : '#2d2d30',
                          color: hoveredItem === edu.id ? edu.color : '#cccccc',
                          padding: '3px 6px',
                          borderRadius: '3px',
                          fontSize: '11px',
                          fontWeight: 500,
                          border: `1px solid ${hoveredItem === edu.id ? edu.color : '#2d2d30'}`,
                          transition: 'all 0.3s ease',
                          transform: hoveredItem === edu.id ? 'translateY(-1px)' : 'translateY(0)',
                          boxShadow: hoveredItem === edu.id ? `0 2px 4px ${edu.color}20` : 'none',
                        }}
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes slideIn {
          0% { 
            left: -100%;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% { 
            left: 100%;
            opacity: 0;
          }
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

export default Education;