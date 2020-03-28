import React from "react";
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';

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
        <Link to="/pagethree"><Button> The. Forum.</Button></Link>
      </ul>
    );
  }
  
  export default ResultList;