import React from "react";

// jsx
export default function Mycomponent(props: any) {
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
