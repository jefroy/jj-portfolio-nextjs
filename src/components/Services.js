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
                <i className="icon theme-bg icon-genius" />
                <div className="feature-content media-body">
                  <h5>Data Science & Machine Learning</h5>
                  <p>
                    MSc Data Science candidate with NVIDIA certifications in Accelerated Data Science and CUDA Python. 
                    Building intelligent applications using RAG systems, vector databases (ChromaDB, FAISS), and machine 
                    learning pipelines. Specializing in agricultural data analytics for production systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 m-15px-tb">
              <div className="feature-box-01 media">
                <i className="icon theme-bg icon-database" />
                <div className="feature-content media-body">
                  <h5>Database Architecture & Engineering</h5>
                  <p>
                    Expert in designing and optimizing database systems across PostgreSQL, MSSQL, MongoDB, and vector databases. 
                    Building scalable data pipelines, implementing complex calculation engines, and architecting data infrastructure 
                    for enterprise applications handling production workloads.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 m-15px-tb">
              <div className="feature-box-01 media">
                <i className="icon theme-bg icon-desktop" />
                <div className="feature-content media-body">
                  <h5>Full Stack Development</h5>
                  <p>
                    Building production-grade applications using NextJS, TypeScript, React, and Supabase with Drizzle ORM. 
                    Currently leading development of UN-funded AgriConnect platform, delivering complete solutions from 
                    database design to user interface implementation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 m-15px-tb">
              <div className="feature-box-01 media">
                <i className="icon theme-bg icon-cloud" />
                <div className="feature-content media-body">
                  <h5>Cloud Architecture</h5>
                  <p>
                    Google Cloud Platform Professional Architect certified with expertise in container orchestration, 
                    CI/CD pipelines, and infrastructure as code. Designing scalable cloud solutions that ensure reliability, 
                    security, and cost optimization for enterprise systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 m-15px-tb">
              <div className="feature-box-01 media">
                <i className="icon theme-bg icon-layers" />
                <div className="feature-content media-body">
                  <h5>Enterprise System Architecture</h5>
                  <p>
                    Leading architectural decisions for complex systems including environmental monitoring platforms with 
                    sophisticated calculation engines. Experience with microservices architecture, system integration, 
                    and building platforms that serve thousands of users across multiple regions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 m-15px-tb">
              <div className="feature-box-01 media">
                <i className="icon theme-bg icon-tools" />
                <div className="feature-content media-body">
                  <h5>Technical Leadership & Team Management</h5>
                  <p>
                    Senior developer and team lead with proven experience managing critical systems during organizational transitions. 
                    Sole developer maintaining UN-funded platforms, handling stakeholder communications, and ensuring 
                    continuous delivery of enterprise solutions.
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