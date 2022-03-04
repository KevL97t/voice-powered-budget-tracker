import React from 'react';
import ReactDOM  from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';
import './index.css'
import { Provider } from './context/context'
import App from './App';

ReactDOM.render(
    <SpeechProvider appId='f110cbe9-cb55-45a8-ab94-2839016a7bdb' language='en-US'>
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
     document.getElementById('root')
);