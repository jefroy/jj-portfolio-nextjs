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
                  className={`c-pointer ${activeBtn("games")}`}
                  onClick={handleFilterKeyChange("games")}
                  data-filter=".games"
              >
                Games
              </li>
              <li
                  className={`c-pointer ${activeBtn("automation")}`}
                  onClick={handleFilterKeyChange("automation")}
                  data-filter=".automation"
              >
                Automation
              </li>
            </ul>
          </div>{" "}
          {/* Portfolio Filter */}
          <div className="portfolio-content grid-gutter-lg grid-col-3 lightbox-gallery">
            <PortfolioItem
                category={"web-apps"}
                title={"Yu-Gi-Oh! Helper"}
                desc={"Full Stack application to assist tournament organizers and players. " +
                    "Built using Next.js + Firebase. Hosting + CI on Vercel."}
                imgSrc={"static/img/portfolio-items/d00lm8.png"}
                projectLink={"https://d00lm8.vercel.app/"}
            />
          </div>
        </div>
      </section>
  );
};
export default Portfolio;
