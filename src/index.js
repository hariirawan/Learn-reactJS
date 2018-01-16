import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import './assets/css/index.css';
import App from './containers/App';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
if(module.hot){
    module.hot.accept('./containers/App', () => {
        const NextApp = require('./containers/App').default;
        ReactDOM.render(
            <AppContainer>
                <NextApp/>
            </AppContainer>,
            document.getElementById('root')
        )                 
    })
}

// registerServiceWorker();
