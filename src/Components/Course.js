import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";



const Course = ({lpprop}) => {
  return (
    <div>
      <Card className="text-center ">
        <CardBody>
          <CardTitle tag="h5" className="font-weight-bold">{lpprop.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Card subtitle
          </CardSubtitle>
          <CardText>
           {lpprop.description}
          </CardText>
          <div class='text-center'> <Button color="danger"> Delete</Button>
          <Button className="btn btn-warning ml-3"> Update</Button></div>
         
        </CardBody>
      </Card>
    </div>
  );
};

export default Course;
