import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import Client from './client.js';

import App from './App';

Client();

ReactDOM.render(<App />, document.getElementById('root'));

