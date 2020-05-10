import React from "react";
import styled from "styled-components";

function ProgressBar(props) {
  const Tracker = styled.div`
    width: 50%;
    height: 20px;
    margin: 15px auto;
    background: rgb(34, 34, 34);
    border-radius: 10px;
    box-shadow: inset 0 0 5px #000;
  `;
  const ProgressInTracker = styled.div`
    width:${props => props.percentage}%;
    height:100%;
    background-color:cyan;
    border-radius:8px;
  `;

  return (
    <div>
      <Tracker>
        <ProgressInTracker percentage={props.percentage} />
      </Tracker>
    </div>
  );
}

export default ProgressBar;
