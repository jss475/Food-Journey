import { toBeDisabled } from "@testing-library/jest-dom/dist/matchers";
import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

function RestaurantTile({
  res,
  handleLike,
  handleDisLike,
  disable,
  loggedIn,
  disableDislike,
}) {
  const { id, name, image, location, phone, menu } = res;

  return (
    <div className="media-element">
      <Card bg="light" bsPrefix="customCard" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} className="card_image" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{location}</Card.Text>
          <Button
            variant="danger"
            id="like_button"
            disabled={disable}
            onClick={() => {
              handleLike(res);
            }}
          >
            👍
          </Button>
          <Button
            variant="danger"
            id="dislike_button"
            disabled={disableDislike}
            onClick={() => handleDisLike(res)}
          >
            👎
          </Button>
        </Card.Body>
      </Card>

      {/* <h3>{name}</h3>
      <img src={image} alt={name} height={250} /> */}
      {/* <br /> */}
    </div>
  );
}

export default RestaurantTile;
