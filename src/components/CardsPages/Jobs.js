import React from "react";
import { render } from "react-dom";
import { Card, ListGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./CardPages.styles.css";

const Jobs=() =>{
  return (
    <div id="small2">
      <h1 class="heading">List of all Jobs and Internships for Women</h1>

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
          <div className="card-title" style={{ marginBottom: "0px" }}>
            <h2>Google STEP Intern</h2>
          </div>
          <div style={{ marginTop: "10px", fontSize: "20px" }}>
            The internship program has a focus of providing development
            opportunities to students from groups historically underrepresented
            in tech, through technical training and professional development.
            <br />
            Eligibility: Second-year Bachelor's student majoring in Computer
            Science or a related field.
          </div>
          <br/>
          <Button
            variant="secondary"
            style={{ backgroundColor: "#9ab981", height: '2.3rem', width: '14rem'}}
          >
            Link to the website
            <br/>
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
          src="https://seeklogo.com/images/A/atlassian-logo-DF2FCF6E4D-seeklogo.com.png"
        />
        <Card.Body class="card-body">
          <div className="card-title"><h2>Hack@Home by Atlassian</h2></div>
          <div style={{marginTop:'10px', fontSize: '20px'}}>
            A 4-day virtual hackathon all about exploring the world of computer
            science from the comfort of your home and donate to various COVID-19
            and social justice nonprofits.
            <br />
            Eligibility: High school and undergraduates students
          </div>
          <br/>
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
          src="https://mpng.subpng.com/20180806/swf/kisspng-logo-microsoft-corporation-brand-windows-server-20-5b6885e2de9281.4204193815335766749117.jpg"
        />
        <Card.Body class="card-body">
          <div className="card-title">
            <h2>Microsoft Codess</h2></div>
            <div style={{marginTop:'10px', fontSize: '20px'}}>  
            Codess aims to inspire female coders and help them achieve their
            professional goals. Through networking events, mentoring and sharing
            advice and experiences, we hope to offer a forum to women unlike any
            other.
          </div>
          <br/>
          <Button
            variant="secondary"
            style={{ backgroundColor: "#9ab981",height: '2.3rem', width: '14rem' }}
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

export default Jobs;
