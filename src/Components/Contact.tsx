

const Contact = () => {


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Add your API/email submission here
    alert("Consultation request submitted!");
  };

  const address =
    "Plot No.78, Sai Nagar, Behind Subhan Nagar, Near Blossom School, Hanuman Mandir, Bhandara Road, Pardi, Nagpur, Maharashtra 440035";

  const googleMapUrl =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(address);

  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14884.018236495784!2d79.13794339593997!3d21.152216851100853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c7dfae9626e1%3A0x50fdc261e17459ed!2sShree%20Construction%20Engineers%20%26%20Contractor!5e0!3m2!1sen!2sin!4v1788190346132!5m2!1sen!2sin" +
    encodeURIComponent(address) +
    "&output=embed";

  //<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14884.018236495784!2d79.13794339593997!3d21.152216851100853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c7dfae9626e1%3A0x50fdc261e17459ed!2sShree%20Construction%20Engineers%20%26%20Contractor!5e0!3m2!1sen!2sin!4v1788190346132!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>


  return (
    <>
      <section className="contact-area" id="contact">
        <div className="contact-boxes">

          {/* ================= LEFT SMALL BOX ================= */}
          <div className="contact-info-box">

            <div className="contact-badge">
              ✨ PARTNER WITH US
            </div>

            <h1>
              Ready to Build Your
              <span>Dream Project?</span>
            </h1>

            <p className="contact-text">
              We translate conceptual architectural ideas into luxury
              custom residences, industrial PEB sheds, and heavy structural
              engineering projects across Nagpur & Maharashtra.
            </p>

            {/* Phone */}
            <div className="mini-contact">
              <div className="mini-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2
            19.79 19.79 0 0 1-8.63-3.07
            19.5 19.5 0 0 1-6-6
            19.79 19.79 0 0 1-3.07-8.67
            A2 2 0 0 1 4.11 2h3
            a2 2 0 0 1 2 1.72
            12.84 12.84 0 0 0 .7 2.81
            2 2 0 0 1-.45 2.11L8.09 9.91
            a16 16 0 0 0 6 6l1.27-1.27
            a2 2 0 0 1 2.11-.45
            12.84 12.84 0 0 0 2.81.7
            A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>

              <div>
                <small>DIRECT PHONE CALL</small>
                <strong>+91 9552168575</strong>
              </div>
            </div>

            {/* Alternate Phone */}
            <div className="mini-contact">
              <div className="mini-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2
            19.79 19.79 0 0 1-8.63-3.07
            19.5 19.5 0 0 1-6-6
            19.79 19.79 0 0 1-3.07-8.67
            A2 2 0 0 1 4.11 2h3
            a2 2 0 0 1 2 1.72
            12.84 12.84 0 0 0 .7 2.81
            2 2 0 0 1-.45 2.11L8.09 9.91
            a16 16 0 0 0 6 6l1.27-1.27
            a2 2 0 0 1 2.11-.45
            12.84 12.84 0 0 0 2.81.7
            A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>

              <div>
                <small>ALTERNATE PHONE</small>
                <strong>+91 8007119000</strong>
              </div>
            </div>

            {/* Email */}
            <div className="mini-contact">
              <div className="mini-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </div>

              <div>
                <small>EMAIL INQUIRY</small>
                <strong className="email-text">
                  shreeconstructionprojects.co@gmail.com
                </strong>
              </div>
            </div>

          </div>


          {/* ================= RIGHT SMALL BOX ================= */}
          <div className="consult-box">

            <h2>Request Free Consultation</h2>

            <p className="consult-subtitle">
              COMPLETE DETAILS BELOW FOR STRUCTURAL REVIEW
            </p>

            <form onSubmit={handleSubmit}>

              <div className="small-form-row">

                <div className="small-field">
                  <label>FULL NAME *</label>
                  <input type="text" />
                </div>

                <div className="small-field">
                  <label>PHONE NUMBER *</label>
                  <input type="tel" />
                </div>

              </div>


              <div className="small-form-row">

                <div className="small-field">
                  <label>EMAIL ADDRESS</label>
                  <input type="email" />
                </div>

                <div className="small-field">
                  <label>PROJECT TYPE *</label>

                  <select>
                    <option>Building Construction</option>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Industrial PEB</option>
                    <option>Structural Engineering</option>
                  </select>
                </div>

              </div>


              <div className="small-field">
                <label>PROJECT LOCATION *</label>
                <input type="text" />
              </div>


              <div className="small-field">
                <label>MESSAGE (OPTIONAL)</label>
                <textarea rows={3}></textarea>
              </div>


              <button type="submit" className="small-submit">
                📅 REQUEST FREE CONSULTATION
              </button>

            </form>

          </div>

        </div>
      </section>

      <section className="contact-section">

        <div className="contact-header">
          <span>CONNECT WITH US</span>
          <h1>Contact Information</h1>
          <div className="header-line"></div>
        </div>

        <div className="contact-grid">


          <div className="contact-left">

            <p className="section-label">DIRECT CONTACT</p>

            <a href="tel:+919552168575" className="contact-box primary">
              <span className="icon">☎</span>
              <div>
                <small>CALL US NOW</small>
                <strong>+91 9552168575</strong>
              </div>
            </a>

            <a href="tel:+918007119000" className="contact-box">
              <span className="icon">☎</span>
              <div>
                <small>CALL ALTERNATE</small>
                <strong>+91 8007119000</strong>
              </div>
            </a>

            <a href="https://wa.me/919552168575" className="contact-box whatsapp">
              <span className="icon">

                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0
        C5.5 0 .16 5.34.16 11.91
        c0 2.1.55 4.15 1.6 5.96L.05 24l6.27-1.64
        a11.9 11.9 0 0 0 5.75 1.47h.01
        c6.57 0 11.91-5.34 11.91-11.91
        0-3.18-1.24-6.17-3.47-8.44Z"
                    fill="currentColor"
                  /><path
                    d="M17.47 14.37c-.3-.15-1.77-.87-2.05-.97
        -.27-.1-.47-.15-.67.15
        -.2.3-.77.97-.94 1.17
        -.17.2-.35.22-.65.07
        -.3-.15-1.26-.46-2.4-1.48
        -.89-.79-1.49-1.77-1.66-2.07
        -.17-.3-.02-.46.13-.61
        .13-.13.3-.35.45-.52
        .15-.17.2-.3.3-.5
        .1-.2.05-.37-.02-.52
        -.07-.15-.67-1.62-.92-2.22
        -.24-.58-.49-.5-.67-.51
        -.17-.01-.37-.01-.57-.01
        -.2 0-.52.07-.79.37
        -.27.3-1.04 1.02-1.04 2.49
        0 1.47 1.07 2.89 1.22 3.09
        .15.2 2.1 3.2 5.08 4.49
        .71.31 1.26.5 1.69.64
        .71.23 1.35.2 1.86.12
        .57-.08 1.77-.72 2.02-1.42
        .25-.7.25-1.3.17-1.42
        -.07-.12-.27-.2-.57-.35Z"
                    fill="#fff"
                  />
                </svg>

              </span>
              <div>
                <small>CHAT ON</small>
                <strong>WhatsApp</strong>
              </div>
            </a>

            <a href="mailto:shreeconstructionprojects.co@gmail.com" className="contact-box primary">
              <span className="icon">✉</span>
              <div>
                <small>SEND</small>
                <strong>Email Inquiry</strong>
              </div>
            </a>


            <a href={googleMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="map-link">
              ↗ VIEW OFFICE LOCATION MAP DIRECTIONS
            </a>

          </div>



          <div className="contact-right">

            <div className="info-cardco">

              <div className="info-icon">◷</div>

              <div>
                <span className="info-label">OFFICE HOURS</span>
                <h3>Daily: 9:00 AM – 7:00 PM</h3>
                <p>Site Visits & Engineering Consultations</p>
              </div>

            </div>


            <div className="info-cardco social-card">

              <div>
                <span className="info-label">DESIGN UPDATES</span>
                <h3>FOLLOW OUR STRUCTURAL PORTFOLIOS</h3>
              </div>

              <div className="social-icons">
                <a href="#"><svg role="img" viewBox="0 0 24 24" xmlns="http://w3.org" width="24" height="24" fill="#e4405f">
                  <title>Instagram</title>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                </a>
                <a href="#"><svg role="img" viewBox="0 0 24 24" xmlns="http://w3.org" width="24" height="24" fill="#1877f2">
                  <title>Facebook</title>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                </a>

                <a href="#"><svg role="img" viewBox="0 0 24 24" xmlns="http://w3.org" width="24" height="24" fill="#0a66c2">
                  <title>LinkedIn</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                </a>

              </div>

            </div>

          </div>

        </div>




      </section>


      <div className="contact-page">

        {/* YOUR EXISTING CONTACT CONTENT */}


        {/* ================= OFFICE SECTION ================= */}

        <section className="office-contact-section">

          {/* LEFT - GOOGLE MAP */}
          <div className="map-box">

            <iframe
              src={mapEmbedUrl}
              title="Shree Construction & Engineers Location"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            <a
              href={googleMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="map-open-btn"
            >
              <span>↗</span>
              Open in Google Maps
            </a>

          </div>


          {/* RIGHT - OFFICE INFORMATION */}
          <div className="office-info-box">

            <div className="office-tag">
              HEADQUARTERS OFFICE
            </div>

            <h2>
              SHREE CONSTRUCTION &<br />
              ENGINEERS & CONTRACTOR
            </h2>


            <div className="office-details">

              {/* ADDRESS */}
              <div className="detail-row">

                <div className="detail-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 21s7-6.1 7-12A7 7 0 1 0 5 9c0 5.9 7 12 7 12Z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </div>

                <div>
                  <p>
                    Plot No.78, Sai Nagar, Behind Subhan Nagar,
                    Near Blossom School, Hanuman Mandir,
                    Bhandara Road, Pardi, Nagpur – 440035
                  </p>
                </div>

              </div>


              {/* MAIN PHONE */}
              <div className="detail-row">

                <div className="detail-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M6.6 3.5 9 3l2 5-2 1.5a14 14 0 0 0 5.5 5.5L16 13l5 2-.5 2.4c-.3 1.3-1.5 2.1-2.8 1.9C10.8 18.2 5.8 13.2 4.7 6.3 4.5 5 5.3 3.8 6.6 3.5Z" />
                  </svg>
                </div>

                <div>
                  <a href="tel:+919552168575">
                    <strong>+91 9552168575</strong>
                  </a>

                  <span>Main / WhatsApp</span>
                </div>

              </div>


              {/* ALTERNATE PHONE */}
              <div className="detail-row">

                <div className="detail-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M6.6 3.5 9 3l2 5-2 1.5a14 14 0 0 0 5.5 5.5L16 13l5 2-.5 2.4c-.3 1.3-1.5 2.1-2.8 1.9C10.8 18.2 5.8 13.2 4.7 6.3 4.5 5 5.3 3.8 6.6 3.5Z" />
                  </svg>
                </div>

                <div>
                  <a href="tel:+918007119000">
                    <strong>+91 8007119000</strong>
                  </a>

                  <span>Alternate</span>
                </div>

              </div>


              {/* EMAIL */}
              <div className="detail-row">

                <div className="detail-icon">
                  <svg viewBox="0 0 24 24">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </div>

                <div>
                  <a href="mailto:shreeconstructionprojects.co@gmail.com">
                    <strong>
                      shreeconstructionprojects.co@gmail.com
                    </strong>
                  </a>
                </div>

              </div>


              {/* GSTIN */}
              <div className="detail-row">

                <div className="detail-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M6 3h9l3 3v15H6z" />
                    <path d="M14 3v4h4M9 11h6M9 15h6M9 18h4" />
                  </svg>
                </div>

                <div>
                  <strong>
                    GSTIN: <em>27GEBPR5678E1Z1</em>
                  </strong>
                </div>

              </div>


              {/* TIMING */}
              <div className="detail-row">

                <div className="detail-icon">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </div>

                <div>
                  <p>Daily: 9:00 AM – 7:00 PM</p>
                </div>

              </div>

            </div>


            {/* GOOGLE MAP BUTTON */}
            <a
              href={googleMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="google-map-button"
            >
              <span>↗</span>
              OPEN IN GOOGLE MAPS
            </a>

          </div>

        </section>

      </div>


    </>

  );
};

export default Contact;