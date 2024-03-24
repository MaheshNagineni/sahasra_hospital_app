"use client";
import { Button, Carousel } from "react-bootstrap";
import style from "./Carousel.module.css";

const CarouselSection = () => {
  return (
    <Carousel id="home">
      <Carousel.Item>
        <div className={style.image}>
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/images/landscape/image1l.jpg"
            ></source>
            <img src="/images/potrait/image1p.jpg" alt="Image 1" />
          </picture>
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <div className={style.center}>
            <p className={style.p}>
              Ddfhsdfhs dhfsdjhf kjsdhfdskjh fkdshfkdsjf .
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className={style.image}>
          <picture>
            <source
              media="(min-width: 720px)"
              srcSet="/images/landscape/image2l.jpg"
            ></source>
            <img src="/images/potrait/image2p.jpg" alt="Image 2" />
          </picture>
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <div className={style.center}>
            <p className={style.p}>
              sfhdkjsgh dhgkdjgh kjdhgjdkf ghjdfkghdj fghdfkjg
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className={style.image}>
          <picture>
            <source
              media="(min-width: 720px)"
              srcSet="/images/landscape/image3l.jpg"
            ></source>
            <img src="/images/potrait/image3p.jpg" alt="Image 1" />
          </picture>
        </div>
        <Carousel.Caption>
          <Button onClick={() => alert("Not yet implemented")}>
            Third slide Button
          </Button>
          <div className={style.center}>
            <p className={style.p}>
              sfhdkjsgh dhgkdjgh kjdhgjdkf ghjdfkghdj fghdfkjg
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselSection;
