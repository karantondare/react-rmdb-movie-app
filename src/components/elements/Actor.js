import React from "react";
import PropTypes from "prop-types";

import NoImage from "../images/no_image.jpg";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import { StyledActor } from "../styles/StyledActor";

const Actor = ({ actor }) => (
  <StyledActor>
    <img
      src={
        actor.profile_path
          ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
          : NoImage
      }
      alt="actorthumb"
    />
    <span className="actor-name">{actor.name} as</span>
    <span className="actor-character">{actor.character}</span>
  </StyledActor>
);

Actor.propTypes = {
  actor: PropTypes.object,
};

export default Actor;
