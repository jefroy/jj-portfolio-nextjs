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
                    <img src="static/img/about-me.png" title="" alt="" />
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
                    {"I'm"} a dedicated Full Stack Developer with a passion for problem-solving and innovation.
                  </h3>
                  <p>
                    Well-qualified Full Stack Developer familiar with wide range of programming utilities and languages. <br/>
                    Knowledgeable of backend and frontend development requirements. Handles any part of process with ease. <br/>
                    Collaborative team player with excellent technical abilities offering 3+ years of related experience. <br/>
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
                  <h6>Computer Science (Special)</h6>
                  <p>University of the West Indies</p>
                </li>
                <li>
                  <span>2019 - Present</span>
                  <h6>Independent Study</h6>
                  <p>Full Stack, Data Science, Automation</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-7 ml-auto m-15px-tb">
              <div className="skills-box">
                <h3>My Skills</h3>
                <p>
                  As an accomplished Full Stack Developer, I bring a robust foundation in Computer Science to the table. With a proven track record of designing and developing dynamic web applications, I am driven by an unwavering passion for continuous learning and fostering growth within the dynamic landscape of the tech industry.
                </p>
                {/* /skill */}
                <div className="skill-lt">
                  <h6>Web Fundamentals </h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "90%" }}>
                      <span data-toggle="tooltip" title="95%" />
                    </div>
                  </div>
                </div>
                <div className="skill-lt">
                  <h6>Full Stack</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "85%" }}>
                      <span data-toggle="tooltip" title="85%" />
                    </div>
                  </div>
                </div>
                <div className="skill-lt">
                  <h6>Automation</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "70%" }}>
                      <span data-toggle="tooltip" title="75%" />
                    </div>
                  </div>
                </div>
                <div className="skill-lt">
                  <h6>Data Science</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "60%" }}>
                      <span data-toggle="tooltip" title="60%" />
                    </div>
                  </div>
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
                    <img src="static/img/experience/hrplus.png" title="" alt="" />
                  </div>
                </div>
                <div className="col-sm-9 col-md-9 col-xl-10">
                  <div className="rb-right">
                    <h6>Full Stack Developer</h6>
                    <label>HRPLUS SOFTWARE | Hybrid | Nov 2022 – May 2023</label>
                    <div className="rb-time">Full Time</div>
                    <p>
                      •	Worked with team members to develop/design new systems while refactoring existing systems <br/>
                      •	Leveraged experience in Git, .NET 6, JS, CSS, Telerik UI, SQL, Problem Solving <br/>
                      •	Adhered to SCRUM Methods to work alongside fellow developers to routinely rollout features <br/>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume-row">
              <div className="row">
                <div className="col-sm-3 col-md-3 col-xl-2">
                  <div className="rb-left">
                    <img src="static/img/experience/republic-bank.jpg" title="" alt="" />
                  </div>
                </div>
                <div className="col-sm-9 col-md-9 col-xl-10">
                  <div className="rb-right">
                    <h6>Technical Analyst – Intern</h6>
                    <label>REPUBLIC BANK LIMITED | On-Site | Jan 2022 – Nov 2022</label>
                    <div className="rb-time">Full Time</div>
                    <p>
                      •	Worked in a production support environment to ensure the implementation of scripts and media in the bank’s core applications <br/>
                      •	Ensured test environments/databases are configured as needed by the programming department <br/>
                      •	Performed routine system maintenance checks to ensure system health <br/>
                      •	Developed PowerShell automation of routine tasks to increase the team’s efficiency by ~10% <br/>
                      •	Built a Ticketing System to digitize an existing process in the form of a full-stack web app <br/>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume-row">
              <div className="row">
                <div className="col-sm-3 col-md-3 col-xl-2">
                  <div className="rb-left">
                    <img src="static/img/experience/alta.jpg" title="" alt="" />
                  </div>
                </div>
                <div className="col-sm-9 col-md-9 col-xl-10">
                  <div className="rb-right">
                    <h6>Full Stack Developer</h6>
                    <label>ADULT LITERACY TUTORS ASSOCIATION | Remote | Aug 2020 – Nov 2021</label>
                    <div className="rb-time">Full Time</div>
                    <p>
                      •	Work with team members to maintain the codebase, fix bugs, develop new features <br/>
                      •	Leverage experience in Git, PHP, JS, CSS, ReactJS, Unit Testing, Problem Solving <br/>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume-row">
              <div className="row">
                <div className="col-sm-3 col-md-3 col-xl-2">
                  <div className="rb-left">
                    <img src="static/img/experience/mett.jpg" title="" alt="" />
                  </div>
                </div>
                <div className="col-sm-9 col-md-9 col-xl-10">
                  <div className="rb-right">
                    <h6>Full Stack Developer - Intern</h6>
                    <label>TRINIDAD AND TOBAGO METEOROLOGICAL OFFICE | Remote | Aug 2018 – May 2019</label>
                    <div className="rb-time">Full Time</div>
                    <p>
                      •	Collaborated with team members to design and develop a Climate Report Management System which was used to enhance workflow for staff and administrators <br/>
                      •	Designed, tested, and integrated an ACL (Access Control List) for users on the system <br/>
                      •	Utilized Scrum methodology in communicating with stakeholders and developers via Slack, and applied the CI model during development of the app <br/>
                      •	Gained experience in PHP/Laravel, Vue.js, leadership and teamwork skills <br/>
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
