"use client";
import { useState } from "react";
import styles from "./Gallery.module.css";
import Image from "next/image";

const tabsList = [
  { tabId: "CARDIOLOGY", displayText: "Cardiology" },
  { tabId: "PSYCHIATRY", displayText: "Psychiatry" },
  { tabId: "HOSPITAL", displayText: "Hospital" },
];

const imagesList = [
  {
    id: "c1",
    order: 1,
    imageUrl: "/images/gallery/cardiology/1.jpeg",
    category: "CARDIOLOGY",
  },
  {
    id: "c2",
    order: 2,
    imageUrl: "/images/gallery/cardiology/2.jpeg",
    category: "CARDIOLOGY",
  },
  {
    id: "c3",
    order: 3,
    imageUrl: "/images/gallery/cardiology/3.jpeg",
    category: "CARDIOLOGY",
  },
  {
    id: "c4",
    order: 4,
    imageUrl: "/images/gallery/cardiology/4.jpeg",
    category: "CARDIOLOGY",
  },
  {
    id: "c5",
    order: 5,
    imageUrl: "/images/gallery/cardiology/5.jpeg",
    category: "CARDIOLOGY",
  },
  {
    id: "c6",
    order: 6,
    imageUrl: "/images/gallery/cardiology/6.jpeg",
    category: "CARDIOLOGY",
  },
  {
    id: "c7",
    order: 7,
    imageUrl: "/images/gallery/cardiology/7.jpeg",
    category: "CARDIOLOGY",
  },
  {
    id: "c8",
    order: 8,
    imageUrl: "/images/gallery/cardiology/8.jpeg",
    category: "CARDIOLOGY",
  },
  {
    id: "c9",
    order: 9,
    imageUrl: "/images/gallery/cardiology/9.jpeg",
    category: "CARDIOLOGY",
  },
  {
    id: "c10",
    order: 10,
    imageUrl: "/images/gallery/cardiology/10.jpeg",
    category: "CARDIOLOGY",
  },
  {
    id: "c11",
    order: 11,
    imageUrl: "/images/gallery/cardiology/11.jpeg",
    category: "CARDIOLOGY",
  },
  {
    id: "c12",
    order: 12,
    imageUrl: "/images/gallery/cardiology/12.jpeg",
    category: "CARDIOLOGY",
  },
  {
    id: "h1",
    order: 1,
    imageUrl: "/images/gallery/hospital/1.jpg",
    category: "HOSPITAL",
  },
  {
    id: "h2",
    order: 2,
    imageUrl: "/images/gallery/hospital/2.jpeg",
    category: "HOSPITAL",
  },
  {
    id: "h3",
    order: 3,
    imageUrl: "/images/gallery/hospital/3.jpeg",
    category: "HOSPITAL",
  },
  {
    id: "h4",
    order: 4,
    imageUrl: "/images/gallery/hospital/4.jpeg",
    category: "HOSPITAL",
  },
  {
    id: "h5",
    order: 5,
    imageUrl: "/images/gallery/hospital/5.jpeg",
    category: "HOSPITAL",
  },
  {
    id: "h6",
    order: 6,
    imageUrl: "/images/gallery/hospital/6.jpeg",
    category: "HOSPITAL",
  },
  {
    id: "h7",
    order: 7,
    imageUrl: "/images/gallery/hospital/7.jpeg",
    category: "HOSPITAL",
  },
  {
    id: "h8",
    order: 8,
    imageUrl: "/images/gallery/hospital/8.jpeg",
    category: "HOSPITAL",
  },
  {
    id: "h9",
    order: 9,
    imageUrl: "/images/gallery/hospital/9.jpeg",
    category: "HOSPITAL",
  },
  {
    id: "h10",
    order: 10,
    imageUrl: "/images/gallery/hospital/10.jpeg",
    category: "HOSPITAL",
  },
  {
    id: "h11",
    order: 11,
    imageUrl: "/images/gallery/hospital/11.jpeg",
    category: "HOSPITAL",
  },
  {
    id: "h12",
    order: 12,
    imageUrl: "/images/gallery/hospital/12.jpeg",
    category: "HOSPITAL",
  },
  {
    id: "p1",
    order: 1,
    imageUrl: "/images/gallery/psychiatry/1.jpeg",
    category: "PSYCHIATRY",
  },
  {
    id: "p2",
    order: 2,
    imageUrl: "/images/gallery/psychiatry/2.jpeg",
    category: "PSYCHIATRY",
  },
  {
    id: "p3",
    order: 3,
    imageUrl: "/images/gallery/psychiatry/3.jpeg",
    category: "PSYCHIATRY",
  },
  {
    id: "p4",
    order: 4,
    imageUrl: "/images/gallery/psychiatry/4.jpeg",
    category: "PSYCHIATRY",
  },
  {
    id: "p5",
    order: 5,
    imageUrl: "/images/gallery/psychiatry/5.jpeg",
    category: "PSYCHIATRY",
  },
  {
    id: "p6",
    order: 6,
    imageUrl: "/images/gallery/psychiatry/6.jpeg",
    category: "PSYCHIATRY",
  },
  {
    id: "p7",
    order: 7,
    imageUrl: "/images/gallery/psychiatry/7.jpg",
    category: "PSYCHIATRY",
  },
  {
    id: "p8",
    order: 8,
    imageUrl: "/images/gallery/psychiatry/8.jpg",
    category: "PSYCHIATRY",
  },
  {
    id: "p9",
    order: 9,
    imageUrl: "/images/gallery/psychiatry/9.jpeg",
    category: "PSYCHIATRY",
  },
  {
    id: "p10",
    order: 10,
    imageUrl: "/images/gallery/psychiatry/10.jpeg",
    category: "PSYCHIATRY",
  },
  {
    id: "p11",
    order: 11,
    imageUrl: "/images/gallery/psychiatry/11.jpeg",
    category: "PSYCHIATRY",
  },
  {
    id: "p12",
    order: 12,
    imageUrl: "/images/gallery/psychiatry/12.jpeg",
    category: "PSYCHIATRY",
  },
  {
    id: "p13",
    order: 13,
    imageUrl: "/images/gallery/psychiatry/13.jpeg",
    category: "PSYCHIATRY",
  },
  {
    id: "p14",
    order: 14,
    imageUrl: "/images/gallery/psychiatry/14.jpeg",
    category: "PSYCHIATRY",
  },
];

const Gallery = () => {
  const [category, setCategory] = useState("CARDIOLOGY");

  const clickTab = (tabId) => {
    setCategory(tabId);
  };

  const allImagesList = imagesList.filter(
    (eachValue) => eachValue.category === category
  );

  return (
    <div className={styles["main-container"]} id="gallery">
      <div>
        <h1 className={styles.heading}>Gallery</h1>
        <div>
          <ul className={styles["tab-elements"]}>
            {tabsList.map((eachValue) => (
              <li key={eachValue.tabId}>
                <button
                  type="button"
                  className={`${styles["tab-button"]} ${
                    category === eachValue.tabId ? styles["highlight-text"] : ""
                  }`}
                  onClick={() => clickTab(eachValue.tabId)}
                >
                  {eachValue.displayText}
                </button>
              </li>
            ))}
          </ul>
          <ul className={styles["showing-images"]}>
            {allImagesList.sort((a,b) => a.order > b.order).map((eachObject) => (
              <li key={eachObject.id} className={styles["image-space"]}>
                <Image
                  src={eachObject.imageUrl}
                  className={styles["showing-image"]}
                  alt="image"
                  height="280"
                  width="280"
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
