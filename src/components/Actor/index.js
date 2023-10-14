import React from "react";
import PropTypes from "prop-types";
//styles
import { Wrapper, Image } from "./Actor.styles";

const Actor = ({ name, character, imageUrl }) => {
  const firstName = name.split(" ")[0];
  const lastName = name.split(" ")[1];
  

  return (
    <a
      href={`https://en.wikipedia.org/wiki/${firstName}_${lastName}`}
      target="_blank"
      rel="noreferrer"
      style={
        {
          textDecoration: "none",
      }}
    >
      <Wrapper>
        <Image
          src={imageUrl}
          alt="actor-thumb"

        />
        <h3>{name}</h3>
        <p>{character}</p>
      </Wrapper>
    </a>
  );
};

Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default Actor;
