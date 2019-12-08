import React from 'react';

import Client from './client.js';
import Btn from './assets/Button/Button.tsx';
import TextArea from './assets/TextArea/TextArea.tsx';
import 'antd/dist/antd.css';
import styled from 'styled-components';

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

const StyledMainContainer = styled.div`
	height: 100vh;
`;

// An example of using fetch to read our API without Socket.io
function callAPI() {
	fetch("http://localhost:3001/testAPI")
    .then(res => res.text())
    .then(res => console.log(res));
};

const emitMessage = (message) => {

}

function App() {
	
	return (
		<React.Fragment>
			<StyledMainContainer>
				<Sidebar />
				<div style={{ display: "inline-block", width: "83%", height: "100%", overflow: "auto", position: "relative" }}>
					<MessageBoard data={messages} />
					<div style={{ bottom: "0", width: "100%", position: "absolute", padding: "20px" }}>
						<div style={{ display: "inline-block", width: "95%" }}>
							<TextArea placeholderText="Start typing.." onEnter={emitMessage}/>
						</div>
						<div style={{ display: "inline-block", position: "absolute", width: "5%", height: "50px" }}>
							<Btn content="Send" handleClick={emitMessage} />
						</div>
					</div>
				</div>
			</StyledMainContainer>
		</React.Fragment>
	);
	
}

export default App;
