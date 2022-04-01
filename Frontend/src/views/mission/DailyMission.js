import React from "react";
// nodejs library that concatenates classes

// reactstrap components
import {
  Container,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";

// index page sections
import MissionCard from 'views/IndexSections/MissionCard.js';
import MissionComplete from 'views/IndexSections/MissionComplete.js';

class DailyMission extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="dailymission-page" ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                    <center>
                      <p className="h3 text-white"><i class="ni ni-single-copy-04 mr-2"></i>데일리 미션</p>
                    </center>
                </div>
              </Container>
            </section>
          </div>

          <MissionCard />
          <MissionComplete />

        </main>
      </>
    );
  }
}

export default DailyMission;
