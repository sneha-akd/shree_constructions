function Services() {

  const cards = [
    {
      title: "Building Construction",
      subtitle:
        "Residential Houses, Apartments, PEB Warehouses & Commercial Plazas.",
      description:
        "Full-scale architectural design and civil building construction. We deliver luxury custom villas, apartments, office towers, hotels, and industrial factories across Maharashtra with zero escalation.",
      scope: [
        "Residential Houses & Villas",
        "Commercial Buildings",
        "Farmhouses",
        "Warehouses & Godowns",
        "All Types of Buildings",
        "Apartments & Residential Complexes",
        "Office Buildings",
        "Industrial Buildings & Factories",
        "Hotels & Resorts",
      ],
    },
    {
      title: "Road & Infrastructure",
      subtitle:
        "Highways, Internal RCC Roads, Culverts & Drainage Networks",
      description:
        "Heavy infrastructure engineering specializing in RCC roads, bituminous asphalt paving, storm water drainage systems, highway service roads, and boundary wall development works.",
      scope: [
        "RCC Roads",
        "Internal Roads",
        "CC Roads",
        "Culverts",
        "Paver Block Works",
        "Bituminous (Asphalt) Roads",
        "Highway & Service Roads",
        "Drainage & Storm Water Systems",
        "Compound Walls",
        "Footpaths & Development Works",
      ],
    },
    {
      title: "Civil & Structural Works",
      subtitle:
        "RCC Framing, Excavation, Structural Retrofitting & Finishing",
      description:
        "Safe, efficient, and durable heavy structural engineering solutions. Includes machine foundation works, seismic load design, masonry, plastering, waterproofing, and structural repairs.",
      scope: [
        "RCC Framed Structures",
        "Earthwork & Excavation",
        "Structural Repairs & Retrofitting",
        "Waterproofing",
        "Foundation Work",
        "Masonry & Plastering",
        "Renovation & Remodeling",
        "Flooring & Finishing Works",
      ],
    },
    {
      title: "Turnkey Solutions",
      subtitle:
        "Single-Source Responsibility from Blueprint to Key Handover",
      description:
        "End-to-end turnkey project execution covering detailed structural drawings, site supervision, material procurement, quality assurance audits, and strictly guaranteed on-time handover.",
      scope: [
        "Planning & Execution",
        "Site Supervision",
        "Material Management",
        "Project Management",
        "Quality Control",
        "On-Time Project Delivery",
      ],
    },
  ];

  return (<>
    <section id="services">
      <div className="overline">
        <div className="overline-box">
          <span className="overline-star">★</span>
          <p>OUR EXPERTISE</p>
        </div>
      </div>
      <h1>
        Architectural & {" "}
        <span className="orange-text">Construction Services</span>
      </h1>

      <p style={{ fontSize: "14px", color: "rgb(129, 129, 226)" }}>COMPLETE CONSTRUCTION SOLUTIONS UNDER ONE ROOF </p>


      <div className="construction-description">
        <p>
          “From Residential Homes to Large-Scale Infrastructure Projects,
          <b>Shree Construction Engineers & Contractor</b> delivers reliable,<br />
          high-quality, and cost-effective construction solutions with a
          commitment to excellence.”
        </p>

      </div>

      <div className="info-extra">
        {cards.map((card, index) => (
          <div className="info-card" key={index}>
            <div className="info-content">
              <h2 className="orange-text">{card.title}</h2>

              <div className="info-item">
                <p>
                  <b>{card.subtitle}</b>
                </p>
              </div>

              <p>{card.description}</p>

              <hr />
              <p>
                <b>Complete Scope & Deliverables:</b>
              </p>

              <div className="info-list">


                {card.scope.map((item, itemIndex) => (
                  <div className="info-item" key={itemIndex}>
                    <span>✓</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
  );
}




export default Services;
