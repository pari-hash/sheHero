import React from "react";
import { render } from "react-dom";
import { Card, ListGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import "./CardPages.styles.css";

const CardEle=() =>{
  return (
    <div id="small2">
      <h1 className="heading">List of all Government Schemes for Women</h1>
      <Card
        className="card-list"
        style={{
          width: "80%",
          flexDirection: "row",
          alignContent: "space-between",
        }}
      >
        <Card.Img
          className="card-img-side"
          variant="top"
          src="https://www.aitm.edu.in/wp-content/uploads/2020/08/AICTE.png"
        />
        <Card.Body className="card-body">
          <Card.Title className="card-title" style={{marginBottom:'0px'}}>
            Pragati Scholarship: AICTE Scholarship Scheme to Girl Child
          </Card.Title>
          <Card.Text style={{marginTop:'0px'}}>
            Scholarship/Contingency is awarded to meritorious girls taking
            admission in AICTE approved Technical institution at Degree/
            Diploma. Total 10000 scholarship are given @ Rs 50000 as incidentals
            each year.
          </Card.Text>
          <Button
            variant="secondary"
            style={{ backgroundColor: "#9ab981" }}
          >
            Link to the website
          </Button>
        </Card.Body>
      </Card>

      <br />
      <br />

      <Card
        className="card-list"
        style={{
          width: "80%",
          flexDirection: "row",
          alignContent: "space-between",
        }}
      >
        <Card.Img
          className="card-img-side"
          variant="top"
          src="https://www.aitm.edu.in/wp-content/uploads/2020/08/AICTE.png"
        />
        <Card.Body className="card-body">
          <Card.Title className="card-title">AICTE Lilavati Award</Card.Title>
          <Card.Text>
            AICTE intends to seek applications for AICTEs LILAVATI AWARD-2021-22
            based on the theme “Women Empowerment” from the eligible teams of
            AICTE approved institutions, who have undertaken remarkable
            intervention for the cause and made an impact that showcases their
            work under eight different sub-themes.
          </Card.Text>
          <Button
            variant="secondary"
            style={{ backgroundColor: "#9ab981" }}
          >
            Link to the website
          </Button>
        </Card.Body>
      </Card>

      <br />
      <br />

      <Card
        className="card-list"
        style={{
          width: "80%",
          flexDirection: "row",
          alignContent: "space-between",
        }}
      >
        <Card.Img
          className="card-img-side"
          variant="top"
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg"
        />
        <Card.Body className="card-body">
          <Card.Title className="card-title">
            Begum Hazrat Mahal National Scholarship
          </Card.Title>
          <Card.Text>
            The Scheme of “Begum Hazrat Mahal National Scholarship” for
            Meritorious Girl Students belonging to the Minority Communities was
            earlier known as “Maulana Azad National Scholarship for Meritorious
            Girls belonging Minorities” and the same was launched by the then
            Prime Minister of India (late) Atal Bihari Vajpayee at National
            Conference of Educational & Economic Development of Minorities held
            on 03.05.2003 at Vigyan Bhawan, New Delhi.
          </Card.Text>
          <Button
            variant="secondary"
            style={{ backgroundColor: "#9ab981"}}
          >
            Link to the website
          </Button>
        </Card.Body>
      </Card>
      <br />
      <br />
    </div>
  );
}

export default CardEle;
