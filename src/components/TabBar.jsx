import React from 'react';

const TabBar = ({ tabs, activeTab, onTabClick, onTabClose }) => {
  const tabBarStyle = {
    display: 'flex',
    backgroundColor: '#2d2d30',
    borderBottom: '1px solid #3c3c3c',
    minHeight: '35px'
  };

  const tabStyle = (isActive) => ({
    padding: '8px 12px',
    backgroundColor: isActive ? '#1e1e1e' : '#2d2d30',
    color: isActive ? '#ffffff' : '#969696',
    border: 'none',
    borderRight: '1px solid #3c3c3c',
    cursor: 'pointer',
    fontSize: '13px',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    minWidth: '80px',
    justifyContent: 'space-between'
  });

  const closeButtonStyle = {
    marginLeft: '8px',
    padding: '2px 4px',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#969696',
    cursor: 'pointer',
    fontSize: '12px',
    borderRadius: '2px'
  };

  const getFileIcon = (fileName) => {
    if (fileName.endsWith('.tsx')) return '⚛️';
    if (fileName.endsWith('.html')) return '🌐';
    if (fileName.endsWith('.css')) return '🎨';
    if (fileName.endsWith('.js')) return '📁';
    if (fileName.endsWith('.json')) return '📄';
    if (fileName.endsWith('.md')) return '📝';
    return '📄';
  };

  return (
    <div style={tabBarStyle}>
      {tabs.map((tab) => (
        <div
          key={tab}
          style={tabStyle(activeTab === tab)}
          onClick={() => onTabClick(tab)}
        >
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '6px', fontSize: '12px' }}>
              {getFileIcon(tab)}
            </span>
            {tab}
          </span>
          {tabs.length > 1 && (
            <button
              style={closeButtonStyle}
              onClick={(e) => {
                e.stopPropagation();
                onTabClose(tab);
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#464647'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              ×
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default TabBar;