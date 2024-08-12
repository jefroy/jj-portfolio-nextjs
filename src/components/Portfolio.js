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
            {/*web apps*/}
            <PortfolioItem
                category={"web-apps"}
                title={"Yu-Gi-Oh! Helper"}
                desc={"Full Stack application to assist tournament organizers and players. " +
                    "Built using Next.js + Firebase. Hosting + CI on Vercel."}
                imgSrc={"static/img/portfolio-items/d00lm8.png"}
                projectLink={"https://d00lm8.vercel.app/"}
            />
            <PortfolioItem
                category={"web-apps"}
                title={"Cinematt"}
                desc={"A web application that aggregates movie showtimes across cinemas in Trinidad. " +
                    "Built using Next.js for the frontend, with a backend powered by Firebase and Firestore. " +
                    "The site is deployed and hosted on Vercel."}
                imgSrc={"static/img/portfolio-items/cinematt.webp"}  // Make sure to add the appropriate image here
                projectLink={"https://www.cinematt.net/"}
            />
            <PortfolioItem
                category={"web-apps"}
                title={"Agency Website"}
                desc={"JJ, the freelance developer. " +
                    "Built using Next.js. " +
                    "Hosting + CI on Vercel. Domain services via Hostinger."}
                imgSrc={"static/img/portfolio-items/jjspages.png"}
                projectLink={"https://www.jjspages.com/"}
            />
            {/*<PortfolioItem*/}
            {/*    category={"web-apps"}*/}
            {/*    title={"Netflix Clone"}*/}
            {/*    desc={"This app is meant to mimic the looks of the popular web app: Netflix. Plays a trailer for the show you clicked."}*/}
            {/*    imgSrc={"static/img/portfolio-items/netflix-clone.png"}*/}
            {/*    projectLink={"https://github.com/jefroy/jj-movies/wiki/About-this-SPA-(Single-Page-Application)"}*/}
            {/*/>*/}
            {/*<PortfolioItem*/}
            {/*    category={"web-apps"}*/}
            {/*    title={"Discord Clone"}*/}
            {/*    desc={"This app is meant to mimic the looks of the popular VoIP service: Discord. Has a text channel feature."}*/}
            {/*    imgSrc={"static/img/portfolio-items/Discordclone.jpg"}*/}
            {/*    projectLink={"https://github.com/jefroy/jj-discord/wiki/About-this-SPA-(Single-Page-Application)"}*/}
            {/*/>*/}
            {/*<PortfolioItem*/}
            {/*    category={"web-apps"}*/}
            {/*    title={"To-Do App"}*/}
            {/*    desc={"A simple To-Do application built in ReactJS. Uses Firebase and Google Login."}*/}
            {/*    imgSrc={"static/img/portfolio-items/to-do-list-apps.png"}*/}
            {/*    projectLink={"https://github.com/jefroy/jj-todo-app/wiki/About-this-SPA-(Single-Page-Application)"}*/}
            {/*/>*/}
            {/*games*/}
            <PortfolioItem
                category={"games"}
                title={"Boneless Platforms"}
                desc={"A simple 3D platformer I built in Unity to learn the framework."}
                imgSrc={"static/img/portfolio-items/3dplatform.gif"}
                projectLink={"https://github.com/jefroy/boneless-platforms"}
            />
            <PortfolioItem
                category={"games"}
                title={"Jo's Jungle Jamboree"}
                desc={"A simple 2D sidescroller I built in Unity for a game programming course while attending uni."}
                imgSrc={"static/img/portfolio-items/junglefinal.gif"}
                projectLink={"https://github.com/UWI-Bois/gameProgA4"}
            />
            {/*automation*/}
            <PortfolioItem
                category={"automation"}
                title={"Grocery Dashboard"}
                desc={"A web scraper that captures product and price information from Grocery™️'s website bi-daily, storing the data in an Azure database. Built a user-friendly Streamlit dashboard to display this data."}
                imgSrc={"static/img/portfolio-items/grocery-dashboard.png"}
                projectLink={"https://grocery-dashboard.streamlit.app/"}
            />
            {/*<PortfolioItem*/}
            {/*    category={"automation"}*/}
            {/*    title={"HorribleSubs Episode Sorter"}*/}
            {/*    desc={"Scrape the horrible subs web page to generate download links for selected anime episodes. (Not usable anymore since the website is offline)"}*/}
            {/*    imgSrc={"static/img/portfolio-items/horriblesubs-banner-1.jpg"}*/}
            {/*    projectLink={"https://github.com/jefroy/HS-Magnet-Sorter"}*/}
            {/*/>*/}
            <PortfolioItem
                category={"automation"}
                title={"Router Page Web Scraper"}
                desc={"Get the table of ports forwarded on your digicel router"}
                imgSrc={"static/img/portfolio-items/digicelscraper.png"}
                projectLink={"https://github.com/jefroy/HS-Magnet-Sorter"}
            />

          </div>
        </div>
      </section>
  );
};
export default Portfolio;
