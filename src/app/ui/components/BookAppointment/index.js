import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";
import styles from "./BookAppointement.module.css";

const BookAppointment = () => {
  return (
    <div className={styles.bookAppointment} id="appointment">
      <hr />
      <h3>Book Appointment</h3>
      <div className={styles.services}>
        <Link href="tel:919505017111">
          <Button>
            <h3>For Cardiology</h3> Call: 9505017111
          </Button>
        </Link>
        <Link href="tel:919014046924">
          <Button>
            <h3>For Psychiatry</h3> Call: 9014046924
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BookAppointment;
