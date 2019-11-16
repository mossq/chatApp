import React from 'react';

import Btn from './assets/Button/Button.tsx';
import TextArea from './assets/TextArea/TextArea.tsx';
import 'antd/dist/antd.css';

import Sidebar from './components/Sidebar/Sidebar';
import MessageBoard from './components/MessageBoard/MessageBoard';

const msgs = [
  {
    message: "Witam1",
    messageID: "1",
    dateCreated: "2019-11-11 14:45:03"
  },
  {
    message: "Witam2",
    messageID: "2",
    dateCreated: "2019-11-11 14:45:53"
  }
];

const btnClick = () => {
  console.log("Nie klikłeś!!");
}

const messages = [{
  username: "Piotr",
  userID: 1,
  gravatar: "https://www.c-ville.com/wp-content/uploads/2019/09/Cats-660x335.jpg",
  dateCreated: "2019-11-11 14:45:03",
  messages: msgs
}, {
  username: "Magda",
  userID: 2,
  gravatar: "https://www.c-ville.com/wp-content/uploads/2019/09/Cats-660x335.jpg",
  dateCreated: "2019-11-11 14:47:03",
  messages:
    [{
      message: "WitamElo",
      messageID: "3",
      dateCreated: "2019-11-11 14:47:03"
    }]
}];

function App() {
  return (
    <React.Fragment>
      <div style={{ marginLeft: "10px" }}>
        <Sidebar />
        <div style={{ display: "inline-block", width: "90%", overflow: "hidden" }}>
          <MessageBoard data={messages} />
          <div style={{ display: "inline-block", bottom: "0", width: "100%" }}>
            <div style={{ display: "inline-block", width: "95%", height: "50px" }}>
              <TextArea placeholderText="Start typing.." />
            </div>
            <div style={{ display: "inline-block", position: "absolute", width: "5%", height: "50px" }}>
              <Btn content="Send" handleClick={btnClick} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
