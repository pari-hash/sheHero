import React from "react";
import { render } from "react-dom";
import { Card, ListGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./CardPages.styles.css";

const Schemes=()=> {
  return (
    <div id="small2">
      <h1 class="heading">List of all NGOs and Helpline Numbers</h1>

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
          src="https://media.globalcitizen.org/thumbnails/a9/d5/a9d54cf0-8450-4c71-b6fc-f810eff8aa91/screen_shot_2017-12-08_at_160104.png__652.0x650.0_crop_subject_location-326%2C324_subsampling-2_upscale.png"
        />
        <Card.Body class="card-body">
          <div className="card-title">
            <h2>Guria India</h2>
            </div>
            <div style={{marginTop:'10px', fontSize: '20px'}}>
            Guria India’s approach is to focus on rescue and legal intervention.
            Due to the stigma surrounding sexual assault, it helps the victim
            with all the necessities to fight their case starting from filing an
            FIR to helping them collect evidence. Guria lawyers help prepare the
            victims for the court. Not only does the NGO help women get legal
            justice, but they also provide counseling and provide victims with
            financial support. Your contribution will support an abuse survivor
            to get access to legal aid and counseling.
          </div>
          <br/>
          <Button
            variant="secondary"
            style={{ backgroundColor: "#9ab981", color: "#000" }}
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
          src="https://crowdfunding.actionaidindia.org/wp-content/uploads/2019/02/SWAV-Mobile-Banner-1.jpg"
        />
        <Card.Body class="card-body">
          <div className="card-title">
            <h2>ActionAid India
              </h2>
            </div>
          <div style={{marginTop:'10px', fontSize: '20px'}}>
            ActionAid India is part of a global federation and a full affiliate
            of ActionAid International. Gauravi is the 24×7 one-stop crisis
            center of ActionAid. The center caters to domestic and sexual
            violence victims of any age including minor boys. The victims are
            provided with counseling, intervention, legal help, medical help,
            shelter home as well as social rehabilitation. Victims are not
            forced to take legal action and are provided with all the options.
            They provide counseling and also run a shelter home for women.
            Donating to this program will help women overcome their trauma
            through counseling.
          </div>
          <br/>
          <Button
         
            variant="secondary"
            style={{ backgroundColor: "#9ab981", color: "#000" }}
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
          src="https://pbs.twimg.com/media/DxaHqhyW0AAOMnA.jpg"
        />
        <Card.Body class="card-body">
          <div className="card-title">
            <h2>Chhanv Foundation</h2>
            </div>
          <div style={{marginTop:'10px', fontSize: '20px'}}>
            Chhanv Foundation is a Non-Profit Organisation in India working for
            the rehabilitation of acid attack survivors. Chhanv Foundation
            raised the unheard voices of acid attack survivors through its
            campaign Stop Acid Attacks in 2013. They redefined the definition of
            rehabilitation by advocacy for the acid attacks followed by
            providing Medical Assistance, Legal Assistance, Education help then
            at last but not least by providing the Employment at Cafe Sheroes
            Hangout located in Agra & Lucknow respectively.
          </div>
          <br/>
          <Button
            variant="secondary"
            style={{ backgroundColor: "#9ab981", color: "#000" }}
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

export default Schemes;
