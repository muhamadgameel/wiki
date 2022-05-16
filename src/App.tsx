import { Component } from "solid-js";

const App: Component = () => {
  return (
    <div
      style={{
        border: "4px solid red",
        display: "flex",
        "flex-direction": "column",
        "align-items": "center",
        "justify-content": "center",
        flex: 1,
      }}
    >
      Wiki App
    </div>
  );
};

export { App };
