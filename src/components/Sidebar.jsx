import React, { useState } from 'react';

const Sidebar = ({ onFileClick, activeFile }) => {
  const [isExpanded, setIsExpanded] = useState(true);

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

  return (
    <div style={sidebarStyle}>
      <div style={headerStyle}>
        Explorer
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
    </div>
  );
};

export default Sidebar;