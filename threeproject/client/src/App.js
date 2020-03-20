import React from 'react';
import './App.css';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

const App = (props) => {
  return (
    <div className="App">
      <h1>Issa. Vibe.</h1>
      <Container className="theForm">
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Enter.Email.Here." />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Enter.Password.Here." />
      </FormGroup>
      </Form>
      </Container>
      <Button> Submit.</Button>
      <br></br>
      <br></br>
      <br></br>
      <Container className="issaWelcome">
      <p>Welcome to Issa Vibe. Whether it's a Friday night out on the town with friends or Saturday morning filled with chores, Issa Vibe can provide you with the music to put you in the right mood. Join now to catch a vibe. </p>
      </Container>    
      </div>
  );
}

export default App;