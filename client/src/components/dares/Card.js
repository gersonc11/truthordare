import React from "react";

function Card(props) {

  return (
    //   creating basic layout of quote card
    <div className="card">
      <div className="content">
        <ul>
          <li>
            <strong>Type:</strong> {props.type}
          </li>
          <li>
            <strong>Author:</strong> {props.author}
          </li>
          <li>
            <strong>Details:</strong> {props.details}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;