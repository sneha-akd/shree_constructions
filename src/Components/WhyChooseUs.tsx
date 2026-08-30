
function WhyChooseUs() {
  return (
    <>
      <section id="why-choose-us">
        <div className="overline">
          <div className="overline-box">
            <span className="overline-star">★</span>
            <p>THE SHREE ADVANTAGE</p>
          </div>
        </div>

        <h1>
          <span className="black-text">Why Discerning Clients </span>
          <br />
          <span className="orange-text">Trust Shree Construction</span>
        </h1>

        <p
          style={{
            fontSize: "19px",
            color: "rgb(129, 129, 226)",
          }}
        >
          We combine modern engineering technology, uncompromised material
          standards, and transparent craftsmanship.
        </p>

        {/* 8 Boxes */}
        <div className="choose-us-grid">
          <div className="choose-box">

            <h2 >High Quality Materials</h2>
            <p>Only grade-A steel, UltraTech cement, certified bricks, and tested aggregates directly from authorized mills.</p>
            <div className="verified-wrapper"><span className="verified-tick">✓</span>
              <span className="verified">VERIFIED STANDARD</span></div>

          </div>

          <div className="choose-box">

            <h2>Experience</h2>
            <p>Led by veteran civil engineers and foremen with 26+ years of collective regional expertise across Pan India.</p>
            <div className="verified-wrapper"><span className="verified-tick">✓</span>
              <span className="verified">VERIFIED STANDARD</span></div>
          </div>

          <div className="choose-box">

            <h2 >Transparent Pricing</h2>
            <p>Itemized material quotes and strict fixed-budget contracts with zero hidden charges or unexpected escalations.</p>
            <div className="verified-wrapper"><span className="verified-tick">✓</span>
              <span className="verified">VERIFIED STANDARD</span></div>
          </div>

          <div className="choose-box">

            <h2 >Timely Project Completion</h2>
            <p>Structured milestone schedules backed by strict project management guarantees to deliver your keys on time.</p>
            <div className="verified-wrapper"><span className="verified-tick">✓</span>
              <span className="verified">VERIFIED STANDARD</span></div>
          </div>

          <div className="choose-box">

            <h2 >Modern Engineering Techniques</h2>
            <p>Advanced structural modeling, PEB industrial framing, and laser-guided leveling equipment.</p>
            <div className="verified-wrapper"><span className="verified-tick">✓</span>
              <span className="verified">VERIFIED STANDARD</span></div>
          </div>

          <div className="choose-box">

            <h2 >Customer Satisfaction</h2>
            <p>100% commitment to your vision, regular site progress reports, and dedicated support throughout.</p>
            <div className="verified-wrapper"><span className="verified-tick">✓</span>
              <span className="verified">VERIFIED STANDARD</span></div>
          </div>

          <div className="choose-box">

            <h2 >Safety Standards</h2>
            <p>Zero-compromise site safety standards, worker protection gear, compliance, and structural integrity.</p>
            <div className="verified-wrapper"><span className="verified-tick">✓</span>
              <span className="verified">VERIFIED STANDARD</span></div>
          </div>

          <div className="choose-box">

            <h2 >Multi-Sector Expertise</h2>
            <p>Proven capability across residential villas, commercial complexes, PEB warehouses, and heavy roads.</p>
            <div className="verified-wrapper"><span className="verified-tick">✓</span>
              <span className="verified">VERIFIED STANDARD</span></div>
          </div>
        </div>
        <div className="commitment-journey">

          {/* LEFT BOX - OUR COMMITMENT */}
          <div className="commitment-box">

            <div className="section-label">
              <span className="label-line"></span>
              <span style={{ fontSize: "16px", fontStyle: "italic", color: "#f58220" }}>OUR COMMITMENT</span>
            </div>

            <h2 style={{ fontSize: "25px", fontStyle: "italic" }}>
              "Every project is executed with precision, transparency,
              and a commitment to delivering superior quality within
              the promised timeline."
            </h2>

            <div className="cofounder">
              <div className="cofounder-line"></div>

              <div>
                <h3 style={{ fontSize: "20px", fontStyle: "italic", color: "#f58220" }}>Aditya Raut</h3>
                <p style={{ fontSize: "15px", fontStyle: "italic" }}>Founder & Civil Contractor</p>
              </div>
            </div>

          </div>


          {/* RIGHT BOX - OUR JOURNEY */}
          <div className="journey-box">

            <div className="section-label">
              <span className="label-line"></span>
              <span style={{ fontSize: "16px", fontStyle: "italic", color: "#f58220" }}>OUR JOURNEY</span>
            </div>

            <div className="journey-timeline">

              {/* Journey 1 */}
              <div className="journey-item">


                <div className="journey-content">
                  <div className="journey-year">2000</div>
                  <h3>Journey Begins</h3>
                  <p>
                    Work started in civil construction with a vision
                    to build quality structures.
                  </p>
                </div>
              </div>


              {/* Journey 2 */}
              <div className="journey-item">

                <div className="journey-content">
                  <div className="journey-year">2000 - 2025</div>
                  <h3>Building Trust & Excellence</h3>
                  <p>
                    Successfully completed numerous
                    projects across various sectors including industrial, commercial, and road sectors
                    with a strong focus on quality,
                    safety and timely delivery.
                  </p>
                </div>
              </div>


              {/* Journey 3 */}
              <div className="journey-item">


                <div className="journey-content">
                  <div className="journey-year">2024 - 2025</div>
                  <h3>Shree Construction Established</h3>
                  <p>
                    A new identity built on experience, expertise and a
                    commitment to create a better tomorrow.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default WhyChooseUs;



