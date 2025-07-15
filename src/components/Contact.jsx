import React, { useState } from 'react';
import { Send, Mail, User, MessageSquare, Phone, MapPin, Github, Linkedin, Twitter, CheckCircle, AlertCircle, Code } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus('error');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted with data:', formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 4000);
  };

  const containerStyle = {
    padding: '20px',
    backgroundColor: '#1a1a1a',
    color: '#d4d4d4',
    minHeight: '100vh',
    fontFamily: 'Consolas, "Courier New", monospace',
    fontSize: '14px'
  };

  const headerStyle = {
    fontSize: '32px',
    color: '#4fc3f7',
    marginBottom: '30px',
    fontWeight: 'normal',
    position: 'relative',
    paddingBottom: '10px',
    borderBottom: '1px solid #333'
  };

  const mainContentStyle = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '350px 1fr',
    gap: '30px',
    maxWidth: '1000px',
    margin: '0 auto'
  };

  const sidebarStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  };

  const contactCardStyle = {
    backgroundColor: '#252526',
    border: '1px solid #3c3c3c',
    borderRadius: '8px',
    padding: '20px',
    position: 'relative',
    overflow: 'hidden'
  };

  const cardTitleStyle = {
    color: '#4fc3f7',
    fontSize: '16px',
    marginBottom: '15px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '12px',
    padding: '8px 0',
    fontSize: '13px'
  };

  const contactIconStyle = {
    color: '#4fc3f7',
    flexShrink: 0
  };

  const socialLinksStyle = {
    display: 'flex',
    gap: '10px',
    marginTop: '15px'
  };

  const socialLinkStyle = {
    padding: '8px',
    backgroundColor: '#2d2d30',
    borderRadius: '6px',
    color: '#4fc3f7',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: '1px solid #3c3c3c',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const formContainerStyle = {
    backgroundColor: '#252526',
    border: '1px solid #3c3c3c',
    borderRadius: '8px',
    padding: '25px',
    position: 'relative'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  };

  const inputRowStyle = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
    gap: '15px'
  };

  const fieldContainerStyle = {
    position: 'relative'
  };

  const labelStyle = (fieldName) => ({
    display: 'block',
    marginBottom: '5px',
    fontSize: '12px',
    color: focusedField === fieldName ? '#4fc3f7' : '#9cdcfe',
    fontWeight: '500',
    transition: 'color 0.3s ease'
  });

  const inputStyle = (fieldName) => ({
    width: '100%',
    padding: '10px 12px',
    backgroundColor: '#2d2d30',
    border: `1px solid ${focusedField === fieldName ? '#4fc3f7' : '#3c3c3c'}`,
    borderRadius: '4px',
    color: '#d4d4d4',
    fontSize: '13px',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'all 0.3s ease',
    boxShadow: focusedField === fieldName ? '0 0 0 2px rgba(79, 195, 247, 0.1)' : 'none'
  });

  const textareaStyle = (fieldName) => ({
    ...inputStyle(fieldName),
    minHeight: '80px',
    resize: 'vertical',
    fontFamily: 'inherit'
  });

  const buttonStyle = {
    padding: '12px 20px',
    backgroundColor: isSubmitting ? '#555' : '#4fc3f7',
    color: isSubmitting ? '#999' : '#1a1a1a',
    border: 'none',
    borderRadius: '4px',
    fontSize: '13px',
    fontWeight: 'bold',
    cursor: isSubmitting ? 'not-allowed' : 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'all 0.3s ease',
    fontFamily: 'inherit',
    marginTop: '10px'
  };

  const statusMessageStyle = (type) => ({
    padding: '10px 12px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '10px',
    fontSize: '12px',
    backgroundColor: type === 'success' ? '#0e7a0d15' : '#b7472a15',
    color: type === 'success' ? '#4caf50' : '#f44336',
    border: `1px solid ${type === 'success' ? '#4caf50' : '#f44336'}30`
  });

  const glowEffectStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    height: '1px',
    background: 'linear-gradient(90deg, transparent, #4fc3f7, transparent)',
    opacity: '0.5'
  };

  // Add spinning animation
  const spinnerStyle = {
    width: '14px',
    height: '14px',
    border: '2px solid #333',
    borderTop: '2px solid #1a1a1a',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  };

  // Add CSS animations
  React.useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes glow {
        0%, 100% { opacity: 0.5; }
        50% { opacity: 1; }
      }
    `;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Contact</h1>
      
      <div style={mainContentStyle}>
        {/* Sidebar */}
        <div style={sidebarStyle}>
          {/* Contact Info */}
          <div style={contactCardStyle}>
            <div style={glowEffectStyle}></div>
            <h3 style={cardTitleStyle}>
              <Mail size={16} />
              Get in Touch
            </h3>
            
            <div style={contactItemStyle}>
              <Mail style={contactIconStyle} size={14} />
              <span>rohanamahimkar28@gmail.com</span>
            </div>

      

            <div style={contactItemStyle}>
              <MapPin style={contactIconStyle} size={14} />
              <span>Mumbai, Maharashtra</span>
            </div>

            <div style={socialLinksStyle}>
              <a href="https://github.com/rohana-2005" style={socialLinkStyle} target="_blank" rel="noopener noreferrer">
                <Github size={16} />
              </a>
              <a href="https://www.linkedin.com/in/rohana-mahimkar-96341a283/" style={socialLinkStyle} target="_blank" rel="noopener noreferrer">
                <Linkedin size={16} />
              </a>
             
            </div>
          </div>

          {/* Quick Info */}
          <div style={contactCardStyle}>
            <div style={glowEffectStyle}></div>
            <h3 style={cardTitleStyle}>
              <Code size={16} />
              Response Time
            </h3>
            <div style={{ fontSize: '12px', color: '#9cdcfe', lineHeight: '1.4' }}>
              <div style={{ marginBottom: '8px' }}>
                <span style={{ color: '#4fc3f7' }}>Email:</span> Within 24 hours
              </div>
              <div style={{ marginBottom: '8px' }}>
                <span style={{ color: '#4fc3f7' }}>Projects:</span> 2-3 business days
              </div>
              <div>
                <span style={{ color: '#4fc3f7' }}>Urgent:</span> Same day
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div style={formContainerStyle}>
          <div style={glowEffectStyle}></div>
          <h3 style={cardTitleStyle}>
            <MessageSquare size={16} />
            Send Message
          </h3>
          
          <div style={formStyle}>
            <div style={inputRowStyle}>
              <div style={fieldContainerStyle}>
                <label style={labelStyle('name')}>Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  style={inputStyle('name')}
                  placeholder="Your name"
                />
              </div>
              
              <div style={fieldContainerStyle}>
                <label style={labelStyle('email')}>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  style={inputStyle('email')}
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div style={inputRowStyle}>
              <div style={fieldContainerStyle}>
                <label style={labelStyle('phone')}>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  style={inputStyle('phone')}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              
              <div style={fieldContainerStyle}>
                <label style={labelStyle('subject')}>Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  style={inputStyle('subject')}
                  placeholder="Project inquiry"
                />
              </div>
            </div>

            <div style={fieldContainerStyle}>
              <label style={labelStyle('message')}>Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                style={textareaStyle('message')}
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              style={buttonStyle}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.target.style.backgroundColor = '#45a9d4';
                  e.target.style.transform = 'translateY(-1px)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) {
                  e.target.style.backgroundColor = '#4fc3f7';
                  e.target.style.transform = 'translateY(0)';
                }
              }}
            >
              {isSubmitting ? (
                <>
                  <div style={spinnerStyle}></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={14} />
                  Send Message
                </>
              )}
            </button>

            {submitStatus && (
              <div style={statusMessageStyle(submitStatus)}>
                {submitStatus === 'success' ? (
                  <>
                    <CheckCircle size={14} />
                    Message sent successfully!
                  </>
                ) : (
                  <>
                    <AlertCircle size={14} />
                    Please fill all required fields.
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;