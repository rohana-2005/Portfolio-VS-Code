import React, { useState, useRef, useEffect } from 'react';

function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { text: 'AI Terminal connected to Gemini', type: 'output' },
    { text: 'Type your question and press Enter', type: 'output' },
    { text: 'Try "help" for commands', type: 'output' }
  ]);
  const [height, setHeight] = useState(300);
  const [isLoading, setIsLoading] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);
  const resizeRef = useRef(null);

  const handleCommand = async (e) => {
    if (e.key !== 'Enter') return;
    
    const command = input.trim();
    if (!command) return;

    // Add user input to history
    setHistory(prev => [...prev, { text: command, type: 'input' }]);
    setInput('');
    setIsLoading(true);

    try {
      // Handle local commands
      if (command === 'clear') {
        setHistory([]);
        setIsLoading(false);
        return;
      }

      if (command === 'help') {
        setHistory(prev => [...prev, 
          { text: 'Available commands:', type: 'output' },
          { text: '  clear - Clears terminal history', type: 'output' },
          { text: '  help  - Shows this message', type: 'output' },
          { text: '  Any other text will query the AI', type: 'output' }
        ]);
        setIsLoading(false);
        return;
      }

      // Send query to Flask backend
      const response = await fetch('http://localhost:8000/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: command }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }

      const data = await response.json();
      setHistory(prev => [...prev, { text: data.response, type: 'output' }]);
    } catch (error) {
      setHistory(prev => [...prev, 
        { text: `Error: ${error.message}`, type: 'error' },
        { text: 'Ensure the Flask server is running (python app.py)', type: 'output' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-scroll and focus effects
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);
  
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleResize = (e) => {
    e.preventDefault();
    const startY = e.clientY;
    const startHeight = height;
    
    const handleMouseMove = (e) => {
      const newHeight = Math.min(600, Math.max(100, startHeight + (startY - e.clientY)));
      setHeight(newHeight);
    };
    
    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'default';
      document.body.style.userSelect = 'auto';
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.body.style.cursor = 'ns-resize';
    document.body.style.userSelect = 'none';
  };

  return (
    <div style={{
      width: '100%',
      height: isMaximized ? '100vh' : `${height}px`,
      backgroundColor: '#1E1E1E',
      color: '#CCCCCC',
      fontFamily: '"Cascadia Code", "Fira Code", Consolas, "Courier New", monospace',
      fontSize: '14px',
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid #3C3C3C',
      borderRadius: '0',
      position: 'relative',
      minHeight: '100px',
      maxHeight: isMaximized ? '100vh' : '600px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
    }}>
      {/* Terminal tab bar */}
      <div style={{
        display: 'flex',
        backgroundColor: '#2D2D2D',
        borderBottom: '1px solid #3C3C3C',
        height: '35px',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
        userSelect: 'none',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <div style={{
            backgroundColor: '#007ACC',
            color: '#FFFFFF',
            padding: '4px 12px',
            borderRadius: '2px',
            fontSize: '12px',
            fontWeight: '500',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}>
            <span>▶</span>
            <span>Terminal</span>
          </div>
          <div style={{
            color: '#CCCCCC',
            fontSize: '12px',
            opacity: 0.7,
          }}>
            AI Terminal (Gemini Pro)
          </div>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <button
            onClick={() => setIsMaximized(!isMaximized)}
            style={{
              background: 'none',
              border: 'none',
              color: '#CCCCCC',
              cursor: 'pointer',
              padding: '4px',
              fontSize: '12px',
              opacity: 0.7,
              borderRadius: '2px',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#404040'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            {isMaximized ? '🗗' : '🗖'}
          </button>
          <button
            onClick={() => setHistory([])}
            style={{
              background: 'none',
              border: 'none',
              color: '#CCCCCC',
              cursor: 'pointer',
              padding: '4px',
              fontSize: '12px',
              opacity: 0.7,
              borderRadius: '2px',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#404040'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            🗑
          </button>
        </div>
      </div>

      {/* Terminal content */}
      <div 
        ref={terminalRef}
        style={{
          flex: '1 1 0%',
          minHeight: 0,
          padding: '12px 16px',
          overflowY: 'auto',
          scrollBehavior: 'smooth',
          background: 'linear-gradient(180deg, #1E1E1E 0%, #1A1A1A 100%)',
          lineHeight: '1.5',
        }}
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item, index) => (
          <div key={index} style={{ 
            marginBottom: '6px',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            display: 'flex',
            alignItems: 'flex-start',
          }}>
            {item.type === 'input' ? (
              <>
                <span style={{ 
                  color: '#4EC9B0', 
                  fontWeight: '600',
                  minWidth: '14px',
                  marginRight: '8px',
                }}>$</span>
                <span style={{ color: '#FFFFFF' }}>{item.text}</span>
              </>
            ) : (
              <div style={{ 
                color: item.type === 'error' ? '#F44747' : '#D4D4D4',
                paddingLeft: '22px',
                width: '100%',
              }}>
                {item.text}
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div style={{ 
            color: '#569CD6', 
            marginBottom: '6px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <span style={{ color: '#4EC9B0', fontWeight: '600' }}>$</span>
            <span>Thinking</span>
            <div style={{
              display: 'inline-flex',
              gap: '2px',
            }}>
              <div style={{
                width: '4px',
                height: '4px',
                backgroundColor: '#569CD6',
                borderRadius: '50%',
                animation: 'pulse 1.5s ease-in-out infinite',
              }}></div>
              <div style={{
                width: '4px',
                height: '4px',
                backgroundColor: '#569CD6',
                borderRadius: '50%',
                animation: 'pulse 1.5s ease-in-out infinite 0.5s',
              }}></div>
              <div style={{
                width: '4px',
                height: '4px',
                backgroundColor: '#569CD6',
                borderRadius: '50%',
                animation: 'pulse 1.5s ease-in-out infinite 1s',
              }}></div>
            </div>
          </div>
        )}
      </div>

      {/* Terminal input */}
      <div style={{ 
        display: 'flex', 
        padding: '12px 16px 16px 16px',
        background: 'linear-gradient(180deg, #1A1A1A 0%, #1E1E1E 100%)',
        borderTop: '1px solid #2D2D2D',
        alignItems: 'center',
      }}>
        <span style={{ 
          color: '#4EC9B0', 
          fontWeight: '600',
          marginRight: '8px',
        }}>$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          disabled={isLoading}
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            color: '#FFFFFF',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            caretColor: '#FFFFFF',
          }}
          placeholder={isLoading ? '' : 'Type your command here...'}
        />
      </div>

      {/* Resize handle */}
      {!isMaximized && (
        <div 
          ref={resizeRef}
          onMouseDown={handleResize}
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '4px',
            backgroundColor: 'transparent',
            cursor: 'ns-resize',
            zIndex: 10,
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#007ACC'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        />
      )}

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        
        /* Scrollbar styling */
        div::-webkit-scrollbar {
          width: 8px;
        }
        
        div::-webkit-scrollbar-track {
          background: #1E1E1E;
        }
        
        div::-webkit-scrollbar-thumb {
          background: #424242;
          border-radius: 4px;
        }
        
        div::-webkit-scrollbar-thumb:hover {
          background: #4A4A4A;
        }
      `}</style>
    </div>
  );
}

export default Terminal;