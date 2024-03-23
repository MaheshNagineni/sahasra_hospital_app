"use client";
import { Button, Carousel } from "react-bootstrap";
import style from "./Carousel.module.css";

const CarouselSection = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <div className={style.image}>
          <img
            srcSet="/image1.jpeg 480w, /image1.jpeg 800w"
            sizes="(max-width: 600px) 480px,
         800px"
            src="elva-fairy-800w.jpg"
            alt="Elva dressed as a fairy"
          />
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
          <img
            srcSet="/image2.jpg 480w, /image2.jpg 800w"
            sizes="(max-width: 600px) 480px,
         800px"
            src="elva-fairy-800w.jpg"
            alt="Elva dressed as a fairy"
          />
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
          <img
            srcSet="/image3.jpg 480w, /image3.jpg 800w"
            sizes="(max-width: 600px) 480px, 800px"
            src="elva-fairy-800w.jpg"
            alt="Elva dressed as a fairy"
          />
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
