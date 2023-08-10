import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("./Testimonials"), {
  ssr: false,
});

const Services = () => {
  return (
      <section
          id="services"
          data-nav-tooltip="Services"
          className="pp-section pp-scrollable section"
      >
        <div className="container">
          <div className="title">
            <h3>What I do?</h3>
          </div>
          <div className="row">
            <div className="col-sm-6 m-15px-tb">
              <div className="feature-box-01 media">
                <i className="icon theme-bg icon-mobile" />
                <div className="feature-content media-body">
                  <h5>Web Design</h5>
                  <p>
                    Crafting captivating web experiences has been my forte.
                    The ability to meld creativity with functionality is what I find truly invigorating.
                    Every pixel and line of code holds the potential to transform a concept into a seamless user journey.
                    I believe in the power of design to engage, communicate, and leave a lasting impact.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 m-15px-tb">
              <div className="feature-box-01 media">
                <i className="icon theme-bg icon-desktop" />
                <div className="feature-content media-body">
                  <h5>Web Development</h5>
                  <p>
                    Transforming concepts into functional, user-centric websites is my passion. From backend logic to frontend finesse, I relish bringing digital ideas to life through code. Each line I write contributes to crafting dynamic online solutions that engage and empower users.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 m-15px-tb">
              <div className="feature-box-01 media">
                <i className="icon theme-bg icon-target" />
                <div className="feature-content media-body">
                  <h5>SEO Marketing</h5>
                  <p>
                    I excel in propelling brands through strategic SEO marketing. By optimizing content and leveraging data-driven insights, I drive online growth, ensuring brands stand out and shine in the digital realm.
                  </p>
                </div>

              </div>
            </div>
            <div className="col-sm-6 m-15px-tb">
              <div className="feature-box-01 media">
                <i className="icon theme-bg icon-search" />
                <div className="feature-content media-body">
                  <h5>Web Scraping</h5>
                  <p>
                    Mastering web scraping, I automate data extraction for informed decisions. From raw data to valuable insights, I navigate the digital landscape, unlocking data-driven potential.
                  </p>
                </div>

              </div>
            </div>
            <div className="col-sm-6 m-15px-tb">
              <div className="feature-box-01 media">
                <i className="icon theme-bg icon-tools" />
                <div className="feature-content media-body">
                  <h5>Automation/Scripting</h5>
                  <p>
                    Empowering efficiency through automation and scripting is my expertise. I craft code-driven solutions that optimize workflows, from simplifying repetitive tasks to tackling intricate operations. Precision and productivity are my guiding principles.
                  </p>
                </div>

              </div>
            </div>
            <div className="col-sm-6 m-15px-tb">
              <div className="feature-box-01 media">
                <i className="icon theme-bg icon-puzzle" />
                <div className="feature-content media-body">
                  <h5>Game Development</h5>
                  <p>
                    {"I'm"} immersed in the world of game development, blending coding expertise with artistic vision to create captivating interactive experiences. From conceptualization to gameplay, I bring digital worlds to life.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="separated" />
          {/*<Testimonials />*/}
        </div>
      </section>
  );
};
export default Services;
