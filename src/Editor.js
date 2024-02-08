import React,{ useState } from "react";
import "./styles.css";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import {CKEditor} from "@ckeditor/ckeditor5-react";
//import {Editor as ClassicEditor} from "@ckeditor-custom-build/build/ckeditor";


export default function App() {

    const [ckData, setData] = useState("");

  return (
    <div>
        <div className="App">
            <h2>Using ckEditor</h2>
            <CKEditor
            editor={Editor}
            data="<p>welcome</p>"
            onReady={editor=>{
                console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor)=>{
                const data=editor.getData();
                console.log({event, editor, data});
                setData(data)
            }}
            onBlur={(event, editor)=>{
                console.log('Blur', editor);
            }}
            onFocus={(event, editor)=>{
                console.log('Focus', editor)
            }}
            />
        </div>
        
        {JSON.stringify(ckData)}
    </div>
  );
}
