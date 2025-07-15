import React, { useState } from 'react';

const MenuBar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    { id: 'file', label: 'File' },
    { id: 'edit', label: 'Edit' },
    { id: 'view', label: 'View' },
    { id: 'go', label: 'Go' },
    { id: 'run', label: 'Run' },
    { id: 'terminal', label: 'Terminal' },
    { id: 'help', label: 'Help' }
  ];

  const menuBarStyle = {
    height: '30px',
    backgroundColor: '#3c3c3c',
    borderBottom: '1px solid #454545',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '8px',
    fontSize: '13px',
    color: '#cccccc',
    userSelect: 'none'
  };

  const titleStyle = {
    flex: 1,
    textAlign: 'center',
    fontWeight: '400',
    fontSize: '13px'
  };

  const menuItemStyle = (isActive) => ({
    padding: '4px 8px',
    cursor: 'pointer',
    backgroundColor: isActive ? '#094771' : 'transparent',
    color: isActive ? '#ffffff' : '#cccccc',
    borderRadius: '2px',
    transition: 'background-color 0.2s ease'
  });

  const windowControlsStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1px'
  };

  const controlButtonStyle = (color) => ({
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: color,
    border: 'none',
    cursor: 'pointer'
  });

  return (
    <div style={menuBarStyle}>
      {menuItems.map((item) => (
        <div
          key={item.id}
          style={menuItemStyle(activeMenu === item.id)}
          onMouseEnter={() => setActiveMenu(item.id)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          {item.label}
        </div>
      ))}
      
      <div style={titleStyle}>
        Rohana Mahimkar - Visual Studio Code
      </div>
      
      
    </div>
  );
};

export default MenuBar;