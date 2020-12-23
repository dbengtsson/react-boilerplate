import React, { useState } from 'react';
import { Textbox } from '../../components';

const MainView = () => {
  const [text, setText] = useState();
  return (
    <div>
      MainView
      <br />
      <Textbox
        label="A simple textbox"
        value={text}
        onChange={(val) => console.log(val)}
      />
      <Textbox value={text} onChange={(val) => console.log(val)} />
    </div>
  );
};
export default MainView;
