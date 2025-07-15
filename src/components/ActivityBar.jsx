import React from 'react';

const ActivityBar = ({ activeView, setActiveView, onTerminalClick }) => {
  const activities = [
    { id: 'explorer', icon: '📁', title: 'Explorer', active: true },
    { id: 'search', icon: '🔍', title: 'Search' },
    { id: 'source-control', icon: '🌿', title: 'Source Control' },
    { id: 'debug', icon: '🐛', title: 'Run and Debug' },
    { id: 'extensions', icon: '⬜', title: 'Extensions' },
    { id: 'remote', icon: '🔗', title: 'Remote Explorer' },
  ];

  const bottomActivities = [
    { id: 'terminal', icon: '🖥️', title: 'Terminal' },
    { id: 'accounts', icon: '👤', title: 'Accounts' },
    { id: 'settings', icon: '⚙️', title: 'Manage' },
  ];

  const activityBarStyle = {
    width: '48px',
    backgroundColor: '#333333',
    borderRight: '1px solid #3c3c3c',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '8px',
    paddingBottom: '8px'
  };

  const activityItemStyle = (isActive) => ({
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    position: 'relative',
    color: isActive ? '#ffffff' : '#858585',
    backgroundColor: isActive ? '#37373d' : 'transparent',
    borderLeft: isActive ? '2px solid #007acc' : '2px solid transparent',
    fontSize: '20px',
    transition: 'all 0.2s ease'
  });

  const spacerStyle = {
    flex: 1
  };

  const tooltipStyle = {
    position: 'absolute',
    left: '52px',
    backgroundColor: '#1e1e1e',
    color: '#cccccc',
    padding: '4px 8px',
    borderRadius: '3px',
    fontSize: '12px',
    whiteSpace: 'nowrap',
    zIndex: 1000,
    border: '1px solid #454545',
    boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
  };

  return (
    <div style={activityBarStyle}>
      {activities.map((activity) => (
        <div
          key={activity.id}
          style={activityItemStyle(activity.id === 'explorer')}
          onClick={() => setActiveView && setActiveView(activity.id)}
          title={activity.title}
          onMouseEnter={(e) => {
            if (activity.id !== 'explorer') {
              e.target.style.color = '#ffffff';
            }
          }}
          onMouseLeave={(e) => {
            if (activity.id !== 'explorer') {
              e.target.style.color = '#858585';
            }
          }}
        >
          {activity.icon}
        </div>
      ))}
      
      <div style={spacerStyle}></div>
      
      {bottomActivities.map((activity) => (
        <div
          key={activity.id}
          style={activityItemStyle(false)}
          title={activity.title}
          onClick={activity.id === 'terminal' ? onTerminalClick : undefined}
          onMouseEnter={(e) => e.target.style.color = '#ffffff'}
          onMouseLeave={(e) => e.target.style.color = '#858585'}
        >
          {activity.icon}
        </div>
      ))}
    </div>
  );
};

export default ActivityBar;