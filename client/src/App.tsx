import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LoginForm from './components/LoginForm/LoginForm';
import ChatScreen from './components/ChatScreen/ChatScreen';

function App(): JSX.Element {
	
	return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/chat" component={ChatScreen} />
      </Switch>
    </BrowserRouter>
	);
}

export default App;
