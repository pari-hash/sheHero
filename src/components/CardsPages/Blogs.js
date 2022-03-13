import React from "react";
import { render } from "react-dom";
import { Card, ListGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./CardPages.styles.css";

function Schemes() {
  return (
    <div id="small2">
      <h1 class="heading">List of some inspiring and insightful blogs</h1>

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
          src="https://miro.medium.com/max/1400/1*Xn15-5EnxtrwWq4LruGuQQ.png"
        />
        <Card.Body class="card-body">
          <Card.Title className="card-title">
          The Importance of Networking & 5 Networking Tips
          </Card.Title>
          <Card.Text>
          </Card.Text>
          <Button
            variant="secondary"
            style={{ backgroundColor: "#9ab981", color: "#000" }}
          >
            Link to the blog
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
          src="https://www.vulvani.com/wp-content/uploads/2020/02/Screenshot-2020-02-17-15.18.11.png"
        />
        <Card.Body class="card-body">
          <Card.Title className="card-title">Period Pride: Fighting Menstruation Taboos</Card.Title>
          <Card.Text>
          
          </Card.Text>
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
          src="https://miro.medium.com/max/1400/0*xVkViRmCNtnvPz55"
        />
        <Card.Body class="card-body">
          <Card.Title className="card-title">
          All Women Deserve Respect

          </Card.Title>
          <Card.Text>
          </Card.Text>
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
