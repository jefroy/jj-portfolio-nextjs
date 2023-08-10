import dynamic from "next/dynamic";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import ParticlesBackground from "../src/components/ParticlesBackground";
import Services from "../src/components/Services";
import Layout from "../src/layout/Layout";
import TypingAnimation from "../src/components/TypingAnimation";
const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});
const IndexParticles = () => {
  return (
    <Layout>
      <section
        id="home"
        data-nav-tooltip="Home"
        className="pp-section pp-scrollable"
      >
        <div className="home-banner">
          {/* <div id="particles-box" className="particles" /> */}
          <ParticlesBackground />
          <div className="container">
            <div className="row full-screen align-items-center">
              <div className="col-lg-6">
                <div className="type-box">
                  <h6>Hello, I am</h6>
                  <h1 className="font-alt">Ajay Sieunarine</h1>
                  <p className="lead">
                    Passionate <TypingAnimation />
                  </p>
                  <p className="desc">
                    Hard-working Computer Science graduate, from the University of the West Indies St. Augustine <br/>
                    Aiming to leverage proven problem-solving, teamwork and planning skills to successfully fill the role at your company.
                  </p>
                  <div className="btn-bar">
                    <a
                        className="px-btn px-btn-theme"
                        href="/ajay_cv.pdf"  // Link to the PDF file
                        download="ajay_sieunarine_cv.pdf"  // Suggested filename for the downloaded file
                    >
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hb-img">
                  <img src="static/img/home-banner.png" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Home */}
      {/* about us */}
      <About />
      {/* End about us */}
      {/* Services */}
      <Services />
      {/* End Services */}
      {/* Portfolio */}
      <Portfolio />
      {/* End Portfolio */}
      {/* Blog */}
      <Blog />
      {/* End Blog */}
      {/* Contact us */}
      <Contact />
    </Layout>
  );
};
export default IndexParticles;
