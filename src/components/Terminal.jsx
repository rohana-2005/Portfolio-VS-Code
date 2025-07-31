import React, { useState, useRef, useEffect } from 'react';

// Use environment variable for API URL or fallback to localhost
const API_URL = 'https://rohanam.pythonanywhere.com';

function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { text: 'Type your question and press Enter', type: 'output' }
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
      const response = await fetch(`${API_URL}/query`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: command }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
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
    <>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .terminal-scrollbar::-webkit-scrollbar {
          width: 14px;
          height: 14px;
        }
        
        .terminal-scrollbar::-webkit-scrollbar-corner {
          background: #1e1e1e;
        }
        
        .terminal-scrollbar::-webkit-scrollbar-track {
          background: #1e1e1e;
        }
        
        .terminal-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(121, 121, 121, 0.4);
          border: 3px solid #1e1e1e;
          border-radius: 7px;
        }
        
        .terminal-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(121, 121, 121, 0.7);
        }
        
        .terminal-scrollbar::-webkit-scrollbar-thumb:active {
          background: rgba(121, 121, 121, 0.9);
        }
        
        .terminal-cursor::after {
          content: '█';
          color: #cccccc;
          animation: blink 1s infinite;
          margin-left: 1px;
        }
        
        .tab-button:hover {
          background-color: rgba(255, 255, 255, 0.1) !important;
        }
        
        .tab-button:active {
          background-color: rgba(255, 255, 255, 0.2) !important;
        }
        
        .resize-handle:hover {
          background-color: #007acc !important;
          height: 2px !important;
        }
      `}</style>
      
      <div style={{
        width: '100%',
        height: isMaximized ? '100vh' : `${height}px`,
        backgroundColor: '#1e1e1e',
        color: '#cccccc',
        fontFamily: '"Consolas", "Courier New", monospace',
        fontSize: '14px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        minHeight: '100px',
        maxHeight: isMaximized ? '100vh' : '600px',
        border: '1px solid #2d2d2d',
      }}>
        {/* VS Code Terminal Header */}
        <div style={{
          display: 'flex',
          backgroundColor: '#252526',
          borderBottom: '1px solid #2d2d2d',
          height: '35px',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0',
          userSelect: 'none',
          position: 'relative',
        }}>
          {/* Left side - Terminal tab */}
          <div style={{
            display: 'flex',
            height: '100%',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#1e1e1e',
              color: '#cccccc',
              padding: '0 16px',
              height: '100%',
              borderRight: '1px solid #2d2d2d',
              position: 'relative',
            }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M1.5 2h13l.5.5v11l-.5.5h-13l-.5-.5v-11l.5-.5zM2 3v10h12V3H2z"/>
                <path d="M3 5h2v1H3V5zm3 0h2v1H6V5zm3 0h2v1H9V5z"/>
              </svg>
              <span style={{ fontSize: '13px' }}>Terminal</span>
            </div>
            <div style={{
              width: '0',
              height: '0',
              borderLeft: '8px solid #1e1e1e',
              borderTop: '17.5px solid transparent',
              borderBottom: '17.5px solid transparent',
              position: 'relative',
              zIndex: 1,
            }}></div>
          </div>

          {/* Right side - Controls */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            paddingRight: '8px',
          }}>
            <button
              className="tab-button"
              onClick={() => setHistory([])}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#cccccc',
                cursor: 'pointer',
                padding: '6px 8px',
                fontSize: '11px',
                borderRadius: '3px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '28px',
                height: '22px',
              }}
              title="Clear Terminal"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M10 3h3v1h-1v9l-1 1H4l-1-1V4H2V3h3V2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1zM9 2H6v1h3V2zM4 13h7V4H4v9zm2-8H5v7h1V5zm1 0h1v7H7V5zm2 0h1v7H9V5z"/>
              </svg>
            </button>
            
            <button
              className="tab-button"
              onClick={() => setIsMaximized(!isMaximized)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#cccccc',
                cursor: 'pointer',
                padding: '6px 8px',
                fontSize: '11px',
                borderRadius: '3px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '28px',
                height: '22px',
              }}
              title={isMaximized ? "Restore Terminal" : "Maximize Terminal"}
            >
              {isMaximized ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M3 5v9h9V5H3zm8 8H4V6h7v7z"/>
                  <path fillRule="evenodd" d="M5 5h1V4h7v7h-1v1h2V3H5v2z"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M3 3v10h10V3H3zm9 9H4V4h8v8z"/>
                </svg>
              )}
            </button>

            <div style={{
              width: '1px',
              height: '16px',
              backgroundColor: '#2d2d2d',
              margin: '0 4px',
            }}></div>

            <button
              className="tab-button"
              style={{
                background: 'transparent',
                border: 'none',
                color: '#cccccc',
                cursor: 'pointer',
                padding: '6px 8px',
                fontSize: '11px',
                borderRadius: '3px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '28px',
                height: '22px',
              }}
              title="Close Terminal"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path fillRule="evenodd" d="m8 8.707 3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Terminal Content */}
        <div 
          ref={terminalRef}
          className="terminal-scrollbar"
          style={{
            flex: '1 1 0%',
            minHeight: 0,
            padding: '8px 16px',
            overflowY: 'auto',
            overflowX: 'hidden',
            backgroundColor: '#1e1e1e',
            lineHeight: '1.4',
            position: 'relative',
          }}
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item, index) => (
            <div key={index} style={{ 
              marginBottom: '2px',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              display: 'flex',
              alignItems: 'flex-start',
              minHeight: '20px',
            }}>
              {item.type === 'input' ? (
                <>
                  <span style={{ 
                    color: '#569cd6', 
                    marginRight: '8px',
                    minWidth: 'auto',
                    fontWeight: 'normal',
                  }}>PS C:\&gt;</span>
                  <span style={{ color: '#cccccc' }}>{item.text}</span>
                </>
              ) : (
                <div style={{ 
                  color: item.type === 'error' ? '#f85149' : '#cccccc',
                  width: '100%',
                  paddingLeft: '0px',
                  fontSize: '14px',
                }}>
                  {item.text}
                </div>
              )}
            </div>
          ))}
          
          {isLoading && (
            <div style={{ 
              marginBottom: '2px',
              display: 'flex',
              alignItems: 'center',
              minHeight: '20px',
            }}>
              <span style={{ 
                color: '#569cd6', 
                marginRight: '8px',
                fontWeight: 'normal',
              }}>PS C:\&gt;</span>
              <span style={{ color: '#cccccc', marginRight: '8px' }}>Thinking</span>
              <div style={{
                display: 'inline-flex',
                gap: '3px',
                alignItems: 'center',
              }}>
                <div style={{
                  width: '3px',
                  height: '3px',
                  backgroundColor: '#569cd6',
                  borderRadius: '50%',
                  animation: 'pulse 1.4s ease-in-out infinite',
                }}></div>
                <div style={{
                  width: '3px',
                  height: '3px',
                  backgroundColor: '#569cd6',
                  borderRadius: '50%',
                  animation: 'pulse 1.4s ease-in-out infinite 0.2s',
                }}></div>
                <div style={{
                  width: '3px',
                  height: '3px',
                  backgroundColor: '#569cd6',
                  borderRadius: '50%',
                  animation: 'pulse 1.4s ease-in-out infinite 0.4s',
                }}></div>
              </div>
            </div>
          )}
        </div>

        {/* Terminal Input Line */}
        <div style={{ 
          display: 'flex', 
          padding: '8px 16px',
          backgroundColor: '#1e1e1e',
          alignItems: 'center',
          borderTop: 'none',
          minHeight: '36px',
        }}>
          <span style={{ 
            color: '#569cd6', 
            marginRight: '8px',
            fontWeight: 'normal',
          }}>PS C:\&gt;</span>
          <div style={{ 
            flex: 1, 
            display: 'flex', 
            alignItems: 'center',
            position: 'relative',
          }}>
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
                color: '#cccccc',
                fontFamily: 'inherit',
                fontSize: 'inherit',
                caretColor: 'transparent',
                padding: 0,
                margin: 0,
              }}
              placeholder=""
            />
            {!isLoading && (
              <span 
                className="terminal-cursor"
                style={{ 
                  position: 'absolute',
                  left: `${input.length * 7.2}px`,
                  pointerEvents: 'none',
                }}
              />
            )}
          </div>
        </div>

        {/* Resize Handle */}
        {!isMaximized && (
          <div 
            className="resize-handle"
            ref={resizeRef}
            onMouseDown={handleResize}
            style={{
              position: 'absolute',
              top: '-2px',
              left: '0',
              right: '0',
              height: '4px',
              backgroundColor: 'transparent',
              cursor: 'ns-resize',
              zIndex: 10,
            }}
          />
        )}
      </div>
    </>
  );
}

export default Terminal;
