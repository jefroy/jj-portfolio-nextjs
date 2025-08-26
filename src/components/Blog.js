import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <section
      id="blog"
      data-nav-tooltip="Blog"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>Latest Blog.</h3>
        </div>
        <div className="row">
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="/single-blog">
                  <a>
                    <Image 
                      src="/static/img/blog-1.jpg" 
                      width={350}
                      height={250}
                      alt="Five Solid Evidences Attending Design Is Good For Your Career Development" 
                    />
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">29/FEB/2022 - WEBSITE - 1 COMMENT</div>
                <h6>
                  <Link href="/single-blog">
                    <a>
                      Five Solid Evidences Attending Design Is Good For Your
                      Career Development.
                    </a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="/single-blog">
                  <a>
                    <Image 
                      src="/static/img/blog-2.jpg" 
                      width={350}
                      height={250}
                      alt="Ten Mind-Blowing Reasons Why Design Is Using This Technique For Exposure" 
                    />
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">29/FEB/2022 - WEBSITE - 1 COMMENT</div>
                <h6>
                  <Link href="/single-blog">
                    <a>
                      Ten Mind-Blowing Reasons Why Design Is Using This
                      Technique For Exposure.
                    </a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="/single-blog">
                  <a>
                    <Image 
                      src="/static/img/blog-3.jpg" 
                      width={350}
                      height={250}
                      alt="I Will Tell You The Truth About Design In The Next 60 Seconds" 
                    />
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">29/FEB/2022 - WEBSITE - 1 COMMENT</div>
                <h6>
                  <Link href="/single-blog">
                    <a>
                      I Will Tell You The Truth About Design In The Next 60
                      Seconds.
                    </a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="/single-blog">
                  <a>
                    <Image 
                      src="/static/img/blog-4.jpg" 
                      width={350}
                      height={250}
                      alt="What You Know About Design And What You Don't Know About Design" 
                    />
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">29/FEB/2022 - WEBSITE - 1 COMMENT</div>
                <h6>
                  <Link href="/single-blog">
                    <a>
                      What You Know About Design And What You {`Don't`} Know
                      About Design.
                    </a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-12 read-more-blog text-center">
            <Link href="/blog">
              <a className="px-btn px-btn-theme">More Blogs</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;
