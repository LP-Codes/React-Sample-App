import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';


const LeftMenu = () => {
    return (
        <div  >
            <ListGroup className="text-center ">

                <Link className="list-group-item list-group-item-action bg-success text-light" active tag="a" to="/" action>Home</Link>
                <Link className="list-group-item list-group-item-action  bg-success text-light" tag="a" to="/allcourses" action>AllCourses</Link>
                <Link className="list-group-item list-group-item-action  bg-success text-light" tag="a" to="/addcourse" action>Add Course</Link>

            </ListGroup>
        </div>
    );
}

export default LeftMenu;
