import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

function PageTwo() {
    return (
        <div className="App">
        <h1>Issa. Vibe.</h1>
        <Container className="theForm">
        <Form>
        <FormGroup>
          <Label for="searchMusic">Search. Music. Artist. Song.</Label>
          <Input type="music" name="artist" id="searchMusic" placeholder="Search.Here." />
        </FormGroup>
        </Form>
        </Container>

        </div>

 

      
    );
  }
  
  export default PageTwo;