


import logo_main from "../assets/logo_main.png";

function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">

        <img
          src={logo_main}
          alt="Shree Construction Engineers & Contractor"
          className="logo"
        />

        <p className="word">
          NAGPUR, MAHARASHTRA • 26+ YEARS OF CIVIL ENGINEERING EXPERTISE
        </p>

        <h1>
          <span className="black">From Roads to Homes,</span>
          <br />
          <span className="orange">We Build the Future.</span>
        </h1>

        <p>
          <b className="black">
            Shree Construction Engineers & Contractor
          </b>{" "}
          combines modern engineering technology, 26+ years of collective team
          expertise, and uncompromised material standards across residential,
          commercial, industrial PEB, and road infrastructure projects.
        </p>

      </div>
    </section>
  );
}

export default Home;

