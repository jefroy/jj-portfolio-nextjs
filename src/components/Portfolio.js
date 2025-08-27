import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import PortfolioItem from "./PortfolioItem";
const Portfolio = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-content", {
      itemSelector: ".grid-item",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".grid-item",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return () => isotope.current.destroy();
  });
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
          ? isotope.current.arrange({ filter: `*` })
          : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
      <section
          id="work"
          data-nav-tooltip="Work"
          className="pp-section pp-scrollable section dark-bg"
      >
        <div className="container">
          <div className="title">
            <h3>My Portfolio.</h3>
          </div>
          <div className="portfolio-filter-01">
            <ul className="filter nav">
              <li
                  className={`c-pointer ${activeBtn("*")}`}
                  onClick={handleFilterKeyChange("*")}
                  data-filter="*"
              >
                All
              </li>
              <li
                  className={`c-pointer ${activeBtn("web-apps")}`}
                  onClick={handleFilterKeyChange("web-apps")}
                  data-filter=".web-apps"
              >
                Web Apps
              </li>
              <li
                  className={`c-pointer ${activeBtn("data-projects")}`}
                  onClick={handleFilterKeyChange("data-projects")}
                  data-filter=".data-projects"
              >
                Data Projects
              </li>
              <li
                  className={`c-pointer ${activeBtn("enterprise")}`}
                  onClick={handleFilterKeyChange("enterprise")}
                  data-filter=".enterprise"
              >
                Enterprise
              </li>
            </ul>
          </div>{" "}
          {/* Portfolio Filter */}
          <div className="portfolio-content grid-gutter-lg grid-col-3 lightbox-gallery">
            {/*Enterprise Projects*/}
            <PortfolioItem
                category={"enterprise"}
                title={"AgriConnect"}
                desc={"Leading development of UNCDF-funded agricultural trading platform serving Caribbean farmers. " +
                    "Features secure payment integration and real-time market pricing."}
                imgSrc={"static/img/portfolio-items/agriconnect.png"}
                projectLink={"https://onefintechavenue.com/index.php/2025/03/25/agriconnect/"}
            />
            <PortfolioItem
                category={"enterprise"}
                title={"Shamrock HSE"}
                desc={"Greenhouse gas emissions monitoring and carbon footprint tracking platform. " +
                    "Features sophisticated calculation engines and complete Stripe subscription management system."}
                imgSrc={"static/img/portfolio-items/shamrock-hse.png"}
                projectLink={"https://shamrock-hse.vercel.app/"}
            />
            {/*Data Projects*/}
            <PortfolioItem
                category={"data-projects"}
                title={"(WiP) Agricultural Data Analytics Research"}
                desc={"MSc Data Science thesis project focusing on agricultural data analytics using NAMDEVCO datasets. " +
                    "Implementing intelligent systems for data-driven agricultural insights and predictive modeling."}
                imgSrc={"static/img/portfolio-items/data-research.jpg"}
                projectLink={"#"}
            />
            {/*Web Apps*/}
            <PortfolioItem
                category={"web-apps"}
                title={"CinemaTT"}
                desc={"Movie discovery platform for Trinidad providing comprehensive entertainment database. " +
                    "Web application aggregating movie showtimes across cinemas with modern Next.js architecture."}
                imgSrc={"static/img/portfolio-items/cinematt.webp"}
                projectLink={"https://www.cinematt.net/"}
            />
            <PortfolioItem
                category={"web-apps"}
                title={"PlaylistGuru"}
                desc={"Social music curation application featuring algorithm-driven playlist generation. " +
                    "Built with modern web technologies to deliver personalized music discovery experiences."}
                imgSrc={"static/img/portfolio-items/playlistguru.jpg"}
                projectLink={"https://www.playlistguru.app/"}
            />
            <PortfolioItem
                category={"web-apps"}
                title={"Yu-Gi-Oh! Helper"}
                desc={"Full Stack tournament management application to assist organizers and players. " +
                    "Built using Next.js with Firebase backend, featuring real-time updates and responsive design."}
                imgSrc={"static/img/portfolio-items/d00lm8.png"}
                projectLink={"https://d00lm8.vercel.app/"}
            />
          </div>
        </div>
      </section>
  );
};
export default Portfolio;