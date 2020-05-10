import React from "react";
import ProgressBar from "./ProgressBar";

function Item(props) {
  return (
    <div className="flex justify-center p-4">
      <img src=" " alt="pic here" />
      <div className="px-5 w-1/2 flex-column items-stretch justify-center">
        <h2 className="flex-1 text-gray-600 text-xl">{props.title}</h2>
        <div className="flex-1">
          <ProgressBar percentage={props.percentage} />
        </div>
      </div>

      <div>
        <h2>Spent : ${props.spent}</h2>
        <h2>Budget : ${props.budget}</h2>
      </div>

      <div>{/* <Edit/>
        <Delete/> */}</div>
    </div>
  );
}

export default Item;
