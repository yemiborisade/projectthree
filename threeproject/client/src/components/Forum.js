import React from "react";
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

function Discussion() {
    return (
        <div className="App">
        <h1>Issa. Vibe.</h1>
        <Container className="theForm">
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Name</Label>
          <Input type="email" name="email" id="author" placeholder="Enter.Name.Here." />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Thoughts</Label>
          <br></br>
          <textarea type="password" name="password" id="thought-box" placeholder="Enter.Thoughts.Here." />
        </FormGroup>
        </Form>
        </Container>
        <Button id="thought-submit"> Submit.</Button>
        <Container id="thoughtThread"></Container>
        </div>
 

    );
  }


  export default Discussion;