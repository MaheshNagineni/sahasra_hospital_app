"use client";

import React from "react";
import styles from "./Footer.module.css";
import { Card } from "react-bootstrap";

const Footer = () => {
  return (
    <div className={styles.footer}>
      {/* about */}
      <Card className={styles.card} id="about-us">
        <Card.Body>
          <Card.Title>About Us</Card.Title>
          <Card.Text>
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
          <Card.Title>Contact Us</Card.Title>
          <Card.Text>
            <b>Address:</b> <br />
            Sahasra Heart And Mind Care is an Interventional Cardiology Clinic
            in Nellore Z.P, Nellore. The clinic is visited by addiction
            psychiatrist like Dr. Sujitha Gurram.
            <br />
            <b>Phone:</b> 9876543210<br />
            <b>Timinings:</b> <br />
            Mon-Fri&nbsp;: 10:00 AM - 8:00 PM,
            <br />
            Sat &nbsp; &nbsp; &nbsp; &nbsp; : 09:00 AM - 8:00 PM,
            <br />
            Sun &nbsp; &nbsp; &nbsp; &nbsp;: 11:00 AM - 9:00 PM.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Footer;
