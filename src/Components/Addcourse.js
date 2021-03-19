import React, { Fragment } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';


const Addcourse = () => {
    return (
        <Fragment>
            <h4 className="mb-3 text-center">Add details</h4>
            <Form >

                <FormGroup >
                    <label for="lpinput">Course id</label>
                    <input class="form-control" type="text" name="lpinput" id="inpt" placeholder="Enter text here"></input>
                </FormGroup>
                <FormGroup>
                    <label for="lptitle">Title</label>
                    <input class="form-control" type="text" name="lptitle" id="inpt1" placeholder="Enter text here"></input>
                </FormGroup>
                <FormGroup>
                    <label for="lpdesc">Description</label>
                    <input style={{ height: 100 }} class="form-control" type="textarea" name="lpdesc" id="inpt2" placeholder="Enter text here"></input>
                </FormGroup>
                <Container className="text-center">
                    <button className='btn-danger '>
                        Add
                    </button>
                    <buton className='btn-warning ml-2'>Clear</buton>
                </Container>
            </Form>
        </Fragment>
    );
}

export default Addcourse;
