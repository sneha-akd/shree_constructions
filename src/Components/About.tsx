const core_values = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield w-5 h-5" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>,
    value: "Integrity",
    desc: "Honesty & ethical practice",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award w-5 h-5" aria-hidden="true"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>,
    value: "Quality",
    desc: "Superior construction",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check w-5 h-5" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>,
    value: "Safety",
    desc: "Strict site safety",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye w-5 h-5" aria-hidden="true"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>,
    value: "Transparency",
    desc: "Clear cost estimation",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb w-5 h-5" aria-hidden="true"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>,
    value: "Innovation",
    desc: "Modern engineering",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users w-5 h-5" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>,
    value: "Teamwork",
    desc: "Experienced foremen",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-handshake w-5 h-5" aria-hidden="true"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>,
    value: "Satisfaction",
    desc: "100% Client focus",
  },
];

const expertises = [
  "Residential Construction", "Renovation & Remodeling",
  "Commercial Buildings", "Turnkey Projects",
  "Industrial Projects", "Foundation Works",
  "Roads & Infrastructure", "Earthwork & Excavation",
  "RCC Structures & Repairs", "All Types of Civil Construction Works",
]

export const check_svg = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5" /></svg>;
const eye_svg = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></svg>
const focus_svg = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-focus-icon lucide-focus"><circle cx="12" cy="12" r="3" /><path d="M3 7V5a2 2 0 0 1 2-2h2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" /><path d="M21 17v2a2 2 0 0 1-2 2h-2" /><path d="M7 21H5a2 2 0 0 1-2-2v-2" /></svg>
const location_svg = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-locate-fixed-icon lucide-locate-fixed"><line x1="2" x2="5" y1="12" y2="12" /><line x1="19" x2="22" y1="12" y2="12" /><line x1="12" x2="12" y1="2" y2="5" /><line x1="12" x2="12" y1="19" y2="22" /><circle cx="12" cy="12" r="7" /><circle cx="12" cy="12" r="3" /></svg>

function About() {
  return (
    <section id="about">
      <div className="overline">
        <div className="overline-box">
          <span className="overline-star">★</span>
          <p>ABOUT SHREE CONSTRUCTION</p>
        </div>
      </div>
      <h1>
        Building Trust.
        <span className="orange-text"> Delivering Quality.</span>
      </h1>

      <p> With 26+ years of experience & Commitment to excellence,We turn ideas into reality and build a better future.</p>

      <div className="info-extra">
        <div className="info-card">


          <div className="info-content">
            <h2> Hands-on Civil & Infrastructure Engineering Across Pan India</h2>
            <p> Although <b> Shree Construction Engineers & Contractor </b> was established in 2025 as a proprietorship firm by <b> Aditya Raut</b>, our core leadership and engineering team bring over <span className="orange-text">26+ years of hands-on experience</span> in civil construction, infrastructure, industrial PEB sheds, and commercial building development.
              We deliver turnkey construction solutions with complete transparency, strict engineering compliance, and on-time project execution.</p>
          </div>
          <hr></hr>

          <div className="small-boxes">
            <div className="small-box">
              <p>Established</p>
              <h3>2025</h3>
            </div>

            <div className="small-box">
              <p>Founder</p>
              <h3>Aditya Raut</h3>
            </div>

            <div className="small-box">
              <p>Firm Type</p>
              <h3>Proprietorship</h3>
            </div>

            <div className="small-box">
              <p>Team Exp</p>
              <h3>26+ Years</h3>
            </div>
          </div>


        </div>

        <div className="extra-boxes">

          <div className="extra-box flex">
            <div className="svg">
              {focus_svg}
            </div>
            <div>
              <h3>OUR MISSION</h3>
              <p>To continuously construct, grow and deliver quality</p>
              <p>while moving forward with honesty and excellence.</p>
            </div>

          </div>

          <div className="extra-box flex">
            <div className="svg">
              {eye_svg}
            </div>
            <div>
              <h3>OUR VISION</h3>
              <p>To handle bigger projects with excellence and become </p>
              <p>a trusted name in the construction industry.</p>
            </div>
          </div>

          <div className="extra-box flex">
            <div className="svg">
              {location_svg}
            </div>
            <div>
              <p>OUR COVERAGE</p>
              <h3>Based in Nagpur, Serving Across India (Pan India)</h3>
            </div>
          </div>

        </div>

      </div>


      <div className="title"><h3> OUR CORE VALUES</h3></div>

      <div className="core-values-container">

        {core_values.map((value) => {
          return <div className="core-value-box">
            <div className="core-value-icon">
              {value.icon}
            </div>
            <h3>{value.value}</h3>
            <p>{value.desc}</p>
          </div>
        })}

      </div>
      <div className="title"><h3> OUR EXPERTISE</h3></div>

      <div className="values-wrapper">

        {expertises.map((item) => {
          return <div className="value-item">
            <span className="check-icon">{check_svg}</span>
            <span>{item}</span>
          </div>
        })}

        {/* <div className="value-item">
          <span className="check-icon">{check_svg}</span>
          <span>Honesty & ethical practice</span>
        </div>

        <div className="value-item">
          <span className="check-icon">{check_svg}</span>
          <span>Customer Focus</span>
        </div>

        <div className="value-item">
          <span className="check-icon">{check_svg}</span>
          <span>Innovation</span>
        </div>

        <div className="value-item">
          <span className="check-icon">{check_svg}</span>
          <span>Teamwork</span>
        </div>

        <div className="value-item">
          <span className="check-icon">{check_svg}</span>
          <span>Excellence</span>
        </div>

        <div className="value-item">
          <span className="check-icon">{check_svg}</span>
          <span>Integrity</span>
        </div>

        <div className="value-item">
          <span className="check-icon">{check_svg}</span>
          <span>Respect</span>
        </div>

        <div className="value-item">
          <span className="check-icon">{check_svg}</span>
          <span>Accountability</span>
        </div>

        <div className="value-item">
          <span className="check-icon">{check_svg}</span>
          <span>Transparency</span>
        </div>

        <div className="value-item">
          <span className="check-icon">{check_svg}</span>
          <span>Growth</span>
        </div> */}
      </div>



    </section >
  );
}

export default About;
