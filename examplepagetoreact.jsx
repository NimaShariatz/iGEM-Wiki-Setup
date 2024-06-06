import React from 'react';
import './menu.css';
import './footer.css';
import './paragraph.css';
import Logo from './images/Logo_Final.png';
import MoonIcon from './images/moon.svg';
import ArrowUpCircle from './images/arrow-up-circle.svg';
import EmailIcon from './images/email.svg';
import InstagramIcon from './images/instagram.svg';
import EventbriteIcon from './images/eventbrite.svg';

function App() {
  return (
    <div>
      <header>
        {/* Mobile Menu */}
        <input type="checkbox" id="check" />
        <label htmlFor="check">
          <svg viewBox="0 0 30 30" width="30" height="30">
            <path stroke="#1C3144" id="one" d="M4 10h22M4" strokeWidth="2" strokeLinecap="round"></path>
            <path stroke="#1C3144" id="two" d="M4 20h22M4" strokeWidth="2" strokeLinecap="round"></path>
          </svg>
        </label>
        <aside>
          <nav style={{ overflow: 'scroll', scrollbarWidth: 'none', marginLeft: '35px', marginTop: '50px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100px' }}>
              <div>
                <a href="T">
                  <img style={{ width: '7vw', height: 'auto', float: 'left' }} src={Logo} alt="Logo" />
                </a>
              </div>
            </div>
            {/* Menu items */}
          </nav>
        </aside>

        {/* Desktop Menu */}
        <article style={{ overflowY: 'scroll' }}>
          {/* Navigation and other content */}
        </article>
      </header>

      <main>
        {/* Main content and images */}
      </main>

      <footer>
        <div className="footer-container">
          {/* Footer details */}
          <div className="social-section">
            <p className="info-text" style={{ fontWeight: 'bold' }}>Follow Us</p>
            <div className="social-logos">
              <a href="https://www.example1.com" target="_blank" rel="noopener noreferrer">
                <img src={EmailIcon} alt="Email" />
              </a>
              <a href="https://www.example1.com" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} alt="Instagram" />
              </a>
              <a href="https://www.example1.com" target="_blank" rel="noopener noreferrer">
                <img src={EventbriteIcon} alt="EventBrite" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
