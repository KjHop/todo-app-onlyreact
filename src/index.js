import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import ListOfTasks from './App';
// import AutoFocusTextInput from './CustomTextInput';
// import App from './ContextExample'
import App from './Clicker'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();