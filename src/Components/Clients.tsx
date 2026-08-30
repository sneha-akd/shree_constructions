import React, { useEffect, useState } from 'react'

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
    style: "square",
    uri: "https://teamatharva.in/"
  },
  {
    name: "ADANI LOGISTICS LTD.",
    desc: "Delivering Integrated Logistics Solutions with Excellence.",
    logo: adani_logo,
    style: "square",
    uri: "https://www.adani.com/businesses/infrastructure"
  },
  {
    name: "BHASIN CONSTRUCTIONS COMPANY",
    desc: "Building Structures. Building Trust.",
    logo: bhasin_logo,
    style: "square",
    uri: "https://www.bhasinestates.com/"
  },
  {
    name: "LLOYDS METALS & ENERGY LTD.",
    desc: "Strengthening Tomorrow with Quality and Commitment",
    logo: lloyd_logo,
    style: "horizontal",
    uri: "https://lloyds.in/"
  },
  {
    name: "NIKITA INFRA",
    desc: "Building the Foundation of Tomorrow.",
    logo: nikita_logo,
    style: "square",
    uri: "https://nikitainfra.com/"
  },
  {
    name: "RELIANCE CONSTRUCTION GROUP",
    desc: "Building Trust. Delivering Excellence.",
    logo: reliance_logo,
    style: "horizontal",
    uri: "https://www.reliancekc.com/"
  },
  {
    name: "M/s SOLAR EXPLOSIVES",
    desc: "Powering Progress. Energizing Infrastructure.",
    logo: solar_logo,
    style: "horizontal",
    uri: "https://solargroup.com/home.html"
  },
];

function Clients() {

  const [activeIndex, setActiveIndex] = useState(0);
  const [transition, setTransition] = useState(true);

  const activeClient = partners[activeIndex];
  const clients = [partners[partners.length - 1], ...partners, partners[0], partners[1], partners[2]];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % partners.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (activeIndex === partners.length + 1) {
      // Wait until the animated movement has finished
      const timer = setTimeout(() => {
        // 1. Disable transition
        setTransition(false);

        // 2. Snap back to the real first item
        setActiveIndex(0);

        // 3. Re-enable transition on the next frame
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setTransition(true);
          });
        });
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [activeIndex, partners.length]);


  // const visibleItems = [
  //   partners[(activeIndex - 1 + partners.length) % partners.length],
  //   activeClient,
  //   partners[(activeIndex + 1) % partners.length],
  //   partners[(activeIndex + 2) % partners.length]
  // ];


  return (
    <section id='clients'>
      <div className="overline">
        <div className="overline-box">
          <span className="overline-star">★</span>
          <p>AFFILIATES</p>
        </div>
      </div>
      <h1>
        Major{" "}
        <span className="orange-text">
          Clients
        </span>
      </h1>
      <p>
        Building Strong Relationships, Delivering Excellence.
      </p>


      <div className='logo-showcase'>
        <div className="logo-marquee">

          <div className="logo-marquee-track"
            style={{
              transform: `translateY(-${(activeIndex) * 10
                }em)`,
              transition: transition
                ? "transform 600ms ease-in-out"
                : "none",
            }}
          >
            {clients.map((client, index) => {

              return (
                <div
                  key={`${client.name}-${index}`}
                  className={`logo-item ${activeIndex === index ? "active" : ""
                    }`}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                  />
                </div>
              );
            })}
          </div>

        </div>

        <div className="logo-details">

          <div className="detail-logo">
            <img
              src={activeClient.logo}
              alt={activeClient.name}
            />
          </div>

          <div className="detail-content">

            <h2>{activeClient.name}</h2>

            <p>{activeClient.desc}</p>

            <a
              href={activeClient.uri}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>

          </div>

        </div>
      </div>
    </section >
  )
}

export default Clients;