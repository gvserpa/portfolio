import { memo } from "react";
import arrowRight from "../../assets/arrow-right-circle-line (1).png";
import arrowLeft from "../../assets/arrow-left-circle-line (1).png";
import business from "../../assets/business.png";
import arrowLine from "../../assets/arrow-line.png"
import "./index.css";

const BlogCards = () => {
  return (
    <div className="blog-cards">
      <h3>Recent Articles</h3>
      <div className="blog-header-buttons">
        <p>
          <span>Stay informed with our Latest Insights.</span>
        </p>
        <div>
          <img src={arrowLeft} alt="" />
          <img src={arrowRight} alt="" />
        </div>
      </div>
      <div className="blog-card">
        <article className="card-news">
          <img src={business} alt="Office workspace with business meeting" />
          <div className="card-author">
            <p><span>Author</span></p>
            <p>20 Apr 2024</p>
          </div>
          <h4>News Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            itaque. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Quisquam, quaerat.
          </p>
          <div className="card-news-link">
          <a href="http://devgustavovieira.com">Read More <img src={arrowLine} alt='' /></a>
          </div>
        </article>
        <article className="card-news">
          <img src={business} alt="Office workspace with business meeting" />
          <div className="card-author">
            <p><span>Author</span></p>
            <p>20 Apr 2024</p>
          </div>
          <h4>News Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            itaque. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Quisquam, quaerat.
          </p>
          <div className="card-news-link">
          <a href="http://devgustavovieira.com">Read More <img src={arrowLine} alt='' /></a>
          </div>
        </article>
        <article className="card-news">
          <img src={business} alt="Office workspace with business meeting" />
          <div className="card-author">
            <p><span>Author</span></p>
            <p>20 Apr 2024</p>
          </div>
          <h4>News Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            itaque. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Quisquam, quaerat.
          </p>
          <div className="card-news-link">
          <a href="http://devgustavovieira.com">Read More <img src={arrowLine} alt='' /></a>
          </div>
        </article>
        <article className="card-news">
          <img src={business} alt="Office workspace with business meeting" />
          <div className="card-author">
            <p><span>Author</span></p>
            <p>20 Apr 2024</p>
          </div>
          <h4>News Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            itaque. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Quisquam, quaerat.
          </p>
          <div className="card-news-link">
          <a href="http://devgustavovieira.com">Read More <img src={arrowLine} alt='arrow-right icon' /></a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default memo(BlogCards);
