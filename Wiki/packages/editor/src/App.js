import React,{useEffect,useState} from "react";

import {
  EditorContent,
  BubbleMenu,
  FloatingMenu,
  useEditor,
} from "@tiptap/react";

import { extensions } from "./extensions";
import { plugins } from "./plugins/plugins";
import { content } from "./content";
import { BubbleMenuBar } from "./menuBars/BubbleMenuBar";
import { FloatingMenuBar } from "./menuBars/FloatingMenuBar";
import { MyDialog } from "./DialogBox";

function App() {
  const [statusDialog, setStatus] = useState(false);

  const editor = useEditor({
    extensions: extensions,
    content: content,
    // add className for textArea of the editor
    editorProps: {
      attributes: {
        class: "editorTextArea",
      },
    },
    //force the cursor to jump in the editor on initialization.
    autofocus: true,
    // disable the CSS injected by titap
    injectCSS: false,
  });
  const dialogBoxStatus = (clicked) => {
    setStatus(clicked);
    
  }

  useEffect(() => {
    if(editor!=null)
    editor.registerPlugin(plugins[0]);
  },[editor])

  return (
    <div className="App m-0 p-0 h-full w-full flex flex-row  bg-editor">
     <div className="w-64  flex-shrink-0  bg-nav h-screen "></div>
      <div className=" flex-grow  bg-editor h-screen ">
      {editor && (
        <BubbleMenu editor={editor}>
          <BubbleMenuBar editor={editor} />
        </BubbleMenu>
      )}
      {editor && (
        <FloatingMenu editor={editor}>
          <FloatingMenuBar editor={editor} status={dialogBoxStatus} />
        </FloatingMenu>
      )}
      {/* <MenuBar editor={editor} /> */}

        <EditorContent editor={editor} />
      </div>
      {statusDialog && (<MyDialog editor={editor} status={dialogBoxStatus} />
      )}
    </div>
  );
}

export default App;
