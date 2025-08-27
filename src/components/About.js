import Image from "next/image";

const About = () => {
  return (
      <section
          id="about"
          data-nav-tooltip="About"
          className="pp-section pp-scrollable section counter"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 m-15px-tb">
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <Image 
                      src="/static/img/me/about2.jpg" 
                      width={400}
                      height={500}
                      alt="About me" 
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 m-15px-tb">
              <div className="about-info">
                <div className="title">
                  <h3>About me.</h3>
                </div>
                <div className="about-text">
                  <h3>
                    Senior Software Developer and Team Lead with expertise in enterprise systems and AI/ML applications.
                  </h3>
                  <p>
                    Google Cloud Platform certified architect with 4+ years building production data systems. Currently leading UN-funded agricultural trading platform development using modern technologies. <br/>
                    MSc Data Science candidate with NVIDIA AI certifications, specializing in intelligent data processing pipelines and enterprise system architecture. <br/>
                    Proven expertise in team management, database optimization, and scalable cloud solutions serving real-world impact. <br/>
                  </p>
                  {/*<div className="row">*/}
                  {/*  <div className="col-auto">*/}
                  {/*    <div className="media align-items-center">*/}
                  {/*      <span className="count">5k</span>*/}
                  {/*      <div className="media-body">*/}
                  {/*        Projects <br />*/}
                  {/*        Completed.*/}
                  {/*      </div>*/}
                  {/*    </div>*/}
                  {/*  </div>*/}
                  {/*  <div className="col-auto">*/}
                  {/*    <div className="media align-items-center">*/}
                  {/*      <span className="count">3k</span>*/}
                  {/*      <div className="media-body">*/}
                  {/*        Satisfied <br />*/}
                  {/*        Clients.*/}
                  {/*      </div>*/}
                  {/*    </div>*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                  <div className="btn-bar">
                    <a className="px-btn px-btn-theme" href="#contactus">
                      <span>Contact Me</span>
                    </a>
                    <a className="px-btn px-btn-theme" href="#work">
                      <span>Portfolio</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="separated" />
          <div className="title">
            <h3>Education &amp; Skills</h3>
          </div>
          <div className="row">
            <div className="col-lg-4 m-15px-tb">
              <ul className="aducation-box">
                <li>
                  <span>2016-2020</span>
                  <h6>B.Sc. Computer Science (Special) with Honors</h6>
                  <p>University of the West Indies</p>
                </li>
                <li>
                  <span>2023 - 2025</span>
                  <h6>M.Sc. Data Science (Final Year)</h6>
                  <p>University of the West Indies</p>
                </li>
                <li>
                  <span>2024 - 2026</span>
                  <h6>Google Cloud Platform Professional Architect</h6>
                  <p>Certified Cloud Architect</p>
                </li>
                <li>
                  <span>2025</span>
                  <h6>NVIDIA Deep Learning Institute</h6>
                  <p>Accelerated Data Science & CUDA Python</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-7 ml-auto m-15px-tb">
              <div className="skills-box">
                <h3>My Expertise</h3>
                <p>
                  As a Senior Software Developer and Team Lead, I bring enterprise-level expertise in system architecture and data engineering. Currently leading UN-funded agricultural trading platforms while completing advanced certifications in AI/ML. Passionate about building intelligent, scalable solutions that drive real-world impact.
                </p>
                {/* /skill */}
                <div className="skill-lt">
                  <h6>Enterprise System Architecture</h6>
                </div>
                <div className="skill-lt">
                  <h6>Database Design & Optimization</h6>
                </div>
                <div className="skill-lt">
                  <h6>Data Science & AI/ML Engineering</h6>
                </div>
                <div className="skill-lt">
                  <h6>Cloud Infrastructure (GCP Certified)</h6>
                </div>
                <div className="skill-lt">
                  <h6>Full Stack Development</h6>
                </div>
                {/* /skill */}
              </div>
            </div>
          </div>
          <div className="separated" />
          <div className="title">
            <h3>Experience.</h3>
          </div>
          <div className="resume-box">
            <div className="resume-row">
              <div className="row">
                <div className="col-sm-3 col-md-3 col-xl-2">
                  <div className="rb-left">
                    <Image 
                      src="/static/img/experience/pgs.jpg" 
                      width={80}
                      height={80}
                      alt="Public Good Studio" 
                    />
                  </div>
                </div>
                <div className="col-sm-9 col-md-9 col-xl-10">
                  <div className="rb-right">
                    <h6>Senior Software Developer</h6>
                    <label>PUBLIC GOOD STUDIO | Hybrid | Sep 2024 – Present</label>
                    <div className="rb-time">Full Time</div>
                    <p>
                      •	Leading web development for AgriConnect: UN-funded agricultural trading platform serving Caribbean farmers <br/>
                      •	Managing complete technical stack independently using NextJS, TypeScript, Supabase, and Drizzle ORM <br/>
                      •	Developing Shamrock HSE: environmental monitoring platform with complex calculation engines and Stripe integration <br/>
                      •	Sole remaining developer following organizational restructuring, maintaining critical systems during transition <br/>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume-row">
              <div className="row">
                <div className="col-sm-3 col-md-3 col-xl-2">
                  <div className="rb-left">
                    <Image 
                      src="/static/img/experience/iacl.jpg" 
                      width={80}
                      height={80}
                      alt="Intelligent Applications Company" 
                    />
                  </div>
                </div>
                <div className="col-sm-9 col-md-9 col-xl-10">
                  <div className="rb-right">
                    <h6>Software Developer (Part-Time)</h6>
                    <label>INTELLIGENT APPLICATIONS COMPANY | Remote | Oct 2023 – Sep 2024</label>
                    <div className="rb-time">Part Time</div>
                    <p>
                      •	Conducted penetration testing and vulnerability assessments for Azure-deployed applications <br/>
                      •	Maintained diverse client codebases including Caribbean Sailing Association and cargo manifest systems <br/>
                      •	Performed security audits and implemented fixes for enterprise client applications <br/>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume-row">
              <div className="row">
                <div className="col-sm-3 col-md-3 col-xl-2">
                  <div className="rb-left">
                    <Image 
                      src="/static/img/experience/hrplus.png" 
                      width={80}
                      height={80}
                      alt="HRPLUS SOFTWARE" 
                    />
                  </div>
                </div>
                <div className="col-sm-9 col-md-9 col-xl-10">
                  <div className="rb-right">
                    <h6>Full Stack Developer</h6>
                    <label>HRPLUS SOFTWARE | Hybrid | Nov 2022 – May 2023</label>
                    <div className="rb-time">Full Time</div>
                    <p>
                      •	Developed enterprise features using .NET 6, MySQL, and Telerik UI frameworks <br/>
                      •	Built responsive interfaces and applied SCRUM methodology in collaborative environment <br/>
                      •	Gained expertise in enterprise web application development and database optimization <br/>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume-row">
              <div className="row">
                <div className="col-sm-3 col-md-3 col-xl-2">
                  <div className="rb-left">
                    <Image 
                      src="/static/img/experience/republic-bank.jpg" 
                      width={80}
                      height={80}
                      alt="Republic Bank Limited" 
                    />
                  </div>
                </div>
                <div className="col-sm-9 col-md-9 col-xl-10">
                  <div className="rb-right">
                    <h6>Technical Analyst – Intern</h6>
                    <label>REPUBLIC BANK LIMITED | On-Site | Jan 2022 – Nov 2022</label>
                    <div className="rb-time">Full Time</div>
                    <p>
                      •	Developed PowerShell automation achieving 10% efficiency improvement in production banking environment <br/>
                      •	Built full-stack ticketing system digitizing manual processes and enhancing workflow <br/>
                      •	Managed test environments and databases in regulated financial services environment <br/>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};
export default About;
