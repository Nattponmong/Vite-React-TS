import React from "react";

type Props = {
  label: string;
};

// jsx
export default function Mycomponent(props: Props) {
  return (
    <div>
      <hr />
      <form action="">
        <label> {props.label}: </label>
        <br />
        <input type="text" name="your_meassage" id="your_meassage" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
