import React from "react";
import { render } from "react-dom";
import { Card, ListGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./CardPages.styles.css";

const Blogs = () => {
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
          <div className="card-title">
            <h2> The Importance of Networking & 5 Networking Tips </h2>
          </div>
          <div style={{marginTop:'10px', fontSize: '20px'}}>
          There’s no denying the power a strong professional network can have over your career success. Networking will help you develop and improve your skill set and stay on top of the latest trends in your industry and job market.
          </div>
          <br />
          <Button
            variant="secondary"
            style={{
              backgroundColor: "#9ab981",
              height: "2.3rem",
              width: "14rem",
            }}
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
          src="https://www.vulvani.com/wp-content/uploads/2020/02/Screenshot-2020-02-17-15.18.11.png"
        />
        <Card.Body class="card-body">
          <div className="card-title">
            <h2>Period Pride: Fighting Menstruation Taboos</h2>
          </div>
          <div style={{ marginTop: "10px", fontSize: "20px" }}>
            “Menstruation is a natural human bodily process. It is as natural as
            breathing, sleeping or digesting food.”
          </div>
          <br />
          <Button
            variant="secondary"
            style={{
              backgroundColor: "#9ab981",
              height: "2.3rem",
              width: "14rem",
            }}
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
          src="https://miro.medium.com/max/1400/0*xVkViRmCNtnvPz55"
        />
        <Card.Body class="card-body">
          <div className="card-title">
            <h2> All Women Deserve Respect </h2>
          </div>
          <div style={{ marginTop: "10px", fontSize: "20px" }}>
            We live in a modern world today but our thoughts are still stuck to
            the age old stereotypes. There’s a serious need for us to change the
            way we think. All women deserve respect in all cases. And there is
            no scope of ifs and buts in this statement.
          </div>
          <br />
          <Button
            variant="secondary"
            style={{
              backgroundColor: "#9ab981",
              height: "2.3rem",
              width: "14rem",
            }}
          >
            Link to the blog
            <br />
          </Button>
        </Card.Body>
      </Card>
      <br />
      <br />
    </div>
  );
};

export default Blogs;
