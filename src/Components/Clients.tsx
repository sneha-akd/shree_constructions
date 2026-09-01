import { useEffect, useState } from "react";

import atharva_logo from "../../src/assets/atharva_brand.webp";
import adani_logo from "../../src/assets/adani-brand.webp";
import bhasin_logo from "../../src/assets/bhasins_brand.avif";
import lloyd_logo from "../../src/assets/lloyds-metals-logo.svg";
import nikita_logo from "../../src/assets/nikita-infra-transback.webp";
import solar_logo from "../../src/assets/solars_brand.png";
import reliance_logo from "../../src/assets/reliance_const_brand.avif";

const partners = [
  {
    name: "ATHARVA CREATORS PVT. LTD.",
    desc: "Trusted Partner in Construction and Infrastructure Development.",
    logo: atharva_logo,
    uri: "https://teamatharva.in/",
  },
  {
    name: "ADANI LOGISTICS LTD.",
    desc: "Delivering Integrated Logistics Solutions with Excellence.",
    logo: adani_logo,
    uri: "https://www.adani.com/businesses/infrastructure",
  },
  {
    name: "BHASIN CONSTRUCTIONS COMPANY",
    desc: "Building Structures. Building Trust.",
    logo: bhasin_logo,
    uri: "https://www.bhasinestates.com/",
  },
  {
    name: "LLOYDS METALS & ENERGY LTD.",
    desc: "Strengthening Tomorrow with Quality and Commitment.",
    logo: lloyd_logo,
    uri: "https://lloyds.in/",
  },
  {
    name: "NIKITA INFRA",
    desc: "Building the Foundation of Tomorrow.",
    logo: nikita_logo,
    uri: "https://nikitainfra.com/",
  },
  {
    name: "RELIANCE CONSTRUCTION GROUP",
    desc: "Building Trust. Delivering Excellence.",
    logo: reliance_logo,
    uri: "https://www.reliancekc.com/",
  },
  {
    name: "M/s SOLAR EXPLOSIVES",
    desc: "Powering Progress. Energizing Infrastructure.",
    logo: solar_logo,
    uri: "https://solargroup.com/home.html",
  },
];

function Clients() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % partners.length);
    }, 5400);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <>
      <section id="clients">

        {/* HEADER */}



        <div className="overline">
          <div className="overline-box">
            <span className="overline-star">★</span>
            <p>AFFILIATES</p>
          </div>
        </div>

        <h1>
          Major <span className="orange-text">Clients</span>
        </h1>

        <p className="clients-subtitle">
          Building Strong Relationships, Delivering Excellence.
        </p>
        <div>
          <p className='quote'>Trusted by leading organizations across
            industrial, commercial and infrastructure sectors.
          </p>
        </div>


        {/* MARQUEE */}

        <div
          className="clients-marquee"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          <div className="marquee-fade marquee-fade-left"></div>

          <div
            className={`clients-marquee-track ${isPaused ? "marquee-paused" : ""
              }`}
          >

            {/* FIRST GROUP */}

            <div className="clients-marquee-group">

              {partners.map((client, index) => (

                <div
                  className={`client-card ${activeIndex === index ? "active-client" : ""
                    }`}
                  key={`first-${index}`}
                >

                  <div className="client-card-logo">
                    <img
                      src={client.logo}
                      alt={client.name}
                    />
                  </div>

                  <div className="client-card-content">

                    <h3>
                      {client.name}
                    </h3>

                    <p>
                      {client.desc}
                    </p>

                    <a
                      href={client.uri}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Website <span>↗</span>
                    </a>

                  </div>

                </div>

              ))}

            </div>


            {/* DUPLICATE GROUP */}

            <div
              className="clients-marquee-group"
              aria-hidden="true"
            >

              {partners.map((client, index) => (

                <div
                  className={`client-card ${activeIndex === index ? "active-client" : ""
                    }`}
                  key={`second-${index}`}
                >

                  <div className="client-card-logo">
                    <img
                      src={client.logo}
                      alt=""
                    />
                  </div>

                  <div className="client-card-content">

                    <h3>
                      {client.name}
                    </h3>

                    <p>
                      {client.desc}
                    </p>

                    <a
                      href={client.uri}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={-1}
                    >
                      Visit Website <span>↗</span>
                    </a>

                  </div>

                </div>

              ))}

            </div>

          </div>

          <div className="marquee-fade marquee-fade-right"></div>

        </div>



      </section >

      <div className="trust-grid">

        <div className="trust-card">
          <div className="icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <h3>TRUSTED PARTNERS</h3>
          <p>Corporate Enterprises</p>
        </div>


        <div className="trust-card">
          <div className="icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M12 3L4 6v6c0 5.25 3.4 9.75 8 11 4.6-1.25 8-5.75 8-11V6l-8-3z" />
              <path d="m8.5 12 2.3 2.3 4.7-4.7" />
            </svg>
          </div>
          <h3>QUALITY ASSURED</h3>
          <p>Strict Engineering Standards</p>
        </div>


        <div className="trust-card">
          <div className="icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M20 7h-9" />
              <path d="M20 17h-9" />
              <path d="M4 7h.01" />
              <path d="M4 17h.01" />
              <path d="M7 4v6" />
              <path d="M7 14v6" />
              <path d="M17 4v6" />
              <path d="M17 14v6" />
            </svg>
          </div>
          <h3>LONG TERM RELATIONS</h3>
          <p>Repeat Contracts & Trust</p>
        </div>


        <div className="trust-card">
          <div className="icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <circle cx="12" cy="12" r="9" />
              <path d="m8 12 2.5 2.5L16 9" />
            </svg>
          </div>
          <h3>CLIENT SATISFACTION</h3>
          <p>100% On-Time Delivery</p>
        </div>
      </div>
    </>
  );
}

export default Clients;