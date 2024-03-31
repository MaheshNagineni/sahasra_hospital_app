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
              srcSet="/images/potrait/rates1.JPG"
            ></source>
            <img src="/images/potrait/rates1.JPG" alt="rates1" />
          </picture>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={style.image}>
          <picture>
            <source
              media="(min-width: 720px)"
              srcSet="/images/potrait/rate2.JPG"
            ></source>
            <img src="/images/potrait/rate2.JPG" alt="rates2" />
          </picture>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={style.image}>
          <picture>
            <source
              media="(min-width: 720px)"
              srcSet="/images/landscape/about1-fe.jpeg"
            ></source>
            <img src="/images/landscape/about1-fe.jpeg" alt="about1-fe" />
          </picture>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={style.image}>
          <picture>
            <source
              media="(min-width: 720px)"
              srcSet="/images/landscape/about1-m.jpeg"
            ></source>
            <img src="/images/landscape/about1-m.jpeg" alt="about1-m" />
          </picture>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={style.image}>
          <picture>
            <source
              media="(min-width: 720px)"
              srcSet="/images/landscape/about2-fe.jpeg"
            ></source>
            <img src="/images/landscape/about2-fe.jpeg" alt="about1-fe" />
          </picture>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={style.image}>
          <picture>
            <source
              media="(min-width: 720px)"
              srcSet="/images/landscape/about2-m.jpeg"
            ></source>
            <img src="/images/landscape/about2-m.jpeg" alt="about2-m" />
          </picture>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselSection;
