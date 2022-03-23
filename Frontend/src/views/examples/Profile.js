import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import ProfileCard from 'views/IndexSections/ProfileCard';
import ProfileBody from 'views/IndexSections/ProfileBody';
import ProfileTag from 'views/IndexSections/ProfileTag';

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
        <div className="position-relative">
            <section className="section section-lg section-shaped pb-0">
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
            </section>
          </div>

          <ProfileCard />
          <ProfileBody />
          <ProfileTag />
        </main>
        {/* <SimpleFooter /> */}
      </>
    );
  }
}

export default Profile;
