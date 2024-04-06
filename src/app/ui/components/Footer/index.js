"use client";

import React from "react";
import styles from "./Footer.module.css";
import { Card } from "react-bootstrap";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.sec1}>
        {/* about */}
        <Card className={styles.card} id="about-us">
          <Card.Body>
            <Card.Title className="heading">About Us</Card.Title>
            <Card.Text className="text">
              Sahasra Heart And Mind Care is a renowned Interventional
              Cardiology and Psychiatry Clinic located in Nellore Z.P, Nellore.
              Our clinic is committed to providing comprehensive and
              compassionate care to patients suffering from Heart and Mental
              Health issues. Led by Dr. Nagabhushan D and Dr. Sujitha Gurram, an
              experienced Cardiologist and Psychiatrist, our team strives to
              offer personalized treatment plans tailored to each patient's
              needs. With a focus on excellence and innovation, we aim to
              deliver top-quality healthcare services in a supportive and caring
              environment.
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
                Besides Siddhartha Hospital, Near Vijaymahal Gate, Pogathota,
                Nellore - 524001, Andhra Pradesh
              </p>
              <b className="subheading">Phone:</b>{" "}
              <Link className={styles.contactLink} href="tel:919505017111">
                9505017111
              </Link>
              ,&nbsp;
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
      <hr
        style={{
          color: "var(--color5)",
          border: "0",
          borderTop: "5px solid",
          borderRadius: "5px",
        }}
      />
      <div id="follow-us" className={styles.sec2}>
        <h3>Follow Us</h3>
        <div className={styles.socialLinks}>
          <Link
            href="https://www.facebook.com/profile.php?id=61557892524634&mibextid=LQQJ4d"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} size="2xl" />
          </Link>
          <Link
            href="https://x.com/SahasraCare?t=Q9G3QT0oO5_RmbcXEJ6H4A&s=09"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} size="2xl" />
          </Link>
          <Link
            href="https://www.instagram.com/sahasra_heartandmindcare?igsh=d2lvamtxbWxsNzh3"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} size="2xl" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sahasra-heart-and-mind-care-hospital-b59598300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=9014046924"
            target="_blank"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2xl" />
          </Link>
          <Link
            href="https://www.youtube.com/@SahasraHeartandMindCare/videos"
            target="_blank"
          >
            <FontAwesomeIcon icon={faYoutube} size="2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
