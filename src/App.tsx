import React from 'react';
import {css} from "@emotion/css";

function App() {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div className={css`
        color: blue;
      `}>
        Hello React!
      </div>
    </div>
  );
}

export default App;
