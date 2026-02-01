import React, { useState, useEffect } from 'react';

const Sidebar = ({ onFileClick, activeFile }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const files = [
    { name: 'home.tsx', icon: '⚛️', color: '#61dafb' },
    { name: 'education.json', icon: '🎓', color: '#ff6b6b' },
    { name: 'skills.html', icon: '🌐', color: '#e34c26' },
    
    { name: 'projects.js', icon: '📁', color: '#f7df1e' },
    
    { name: 'Experience.md', icon: '📝', color: '#ffffff' },
    { name: 'contact.css', icon: '🎨', color: '#1572b6' },
  ];

  const sidebarStyle = {
    width: '250px',
    backgroundColor: '#252526',
    borderRight: '1px solid #3c3c3c',
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  };

  // Mobile / small-screen overlay style (applied when isMobile and expanded)
  const mobileOverlayStyle = {
    position: 'fixed',
    top: '30px', // leave room for MenuBar
    left: 0,
    bottom: 0,
    width: '70%',
    maxWidth: '320px',
    backgroundColor: '#252526',
    borderRight: '1px solid #3c3c3c',
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100% - 30px)',
    zIndex: 1000,
    boxShadow: '2px 0 12px rgba(0,0,0,0.5)'
  };

  const headerStyle = {
    padding: '8px 12px',
    fontSize: '11px',
    fontWeight: 'bold',
    color: '#cccccc',
    backgroundColor: '#2d2d30',
    borderBottom: '1px solid #3c3c3c',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  };

  const folderHeaderStyle = {
    padding: '4px 8px',
    fontSize: '13px',
    color: '#cccccc',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    userSelect: 'none'
  };

  const fileListStyle = {
    padding: '0',
    margin: '0',
    listStyle: 'none',
    flex: 1
  };

  const hamburgerButtonStyle = {
    position: 'fixed',
    top: '4px',
    left: '8px',
    zIndex: 1100,
    width: '40px',
    height: '26px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#252526',
    color: '#cccccc',
    border: '1px solid #3c3c3c',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  const fileItemStyle = (isActive) => ({
    padding: '4px 8px 4px 24px',
    fontSize: '13px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: isActive ? '#37373d' : 'transparent',
    color: isActive ? '#ffffff' : '#cccccc',
    borderLeft: isActive ? '2px solid #007acc' : '2px solid transparent'
  });

  const iconStyle = {
    marginRight: '8px',
    fontSize: '14px'
  };

  // Detect small screens and auto-toggle mobile mode
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 600;
      setIsMobile(mobile);
      // collapse sidebar by default on mobile, expand on desktop
      if (mobile) {
        setIsExpanded(false);
      } else {
        setIsExpanded(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Hamburger toggle shown on small screens when sidebar is collapsed */}
      {isMobile && !isExpanded && (
        <button
          aria-label="Open sidebar"
          style={hamburgerButtonStyle}
          onClick={() => setIsExpanded(true)}
        >
          ☰
        </button>
      )}

      <div style={isMobile ? (isExpanded ? mobileOverlayStyle : { width: '0', display: 'none' }) : sidebarStyle}>
      <div style={headerStyle}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span>Explorer</span>
          {isMobile && (
            <button
              onClick={() => setIsExpanded(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#cccccc',
                cursor: 'pointer',
                fontSize: '18px',
                lineHeight: '1'
              }}
              aria-label="Close sidebar"
            >
              ×
            </button>
          )}
        </div>
      </div>
      <div style={folderHeaderStyle} onClick={() => setIsExpanded(!isExpanded)}>
        <span style={{ marginRight: '4px' }}>
          {isExpanded ? '▼' : '▶'}
        </span>
        PORTFOLIO
      </div>
      {isExpanded && (
        <ul style={fileListStyle}>
          {files.map((file) => (
            <li
              key={file.name}
              style={fileItemStyle(activeFile === file.name)}
              onClick={() => onFileClick(file.name)}
            >
              <span style={{ ...iconStyle, color: file.color }}>
                {file.icon}
              </span>
              {file.name}
            </li>
          ))}
        </ul>
      )}
      <br/><br/><br/>
    </div>
    </>
  );
};

export default Sidebar;