


import warehouseImg from "../assets/warehouse.png";
import roadImg from "../assets/road.png";
import constructionImg from "../assets/ale-toker-WnVMiReJxNE-unsplash.jpg";

const check_svg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-check-icon lucide-check"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const projects = [
  {
    client: "M/s BASHIN CONSTRUCTIONS",
    work: "Warehouse and Administrative Building",
    location: "Britannia MIDC, Butibori, Nagpur",
    scope: "Rs. 130 Lacs",
    year: "2015 to 2016",
    image: warehouseImg,
  },
  {
    client: "M/s DLILOGISTIC, BORKHEDI",
    work: "Warehouse, Toilet Block & Offices Building",
    location: "Narayan Biscuit Factory, Butibori, Nagpur",
    scope: "Rs. 72 Lacs",
    year: "2006",
    image: constructionImg,
  },
  {
    client: "M/s EMPRESS MALL, NAGPUR",
    work: "Podium Parking",
    location: "Area 70,000 Sq. Ft.",
    scope: "Rs. 120 Lacs",
    year: "2008 to 2010",
    image: warehouseImg,
  },
  {
    client: "M/s SOLAR INDUSTRIES PVT. LTD.",
    work: "Farm House Building, R.C.C. Road Work, Compound Wall and Internal Development",
    location: "Bhilwara, Rajasthan",
    scope: "Rs. 200 Lacs",
    year: "2016 to 2018",
    image: roadImg,
  },
  {
    client: "M/s SOLAR EXPLOSIVES",
    work: "Labour Housing Building",
    location: "Bhilwara, Rajasthan",
    scope: "Rs. 80 Lacs",
    year: "2011 to 2012",
    image: constructionImg,
  },
  {
    client: "M/s SOLAR INDUSTRIES PVT. LTD.",
    work: "Office Building Work",
    location: "Bhilwara, Rajasthan",
    scope: "Rs. 200 Lacs",
    year: "2019 to 2020",
    image: warehouseImg,
  },
  {
    client: "M/s SOLAR EXPLOSIVES",
    work: "Compound Wall, Administrative Building, Shed Foundation, Silo Platform, Loading & Unloading Platform",
    location: "Kota, Rajasthan",
    scope: "Rs. 120 Lacs",
    year: "2013 to 2014",
    image: roadImg,
  },
  {
    client: "M/s AVNIFOODS",
    work: "Civil Construction Work",
    location: "Butibori, Nagpur",
    scope: "Rs. 30 Lacs",
    year: "2019 to 2020",
    image: constructionImg,
  },
  {
    client: "M/s ASHISH NILAWAR (BLUE LADDER)",
    work: "Warehouse P.E.B. Shed Civil Work",
    location: "Lawa, Nagpur",
    scope: "Rs. 16 Crore",
    year: "—",
    image: warehouseImg,
  },
  {
    client: "Adani Project",
    work: "Civil Construction & Allied Works",
    location: "Nagpur",
    scope: "Rs. 16 Crore",
    year: "2025",
    image: constructionImg,
  },
  {
    client: "Adani Logistic Ltd",
    work: "Civil Work for Yard Development and Allied Work",
    location: "Nagpur",
    scope: "Rs. 3 Crore",
    year: "2021 to 2022",
    image: roadImg,
  },
  {
    client: "Lloyds Metals & Energy Ltd",
    work: "RCC Road",
    location: "Chandrapura, Ghugus",
    scope: "Rs. 1 Crore",
    year: "2025",
    image: roadImg,
  },
  {
    client: "M/s Atharva Creator Pvt. Ltd",
    work: "PLWJT Warehouse & Boiler",
    location: "Nagpur",
    scope: "Currently",
    year: "Currently",
    image: warehouseImg,
  },
  {
    client: "M/s Malhar Sugar Factory",
    work: "Office Building, WTP Tank, Lagoon Building, Coal Handling Foundations, Steam Line Foundation",
    location: "LMEL Konsari",
    scope: "Rs. 3 Crore",
    year: "2022 to 2023",
    image: constructionImg,
  },
  {
    client: "M/s 360° Pvt. Ltd.",
    work: "Storage Building",
    location: "Amravati",
    scope: "Rs. 1 Crore",
    year: "2025",
    image: warehouseImg,
  },
  {
    client: "M/s Nikita Infra",
    work: "D-Mart Retail Store Building – Ground Floor, First Floor & Second Floor",
    location: "Nagpur",
    scope: "Rs. 5.27 Crore",
    year: "2026 - Currently",
    image: constructionImg,
  },
];

const processes = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-message-square-check w-6 h-6"
        aria-hidden="true"
      >
        <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
        <path d="m9 11 2 2 4-4" />
      </svg>
    ),
    title: "CONSULTATION & PLANNING",
    description:
      "We understand our clients' requirements, site conditions and provide the best possible solutions with proper planning.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-file-spreadsheet w-6 h-6"
        aria-hidden="true"
      >
        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
        <path d="M14 2v5a1 1 0 0 0 1 1h5" />
        <path d="M8 13h2" />
        <path d="M14 13h2" />
        <path d="M8 17h2" />
        <path d="M14 17h2" />
      </svg>
    ),
    title: "DESIGN & ESTIMATION",
    description:
      "Detailed drawings, accurate estimation and cost planning to ensure transparency and clarity from the start.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-hard-hat w-6 h-6"
        aria-hidden="true"
      >
        <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
        <path d="M14 6a6 6 0 0 1 6 6v3" />
        <path d="M4 15v-3a6 6 0 0 1 6-6" />
        <rect x="2" y="15" width="20" height="4" rx="1" />
      </svg>
    ),
    title: "PROJECT EXECUTION",
    description:
      "Our experienced team executes the project with advanced techniques, quality materials and strict supervision.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-clipboard-check w-6 h-6"
        aria-hidden="true"
      >
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    ),
    title: "QUALITY INSPECTION",
    description:
      "Regular quality checks and tests are conducted at every stage to ensure superior quality construction.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-shield-check w-6 h-6"
        aria-hidden="true"
      >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "SAFETY & COMPLIANCE",
    description:
      "We follow all safety standards and legal norms to ensure a safe working environment for our team and site.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-key-round w-6 h-6"
        aria-hidden="true"
      >
        <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a2 2 0 0 1 1-1h1a2 2 0 0 0 1-1v-1a2 2 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
        <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
      </svg>
    ),
    title: "TIMELY HANDOVER",
    description:
      "We are committed to delivering the project on time with quality, ensuring complete client satisfaction.",
  },
];

interface Project {
  client: string;
  work: string;
  location: string;
  scope: string;
  year: string;
  image: string;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.client} />

        <div className="project-year">{project.year}</div>
      </div>

      <div className="project-info">
        <span className="project-label">CLIENT</span>

        <h3>{project.client}</h3>

        <span className="project-label">WORK</span>

        <p className="project-work">{project.work}</p>

        <p className="project-location">📍 {project.location}</p>

        <div className="project-details">
          <div>
            <span className="project-label">SCOPE</span>

            <strong>{project.scope}</strong>
          </div>

          <div>
            <span className="project-label">YEAR</span>

            <strong>{project.year}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

function MarqueeBox({ project }: { project: Project }) {
  return (
    <div className="marquee-item">
      <img src={project.image} alt={project.client} />

      <div className="marquee-content">
        <span className="marquee-client">{project.client}</span>

        <span className="marquee-work">{project.work}</span>

        <span className="marquee-location">
          📍 {project.location}
        </span>

        <div className="marquee-info">
          <span className="marquee-scope">{project.scope}</span>

          <span className="marquee-year">{project.year}</span>
        </div>
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <>
      <section id="portfolio" className="portfolio-section">
        <div className="overline">
          <div className="overline-box">
            <span className="overline-star">★</span>
            <p>PROVEN TRACK RECORD</p>
          </div>
        </div>

        {/* HEADER */}

        <h1>
          Featured{" "}
          <span className="orange-text">
            Construction Projects
          </span>
        </h1>

        <p>
          A glimpse of our successfully completed and ongoing projects across
          various sectors across Maharashtra and India.
        </p>

        {/* =========================================
          FIRST MARQUEE
      ========================================= */}

        <div className="portfolio-marquee">
          <div className="marquee-track">
            {[...projects, ...projects].map((project, index) => (
              <MarqueeBox
                project={project}
                key={`top-${index}`}
              />
            ))}
          </div>
        </div>

        {/* =========================================
          HIDDEN LARGE PROJECT GRID
      ========================================= */}

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
            />
          ))}
        </div>

        {/* =========================================
          SECOND MARQUEE
      ========================================= */}

        <div className="portfolio-marquee bottom-marquee">
          <div className="marquee-track reverse">
            {[...projects, ...projects].map((project, index) => (
              <MarqueeBox
                project={project}
                key={`bottom-${index}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="processes">
        <div className="overline">
          <div className="overline-box">
            <span className="overline-star">★</span>
            <p>SYSTEMATIC EXECUTION</p>
          </div>
        </div>

        <h1>
          Our{" "}
          <span className="orange-text">Work Process</span>
        </h1>

        <p>A Systematic Approach. Quality Results.</p>

        <div className="choose-process-grid">
          {processes.map((proc, index) => {
            return (
              <div className="choose-box" key={index}>
                <div className="process-item-wrapper">
                  {/* <span className="process-item-index">0{index}</span> */}

                  <div className="process-item-icon">
                    {proc.icon}
                  </div>

                  <div className="process-item-content">
                    <span className="subtitle">
                      STEP 0{index + 1}
                    </span>

                    <h3>{proc.title}</h3>

                    <p>{proc.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="process-grid">
          <div className="process-box-0">
            <p className="quote">
              {/* <span className="quote">{quote_open}</span> */}
              Every project follows a systematic approach to ensure quality,
              safety, transparency and on-time delivery
            </p>
          </div>

          <div className="process-box process-list">
            <p>
              All Projects are backed by authentic proofs and work orders
            </p>

            <div className="verified-check no-margin">
              <span className="verified-tick">
                {check_svg}
              </span>
              Work Orders & Contracts Available
            </div>

            <div className="verified-check no-margin">
              <span className="verified-tick">
                {check_svg}
              </span>
              Completion Certificates
            </div>

            <div className="verified-check no-margin">
              <span className="verified-tick">
                {check_svg}
              </span>
              Client References
            </div>

            <div className="verified-check no-margin">
              <span className="verified-tick">
                {check_svg}
              </span>
              Photos & Site Records
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;