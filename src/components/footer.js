import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={addressStyle}>
          <h4>Our Office</h4>
          <p>Cian Healthcare Limited</p>
          <p>1234 Main Street</p>
          <p>Pune, Maharashtra 411001</p>
          <p>India</p>
        </div>
        <div style={infoStyle}>
          <p>&copy; {new Date().getFullYear()} Cian Healthcare Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px 0',
  position: 'fixed',
  bottom: '0',
  width: '100%'
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px'
};

const addressStyle = {
  textAlign: 'left'
};

const infoStyle = {
  textAlign: 'right'
};

export default Footer;
