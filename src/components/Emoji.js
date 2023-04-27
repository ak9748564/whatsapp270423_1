import EmojiPicker from 'emoji-picker-react';
import React, { useState } from 'react';

function Emoji(){
const [inputStr, setInputStr] = useState('');
const [showPicker, setShowPicker] = useState(false);

const onEmojiClick = (emojiObject) => {
  setInputStr(prevInput => prevInput + emojiObject.emoji);
  console.log(emojiObject)
  setShowPicker(false);
}
  return(
  <div>
      
      <div className='picker-container'>
        <input
        className='input-style border' 
        value={inputStr}
        onChange={e => setInputStr(e.target.value)}
        />
        <img className='emoji-icon'
        src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
        onClick={() => setShowPicker(showPicker => !showPicker)}
        />
        {
          showPicker &&  <EmojiPicker pickerStyle={{ width: "100%" }} onEmojiClick={onEmojiClick} />
        }
        {
          inputStr 
        }
      </div>
  </div>);
}
export default Emoji;