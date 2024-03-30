"use client";

import React from "react";
import styles from "./Footer.module.css";
import { Card } from "react-bootstrap";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      {/* about */}
      <Card className={styles.card} id="about-us">
        <Card.Body>
          <Card.Title className="heading">About Us</Card.Title>
          <Card.Text className="text">
            Sahasra Heart And Mind Care is a renowned Interventional Cardiology
            Clinic located in Nellore Z.P, Nellore. Our clinic is committed to
            providing comprehensive and compassionate care to patients suffering
            from heart and mental health issues. Led by Dr. Sujitha Gurram, an
            experienced addiction psychiatrist, our team strives to offer
            personalized treatment plans tailored to each patient's needs. With
            a focus on excellence and innovation, we aim to deliver top-quality
            healthcare services in a supportive and caring environment.
          </Card.Text>
        </Card.Body>
      </Card>

      {/* contact-us */}
      <Card className={styles.card} id="contact-us">
        <Card.Body>
          <Card.Title className="heading">Contact Us</Card.Title>
          <Card.Text>
            <b className="subheading">Address:</b> <br />
            <p className="text">
              Sahasra Heart And Mind Care is an Interventional Cardiology Clinic
              in Nellore Z.P, Nellore. The clinic is visited by addiction
              psychiatrist like Dr. Sujitha Gurram.
            </p>
            <b className="subheading">Phone:</b>{" "}
            <Link className={styles.contactLink} href="tel:919505017111">
              9505017111
            </Link>
            ,
            <Link className={styles.contactLink} href="tel:919014046924">
              9014046924
            </Link>
            <br />
            <b className="subheading">Email:</b>{" "}
            <Link
              className={styles.contactLink}
              href="mailto:Sahasraheartandmindcare@gmail.com"
            >
              sahasraheartandmindcare@gmail.com
            </Link>
            <br />
            <b className="subheading">Timinings:</b>
            <p className="text">
              Mon-Fri&nbsp;: 10:00 AM - 8:00 PM,
              <br />
              Sat &nbsp; &nbsp; &nbsp; &nbsp; : 09:00 AM - 8:00 PM,
              <br />
              Sun &nbsp; &nbsp; &nbsp; &nbsp;: 11:00 AM - 9:00 PM.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Footer;
