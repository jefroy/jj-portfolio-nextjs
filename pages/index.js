import dynamic from "next/dynamic";
import Image from "next/image";
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
                    Senior Software Developer and Team Lead with 4+ years building production systems. Google Cloud Platform certified architect currently leading UN-funded agricultural trading platforms. <br/>
                    MSc Data Science final year candidate specializing in enterprise system architecture, AI/ML engineering, and intelligent data processing pipelines.
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
                  <div className="btn-bar">
                    <a
                        className="px-btn px-btn-theme"
                        href="/ajay_resume.pdf"  // Link to the PDF file
                        download="ajay_sieunarine_resume.pdf"  // Suggested filename for the downloaded file
                    >
                      Download Resume
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hb-img">
                  <Image 
                    src="/static/img/me/linkedin.jpeg" 
                    width={400}
                    height={500}
                    alt="Ajay Sieunarine" 
                  />
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
      {/*<Blog />*/}
      {/* End Blog */}
      {/* Contact us */}
      <Contact />
    </Layout>
  );
};
export default IndexParticles;