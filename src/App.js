import React, { useState, useEffect } from "react";
import "./styles.css";
import Editor from "./Editor";

export default function App(props) {
  //const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");

//   useEffect(() => {
//     setEditorLoaded(true);
//   }, []);

  return (
    <div className="App">
      <h1>ckEditor 5</h1>

      <Editor
        name="description"
        onChange={(data) => {
          setData(props.data);
        }}
        //editorLoaded={editorLoaded}
      />

      {JSON.stringify(data)}
    </div>
  );
}
