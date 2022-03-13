import React from "react";
import { render } from "react-dom";
import { Card, ListGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./CardPages.styles.css";

function Opportunities() {
  return (
    <div id="small2">
      <h1 class="heading">List of all Opportunities for Women</h1>

      <Card
        className="card-list"
        style={{
          width: "80%",
          flexDirection: "row",
          alignContent: "space-between",
        }}
      >
        <Card.Img
          class="card-img-side"
          variant="top"
          src="https://seeklogo.com/images/G/google-logo-28FA7991AF-seeklogo.com.png"
        />
        <Card.Body class="card-body">
          <div className="card-title" style={{marginBottom:'0px'}}><h2>Google CodeJam IO</h2></div>
          <div style={{marginTop:'10px', fontSize: '20px'}}>
            A coding contest by Google exclusively for women. The top 150 on the
            scoreboard will receive a ticket and a stipend to participate in
            virtual Google I/O.
            <br />
            Eligibility: Women (students and professionals)
          </div>
          <Button
            variant="secondary"
            style={{ backgroundColor: "#9ab981", height: '2.3rem', width: '14rem'}}
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
          class="card-img-side"
          variant="top"
          src="https://iconape.com/wp-content/png_logo_vector/outreachy-bot-avatar.png"
        />
        <Card.Body class="card-body">
        <div className="card-title"><h2>Outreachy</h2></div>
        <div style={{marginTop:'10px', fontSize: '20px'}}>
            Outreachy provides internships in open source and open science.
            Outreachy provides internships to people subject to systemic bias
            and impacted by underrepresentation in the technical industry where
            they are living.
            <br />
            Eligibility: Open to all.
          </div>
          <Button
            variant="secondary"
            style={{ backgroundColor: "#9ab981", height: '2.3rem', width: '14rem' }}
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
          class="card-img-side"
          variant="top"
          src="https://mmendy.com/RGSoC.png"
        />
        <Card.Body class="card-body">
        <div className="card-title">
            Rails Girls Summer of Code
          </div>
          <div style={{marginTop:'10px', fontSize: '20px'}}>
            Rails Girls Summer of Code is a global fellowship program for women
            and non-binary coders. Students receive a three-month scholarship to
            work on existing Open Source projects and expand their skill set.
            <br/>
            Eligibility: Women and non-binary
          </div>
          <Button
            variant="secondary"
            style={{ backgroundColor: "#9ab981",  height: '2.3rem', width: '14rem' }}
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

export default Opportunities;
