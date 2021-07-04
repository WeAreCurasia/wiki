/* reference-https://prosemirror.net/examples/upload/ */

import { plugins } from "./plugins/plugins";
/*importing placeholderPlugin from the array of plugins rather than importing the placeholderPlugin directly*/
var placeholderPlugin = plugins[0];

  function findPlaceholder(editor,state, id) {
    console.log(editor.state);
    let decos = placeholderPlugin.props.decorations(state);

    let found = decos.find(null, null, (spec) => spec.id === id);
    return found.length ? found[0].from : null;
  }
  /* 
  imageUpload function is imported and stored in  { imageUploadCommand} in "./commands.js" 
  and then added as ["action"] for imageUpload button in "./toolbar.js"
  */
 export var imageUpload = function (editor) {
    /* 
      hidden button of input type="file" which is triggered when image upload button of tootlbar is clicked
      */

    var hiddenUploadButton = document.createElement("input");
    hiddenUploadButton.setAttribute("type", "file");
    console.log("imageUpload called");
    console.log(editor.state);
    hiddenUploadButton.addEventListener("change", (e) => {
      if (
        editor.state.selection.$from.parent.inlineContent &&
        e.target.files.length
      )
        startImageUpload(editor,editor.view, e.target.files[0]);
      editor.view.focus();
    });
    hiddenUploadButton.click();
    return true;
  };
  function startImageUpload(editor,view, file) {
    // A fresh object to act as the ID for this upload
    let id = {};

    // Replace the selection with a placeholder
    let tr = editor.state.tr;
    if (!tr.selection.empty) tr.deleteSelection();
    tr.setMeta(placeholderPlugin, { add: { id, pos: tr.selection.from } });
    editor.view.dispatch(tr);

    uploadFile(editor,file).then(
      (url) => {
        let pos = findPlaceholder(editor,editor.state, id);
        // If the content around the placeholder has been deleted, drop
        // the image
        if (pos == null) return;
        // Otherwise, insert it at the placeholder's position, and remove
        // the placeholder
        console.log(editor.schema);
        editor.view.dispatch(
          editor.state.tr
            .replaceWith(
              pos,
              pos,
              editor.schema.nodes.image.create({ src: url })
            )
            .setMeta(placeholderPlugin, { remove: { id } })
        );
      },
      () => {
        // On failure, just clean up the placeholder
        editor.view.dispatch(tr.setMeta(placeholderPlugin, { remove: { id } }));
      }
    );
  }

  // This is just a dummy that loads the file and creates a data URL.
  // You could swap it out with a function that does an actual upload
  // and returns a regular URL for the uploaded file.
  function uploadFile(editor, file) {
    let reader = new FileReader();
    return new Promise((accept, fail) => {
      reader.onload = () => accept(reader.result);
      reader.onerror = () => fail(reader.error);
      // Some extra delay to make the asynchronicity visible
      setTimeout(() => reader.readAsDataURL(file), 1500);
    });
  }

  //return <button onClick={() => imageUpload()}>Image Upload</button>;

