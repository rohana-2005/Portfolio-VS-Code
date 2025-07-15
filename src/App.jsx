import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TabBar from './components/TabBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Github from './components/Github';
import ActivityBar from './components/ActivityBar';
import MenuBar from './components/MenuBar';
import Education from './components/Education';
import Terminal from './components/Terminal';

const App = () => {
  const [activeTab, setActiveTab] = useState('home.tsx');
  const [openTabs, setOpenTabs] = useState(['home.tsx']);
  const [activeView, setActiveView] = useState('explorer');
  const [showTerminal, setShowTerminal] = useState(false);

  const openTab = (fileName) => {
    if (!openTabs.includes(fileName)) {
      setOpenTabs([...openTabs, fileName]);
    }
    setActiveTab(fileName);
  };

  const closeTab = (fileName) => {
    const newTabs = openTabs.filter(tab => tab !== fileName);
    setOpenTabs(newTabs);
    if (activeTab === fileName && newTabs.length > 0) {
      setActiveTab(newTabs[newTabs.length - 1]);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home.tsx':
        return <Home />;
      case 'skills.html':
        return <About />;
      case 'contact.css':
        return <Contact />;
      case 'projects.js':
        return <Projects />;
      case 'Experience.md':
        return <Github />;
      case 'education.json':
        return <Education />;
      default:
        return <Home />;
    }
  };

  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#1e1e1e',
    color: '#d4d4d4',
    fontFamily: 'Consolas, "Courier New", monospace',
    overflow: 'hidden',
    margin: 0,
    padding: 0
  };

  const bodyStyle = {
    display: 'flex',
    flex: 1,
    overflow: 'hidden',
    width: '100%'
  };

  const mainContentStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    width: '100%'
  };

  const contentAreaStyle = {
    flex: 1,
    overflow: 'auto',
    height: '100%',
    width: '100%',
    backgroundColor: '#1e1e1e'
  };

  // Add global styles to remove any default margins/padding
  React.useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    document.documentElement.style.height = '100%';
    document.body.style.height = '100%';
  }, []);

  return (
    <div style={appStyle}>
      <MenuBar />
      <div style={bodyStyle}>
        <ActivityBar activeView={activeView} setActiveView={setActiveView} onTerminalClick={() => setShowTerminal((prev) => !prev)} />
        <Sidebar onFileClick={openTab} activeFile={activeTab} />
        <div style={mainContentStyle}>
          <TabBar 
            tabs={openTabs} 
            activeTab={activeTab} 
            onTabClick={setActiveTab}
            onTabClose={closeTab}
          />
          <div style={contentAreaStyle}>
            {renderContent()}
          </div>
          {showTerminal && (
            <div style={{
              width: '100%',
              height: '200px',
              backgroundColor: '#1e1e1e',
              borderTop: '1px solid #333',
              position: 'relative',
              zIndex: 10,
              boxShadow: '0 -2px 8px rgba(0,0,0,0.2)'
            }}>
              <Terminal />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;