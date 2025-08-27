import Image from "next/image";

const PortfolioItem = ({ category, title, desc, imgSrc, projectLink }) => {
  return (
      <div className={`grid-item product ${category}`}>
        <div className="portfolio-box-01">
          <div className="portfolio-info">
            <h5 className="white-color font-weight-bold">{title}</h5>
            <span>{desc}</span>
          </div>
          <div className="portfolio-img">
            <Image 
              src={imgSrc} 
              width={500}
              height={400}
              alt={title} 
            />
            <div className="portfolio-icon">
              <a
                  href={projectLink}
                  className="gallery-link"
                  target="_blank" rel="noopener noreferrer"
              >
                <span className="ti-plus" />
              </a>
            </div>
          </div>
        </div>
      </div>
  );
};
export default PortfolioItem;
