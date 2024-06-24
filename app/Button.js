"use client"
export default function Button() {
  return (
    <>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Open or close
      </button>
    </>
  );
}
