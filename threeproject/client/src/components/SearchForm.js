import React from "react";
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

function SearchForm(props) {
  return (
    <div className="App">
    <h1>Issa. Vibe.</h1>
    <Form>
      <div className="theVibeSearch">
        <Label for="searchMusic">Search. Music. Artist. Album. Song.</Label>
        <Input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search.Here."
          id="search"
        />
        <Button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </Button>
        </div>
    </Form>
    </div>
  );
}

export default SearchForm;