"use client";
export default function Button(props) {
  return (
    <>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
       {props.text}
      </button>
    </>
  );
}
