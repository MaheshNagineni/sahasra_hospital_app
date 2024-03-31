"use client";
import { Carousel } from "react-bootstrap";
import style from "./Carousel.module.css";

const CarouselSection = () => {
  return (
    <Carousel id="home">
      <Carousel.Item>
        <div className={style.image}>
          <picture>
            <source
              media="(min-width: 720px)"
              srcSet="/images/potrait/female-doc.webp"
            ></source>
            <img src="/images/potrait/female-doc.webp" alt="female-doc" />
          </picture>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={style.image}>
          <picture>
            <source
              media="(min-width: 720px)"
              srcSet="/images/potrait/male-doc.webp"
            ></source>
            <img src="/images/potrait/male-doc.webp" alt="male-doc" />
          </picture>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={style.image}>
          <picture>
            <source
              media="(min-width: 720px)"
              srcSet="/images/landscape/sahasra-card.jpeg"
            ></source>
            <img
              src="/images/potrait/sahasra-contact-card.jpeg"
              alt="sahasra-card"
            />
          </picture>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={style.image}>
          <picture>
            <source
              media="(min-width: 720px)"
              srcSet="/images/potrait/rates.JPG"
            ></source>
            <img src="/images/potrait/rates.JPG" alt="rates" />
          </picture>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={style.image}>
          <picture>
            <source
              media="(min-width: 720px)"
              srcSet="/images/landscape/about1-fe.JPG"
            ></source>
            <img src="/images/landscape/about1-fe.JPG" alt="about1-fe" />
          </picture>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={style.image}>
          <picture>
            <source
              media="(min-width: 720px)"
              srcSet="/images/landscape/services1.jpg"
            ></source>
            <img src="/images/landscape/services1.jpg" alt="about1-m" />
          </picture>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={style.image}>
          <picture>
            <source
              media="(min-width: 720px)"
              srcSet="/images/landscape/about1-m.JPG"
            ></source>
            <img src="/images/landscape/about1-m.JPG" alt="about1-fe" />
          </picture>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={style.image}>
          <picture>
            <source
              media="(min-width: 720px)"
              srcSet="/images/landscape/services2.jpg"
            ></source>
            <img src="/images/landscape/services2.jpg" alt="about2-m" />
          </picture>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselSection;
