import React from "react";
import { Button } from 'reactstrap';

function ResultList(props) {
    return (
      <ul className="list-group">
        {props.results.map(result => (
          <li className="list-group-item" key={result.id}>
            {result.title}
            <br>
            </br>
            {result.artist.name}
            <br>
            </br>
            {result.album.title}
            <br>
            </br>
            <img alt={result.album.cover} className="img-album" src={result.album.cover_medium}/>
          </li>
        ))}
        <Button>Play</Button>
      </ul>
    );
  }
  
  export default ResultList;