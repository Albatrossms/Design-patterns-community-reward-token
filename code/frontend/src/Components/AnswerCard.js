import React from "react";
import LikeButton from "./LikeButton";
import Timer from "./Timer";
import DislikeButton from "./DislikeButton";
import "./Card/Card.css";

const AnswerCard = (props) => {
  return (
    <div>
      {/* add username here */}
      <Timer />
      <div className="card">
        {props.data}
        <LikeButton data={props.data} />
        <DislikeButton />
        <button>Select</button>
      </div>
    </div>
  );
};

export default AnswerCard;
