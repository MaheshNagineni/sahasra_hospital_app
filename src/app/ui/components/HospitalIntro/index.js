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
            <Card.Title>Sahasra Heart And Mind Care</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Multi-speciality Clinic Nellore Z.P, Nellore 16/782, Nagulamitta
              Road, Mogathota, Landmark: Near Vijaymahal Gate, Nellore
            </Card.Subtitle>
            <Card.Text>
              Sahasra Heart And Mind Care is an Interventional Cardiology Clinic
              in Nellore Z.P, Nellore. The clinic is visited by addiction
              psychiatrist like Dr. Sujitha Gurram.
              <br />
              <b>Timinings:</b> <br />
              Mon-Fri&nbsp;: 10:00 AM - 8:00 PM,
              <br />
              Sat &nbsp; &nbsp; &nbsp; &nbsp; : 09:00 AM - 8:00 PM,
              <br />
              Sun &nbsp; &nbsp; &nbsp; &nbsp;: 11:00 AM - 9:00 PM.
              <br /> Some of the services provided by the Clinic are: Online
              Counselling, 2D Echo and Color Doppler, Male Infertility
              Treatment, Premarital Counseling, and ECG etc. Click on map to
              find directions to reach Sahasra Heart And Mind Care.
            </Card.Text>
            <Card.Link href="tel:123-456-7890">Contact Us</Card.Link>
            <Card.Link href="#">On Google maps</Card.Link>
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
              height="480"
              width="500"
              src="https://www.youtube.com/embed/aPy5qZJoDas?autoplay=1&mute=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
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
            <Card style={{ width: "22rem" }} key={index}>
              <Card.Img
                variant="top"
                src={doctor.image}
                width="340px"
                height="240px"
              />
              <Card.Body>
                <Card.Title>{doctor.name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>{doctor.specialization}</ListGroup.Item>
                <ListGroup.Item>{doctor.qualifications}</ListGroup.Item>
                <ListGroup.Item>{doctor.experience}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
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
    image: "/images/male_doctor.jpeg",
  },
  {
    name: "Dr. Sujitha. Gurram",
    qualifications: "MBBS, MD (Psychiatry)",
    specialization: "Neuro Psychiatrist",
    experience: "Ex. Resident in Narayana Medical College",
    regNo: "Reg.No. 79562",
    image: "/images/female_doctor.jpeg",
  },
];

export default HostpitalInto;
