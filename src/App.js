import React, { useState } from "react";
import Home from "./Components/Home";
import Course from "./Components/Course";
import Allcourses from "./Components/Allcourses";
import Addcourse from "./Components/Addcourse";
import { Container, Row, Col } from "reactstrap";
import LeftMenu from "./Components/LeftMenu";
import Header from "./Components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      {/* example of props below its just like funnction parameter but  used to padd val in html */}
      {/* <Header />
    <Header name="lovelesh"/> */}
      {/* <Home></Home>
      <Course
        lpprop={{
          title: "SampleProp Title",
          description: "Sample Description from prop",
        }}
      ></Course>
      <Course
        lpprop={{
          title: "SampleProp Title2",
          description: "Sample Description2 from prop",
        }}
      ></Course>
      <Allcourses></Allcourses>
      <Addcourse></Addcourse> */}
      <Router>
        <Header></Header>
        <Container>
          <Row>
            <Col  className="col-4 ">
              <LeftMenu></LeftMenu>
            </Col>
            <Col className="col-8 ">
              <Route path="/" component={Home} exact></Route>
              <Route path="/allcourses" component={Allcourses} exact></Route>
              <Route path="/addcourse" component={Addcourse} exact></Route>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
