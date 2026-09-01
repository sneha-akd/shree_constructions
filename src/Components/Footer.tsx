
import "../assets/logo_navbar.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT SECTION */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/src/assets/logo_navbar.png" alt="Shree Construction" />
          </div>

          <p className="footer-description">
            Nagpur’s leading luxury civil construction & architectural
            planning company. Delivering custom residential homes, PEB
            warehouses, commercial plazas, and heavy road infrastructure
            across Maharashtra.
          </p>

          <div className="social-links">
            <a href="#" className="social-btn">
              <span>
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="#0A66C2"
                >
                  <title>LinkedIn</title>
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.3zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V8.99h3.56v11.46zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
                </svg>
              </span>
              LinkedIn
            </a>
            <a href="#" className="social-btn">
              <span>
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="#E4405F"
                >
                  <title>Instagram</title>
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-2.25a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25z" />
                </svg>
              </span>
              Instagram
            </a>

            <a href="#" className="social-btn">
              <span>
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="#1877f2"
                >
                  <title>Facebook</title>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </span>
              Facebook
            </a>

          </div>

          <div className="footer-badge">
            <span><svg xmlns="http://w3.org" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            </span>
            IS Code Compliant · Licensed Civil Engineers
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h3>QUICK LINKS</h3>

          <div className="footer-line"></div>

          <a href="/">› <span>Home</span></a>
          <a href="#about">› <span>About Us</span></a>
          <a href="#services">› <span>Services</span></a>
          <a href="#why-choose-us">› <span>Why Choose Us</span></a>
          <a href="#portfolio">› <span>Portfolio</span></a>
          <a href="#machinery">› <span>machinery</span></a>
          <a href="#clients">› <span>Clients</span></a>
          <a href="#contact">› <span>Contact & Map</span></a>
        </div>

        {/* CONTACT DETAILS */}
        <div className="footer-contact">
          <h3>CONTACT DETAILS</h3>

          <div className="footer-line"></div>

          <div className="contact-item address">
            <span className="contact-icon"><svg xmlns="http://w3.org" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            </span>

            <p>
              Plot No.78, Sai Nagar, Behind Subhan Nagar,
              Near Blossom School, Hanuman Mandir,
              Bhandara Road, Pardi, Nagpur – 440035
            </p>
          </div>

          <div className="contact-item">
            <span className="contact-icon"><svg xmlns="http://w3.org" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.27 1.11l-2.2 2.2z" />
            </svg>
            </span>

            <a href="tel:+919552168575">
              <strong>+91 9552168575</strong>
              <small>(Main)</small>
            </a>
          </div>

          <div className="contact-item">
            <span className="contact-icon"><svg xmlns="http://w3.org" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.27 1.11l-2.2 2.2z" />
            </svg>
            </span>

            <a href="tel:+918007119000">
              <strong>+91 8007119000</strong>
              <small>(Alternate)</small>
            </a>
          </div>

          <div className="contact-item">
            <span className="contact-icon"><svg xmlns="http://w3.org" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            </span>

            <a href="mailto:shreeconstructionprojects.co@gmail.com">
              shreeconstructionprojects.co@gmail.com
            </a>
          </div>

          <div className="gstin">
            GSTIN: <span>27GEBPR5678E1Z1</span>
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="footer-bottom">
        <div className="copyright">
          © 2026 <strong>Shree Construction Engineers & Contractor.</strong>
          <span> All rights reserved.</span>
        </div>

        <div className="footer-bottom-right">
          <a href="/privacy-policy">Privacy Policy</a>
          <span>•</span>
          <p>Designed for Luxury Architectural Excellence in Nagpur</p>
        </div>

        <button
          className="scroll-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;