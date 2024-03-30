"use client";

import React from "react";
import { Card, ListGroup, Ratio } from "react-bootstrap";
import styles from "./HospitalIntro.module.css";

const HostpitalInto = () => {
  return (
    <div id="hospital">
      {/* intro */}
      <div className={styles.introSection}>
        <Card className={styles.hospitalCard}>
          <Card.Body>
            <Card.Title className="heading">
              Sahasra Heart And Mind Care
            </Card.Title>
            <Card.Subtitle className="mb-2 text text-muted">
              Multi-speciality Clinic Nellore Z.P, Nellore 16/782, Nagulamitta
              Road, Mogathota, Landmark: Near Vijaymahal Gate, Nellore
            </Card.Subtitle>
            <Card.Text>
              <p className="text">
                Some of the services provided by the Clinic are: Online
                Counselling, 2D Echo and Color Doppler, Male Infertility
                Treatment, Premarital Counseling, and ECG etc. Click on map to
                find directions to reach Sahasra Heart And Mind Care.
              </p>
              <div className={styles.googleMap}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d256.9245758750168!2d79.9867242!3d14.4519147!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf3a4fda42bef%3A0x70e270124c55cf0a!2sSahasra%20heart%20and%20mind%20care!5e1!3m2!1sen!2sin!4v1711789359816!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: "0" }}
                  allowfullscreen="1"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Card.Text>
            {/* <Card.Link href="tel:123-456-7890">Contact Us</Card.Link>
            <Card.Link href="#">On Google maps</Card.Link> */}
          </Card.Body>
        </Card>

        {/* youtube video */}
        <div
          style={{
            width: 660,
            height: "auto",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        >
          <Ratio aspectRatio="16x9">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ctGLFRIULH8?si=wphI0wKlsOubCcr7?autoplay=1&mute=0"
              title="Sahasra Hospitals"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </Ratio>
        </div>
      </div>
      <hr />
      {/* doctors */}
      <h3>Our Doctors</h3>
      <div className={styles.doctors}>
        {doctors.map((doctor, index) => {
          return (
            <Card className={styles.doctorCard} key={index}>
              <Card.Img
                variant="top"
                src={doctor.image}
                width="340px"
                height="440px"
              />
              <Card.Body>
                <Card.Title>{doctor.name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>{doctor.specialization}</ListGroup.Item>
                <ListGroup.Item>{doctor.qualifications}</ListGroup.Item>
                <ListGroup.Item>{doctor.experience}</ListGroup.Item>
              </ListGroup>
              {/* <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body> */}
            </Card>
          );
        })}
      </div>
    </div>
  );
};

const doctors = [
  {
    name: "Dr. Nagabhushan. D",
    qualifications: "MD (General Medicine), DM (Cardiology)",
    specialization: "Interventional Cardiologist",
    experience: "Consultant in Apollo Hospital",
    regNo: "Reg.No. 67034",
    image: "/images/IMG_1358.jpg",
  },
  {
    name: "Dr. Sujitha. Gurram",
    qualifications: "MBBS, MD (Psychiatry)",
    specialization: "Neuro Psychiatrist",
    experience: "Ex. Resident in Narayana Medical College",
    regNo: "Reg.No. 79562",
    image: "/images/IMG_1399.jpg",
  },
];

export default HostpitalInto;
