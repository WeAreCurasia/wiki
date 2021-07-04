import React, { useState, useEffect } from "react";
import Picker from "emoji-picker-react";

export function EmojiPicker({ editor }) {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    editor.chain().focus().insertContent(emojiObject.emoji).run();
    setChosenEmoji(emojiObject);
    // console.log(chosenEmoji);
  };
  useEffect(() => {
    var emojiTool = document.querySelector(".emoji-picker-react");
    emojiTool.style.display = "none";
  });
  const displayEmojiPicker = () => {
    var emojiTool = document.querySelector(".emoji-picker-react");
    if (emojiTool.style.display === "") emojiTool.style.display = "none";
    else emojiTool.style.display = "";
  };
  return (
    <div className="emojiPicker">
      <button onClick={() => displayEmojiPicker()}>Emoji</button>
      <Picker onEmojiClick={onEmojiClick} />
    </div>
  );
}
